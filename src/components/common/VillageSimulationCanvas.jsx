import React, { useEffect, useRef, useState, useMemo } from "react";

/**
 * VillageSimulationCanvas
 * Interactive multi-layer simulation of the 2D Computer Graphics Smart Village
 * supporting Daytime, Night & Solar Lamps, and dynamic Physics-based Rain mode.
 */
export default function VillageSimulationCanvas({
  activeMode = "day", // "day" | "night" | "rain"
  className = "",
  showModeBadges = false,
  onModeChange,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isFlashing, setIsFlashing] = useState(false);

  // Pre-generate static star positions for pixel-perfect stability
  const stars = useMemo(() => {
    const starList = [];
    const count = 36;
    for (let i = 0; i < count; i++) {
      // Keep stars within the sky area (top 0% to 35%)
      const top = Math.random() * 32 + 2; // 2% to 34%
      const left = Math.random() * 94 + 3; // 3% to 97%
      const size = Math.random() * 1.8 + 1.2; // 1.2px to 3.0px
      const delay = (Math.random() * 3).toFixed(1);
      const duration = (Math.random() * 2 + 1.5).toFixed(1);
      const isDiamond = i % 7 === 0;
      starList.push({ id: i, top, left, size, delay, duration, isDiamond });
    }
    return starList;
  }, []);

  // Occasional distant ambient lightning flash in Rain mode
  useEffect(() => {
    if (activeMode !== "rain") return;

    let timeoutId;
    const triggerFlash = () => {
      // Flash lasts 110ms
      setIsFlashing(true);
      setTimeout(() => {
        setIsFlashing(false);
      }, 110);

      // Schedule next flash between 7s and 12s
      const nextDelay = Math.random() * 5000 + 7000;
      timeoutId = setTimeout(triggerFlash, nextDelay);
    };

    timeoutId = setTimeout(triggerFlash, 5000);
    return () => clearTimeout(timeoutId);
  }, [activeMode]);

  // High-performance Canvas Rain Particle Engine
  useEffect(() => {
    if (activeMode !== "rain") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("resize", handleResize);

    // Initialize 190 raindrops
    const dropCount = 190;
    const drops = [];
    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * (width + 100) - 50,
        y: Math.random() * height,
        length: Math.random() * 14 + 14, // 14px to 28px
        speed: Math.random() * 8 + 15, // 15 to 23 px per frame
        opacity: Math.random() * 0.45 + 0.35, // 0.35 to 0.8
        wind: 1.8 + Math.random() * 0.6, // Wind drift angle
        thickness: Math.random() * 0.6 + 1.1, // 1.1 to 1.7 px
      });
    }

    // Water ripple splashes
    const ripples = [];
    const addRipple = (x, y) => {
      if (ripples.length < 30) {
        ripples.push({
          x,
          y,
          radius: 1,
          maxRadius: Math.random() * 5 + 4,
          alpha: 0.65,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Falling Raindrops
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];

        // Draw individual raindrop streak
        ctx.strokeStyle = `rgba(186, 230, 253, ${d.opacity})`;
        ctx.lineWidth = d.thickness;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + d.wind * (d.length / 10), d.y + d.length);
        ctx.stroke();

        // Update particle physics
        d.y += d.speed;
        d.x += d.wind;

        // When raindrop hits the river (bottom ~33% of canvas)
        if (d.y > height * 0.67 && d.y < height * 0.98) {
          if (Math.random() < 0.18) {
            addRipple(d.x, d.y);
          }
        }

        // Loop drop back to top
        if (d.y > height + 20) {
          d.y = -d.length - Math.random() * 30;
          d.x = Math.random() * (width + 100) - 50;
        }
      }

      // 2. Draw River Water Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        ctx.strokeStyle = `rgba(186, 230, 253, ${r.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(r.x, r.y, r.radius * 2.4, r.radius * 0.75, 0, 0, Math.PI * 2);
        ctx.stroke();

        r.radius += 0.35;
        r.alpha -= 0.035;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode]);

  const isNight = activeMode === "night";
  const isRain = activeMode === "rain";
  const isDarkScene = isNight || isRain;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none aspect-[16/10] bg-[#070a14] ${className}`}
    >
      {/* 1. BASE LANDSCAPE IMAGE */}
      <img
        src="/smart-village.png"
        alt="Smart Village Simulation"
        className={`h-full w-full object-cover transition-all duration-700 ${
          isNight
            ? "village-img--night"
            : isRain
            ? "village-img--rain"
            : "village-img--day"
        }`}
      />

      {/* 2. NIGHT / RAIN AMBIENT TINT OVERLAY */}
      {isDarkScene && (
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
            isRain ? "bg-[#090e24]/45" : "bg-[#0a0f2b]/40"
          } mix-blend-multiply`}
          aria-hidden="true"
        />
      )}

      {/* 3. SKY TRANSFORMATION OVERLAY (Replaces daytime sky & sun seamlessly) */}
      {isDarkScene && (
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-[36.8%] transition-all duration-700 ${
            isRain
              ? "bg-gradient-to-b from-[#04060f] via-[#080d22] to-[#101736]"
              : "bg-gradient-to-b from-[#040716] via-[#09102f] to-[#131c46]"
          }`}
          aria-hidden="true"
        >
          {/* Subtle Nebula / Milky Way Hue */}
          <div className="absolute inset-0 bg-radial-gradient opacity-35" />

          {/* Twinkling Stars */}
          {stars.map((star) => (
            <span
              key={star.id}
              className={`absolute rounded-full transition-opacity ${
                star.isDiamond
                  ? "bg-cyan-200 shadow-[0_0_6px_#67e8f9] animate-pulse"
                  : "bg-white shadow-[0_0_4px_#fff]"
              }`}
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                opacity: isRain ? 0.35 : 0.9,
              }}
            />
          ))}

          {/* Glowing Crescent Moon */}
          <div
            className={`absolute top-[18%] right-[12%] flex items-center justify-center transition-all duration-700 ${
              isRain ? "opacity-60 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Lunar Outer Radial Aura */}
            <div
              className="absolute -inset-4 rounded-full bg-amber-100/30 blur-xl animate-pulse"
              style={{ animationDuration: "3.5s" }}
            />
            {/* Crescent Moon SVG */}
            <svg
              className="relative h-9 w-9 sm:h-11 sm:w-11 drop-shadow-[0_0_14px_rgba(254,240,138,0.95)]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lunarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffbeb" />
                  <stop offset="60%" stopColor="#fef08a" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>
              {/* Crescent path mathematically carved */}
              <path
                d="M 65 10 A 42 42 0 1 0 88 75 A 36 36 0 1 1 65 10 Z"
                fill="url(#lunarGrad)"
              />
            </svg>
          </div>

          {/* Shooting Star Animation (Periodically streaks across the night sky) */}
          {isNight && (
            <div className="village-shooting-star" aria-hidden="true" />
          )}

          {/* Rain Mode Dark Passing Cloud Puffs */}
          {isRain && (
            <>
              <div className="absolute top-[8%] left-[15%] h-12 w-44 rounded-full bg-slate-900/60 blur-lg" />
              <div className="absolute top-[12%] right-[8%] h-14 w-52 rounded-full bg-slate-900/70 blur-xl" />
            </>
          )}
        </div>
      )}

      {/* 4. SOLAR STREETLAMPS ILLUMINATION (Along Fence in Middle Ground) */}
      {isDarkScene && (
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          {/* Lamp 1 */}
          <div className="absolute top-[36.2%] left-[35.6%]">
            <span className="absolute -top-1 -left-1 h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_12px_#fde047] animate-pulse" />
            <div className="village-lamp-cone" />
          </div>

          {/* Lamp 2 */}
          <div className="absolute top-[36.2%] left-[66.1%]">
            <span className="absolute -top-1 -left-1 h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_12px_#fde047] animate-pulse" />
            <div className="village-lamp-cone" />
          </div>

          {/* Lamp 3 */}
          <div className="absolute top-[36.2%] left-[82.4%]">
            <span className="absolute -top-1 -left-1 h-2.5 w-2.5 rounded-full bg-amber-200 shadow-[0_0_12px_#fde047] animate-pulse" />
            <div className="village-lamp-cone" />
          </div>
        </div>
      )}

      {/* 5. COZY VILLAGE COTTAGE WINDOW & DOOR LIGHTS */}
      {isDarkScene && (
        <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
          {/* Left Cottage Window Light */}
          <div
            className="absolute top-[49.2%] left-[21.1%] h-[4.2%] w-[2.6%] rounded-sm bg-amber-200 shadow-[0_0_14px_rgba(253,224,71,0.95)]"
            title="Cozy Cottage Interior Light"
          />

          {/* Right Cottage Window/Door Light */}
          <div
            className="absolute top-[55.5%] left-[39.5%] h-[5.2%] w-[2.8%] rounded-sm bg-amber-200 shadow-[0_0_16px_rgba(253,224,71,0.95)]"
            title="Cozy Cottage Interior Light"
          />
        </div>
      )}

      {/* 6. MOONLIT RIVER WATER REFLECTION SHIMMER */}
      {isNight && (
        <div
          className="pointer-events-none absolute bottom-0 right-[8%] z-10 h-[32%] w-[24%] village-water-shimmer"
          aria-hidden="true"
        />
      )}

      {/* 7. DYNAMIC CANVAS RAIN PARTICLES ENGINE (190 Drops + Ripples) */}
      {isRain && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          aria-hidden="true"
        />
      )}

      {/* 8. DISTANT RAIN LIGHTNING FLASH */}
      {isRain && isFlashing && (
        <div
          className="pointer-events-none absolute inset-0 z-30 bg-white/20 backdrop-brightness-125 transition-opacity duration-100"
          aria-hidden="true"
        />
      )}

      {/* 9. RAIN MIST / ATMOSPHERIC OVERLAY */}
      {isRain && (
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-sky-950/25 via-transparent to-slate-900/30"
          aria-hidden="true"
        />
      )}

      {/* Mode Switch Pills (Optional inline or on card) */}
      {showModeBadges && onModeChange && (
        <div className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 p-1 backdrop-blur-md">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onModeChange("day");
            }}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
              activeMode === "day"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Day
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onModeChange("night");
            }}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
              activeMode === "night"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Night
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onModeChange("rain");
            }}
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold transition-all ${
              activeMode === "rain"
                ? "bg-cyan-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Rain
          </button>
        </div>
      )}
    </div>
  );
}
