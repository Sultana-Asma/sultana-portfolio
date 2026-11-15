import React, { useEffect, useRef, useState } from "react";
import {
  Target,
  Rocket,
  Heart,
  BookOpen,
  GraduationCap,
  Code2,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const rightCardIcons = {
  goal: Target,
  "working-on": Rocket,
  "what-i-love": Heart,
};

const bottomCardIcons = {
  semester: BookOpen,
  university: GraduationCap,
  focus: Code2,
  learning: Sparkles,
};

export default function AboutSection() {
  const { owner, about } = portfolioData;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const photoSrc = owner.profilePhotoUrl || "/profile-picture.jpeg";

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className={`about-section border-b border-hairline py-16 sm:py-24 ${
        isVisible ? "about-is-visible" : ""
      }`}
    >
      {/* Subtle Ambient Background Accents */}
      <div className="about-ambient-glow about-ambient-glow--blue" aria-hidden="true" />
      <div className="about-ambient-glow about-ambient-glow--purple" aria-hidden="true" />

      <div className="relative mx-auto max-w-portfolio px-4 sm:px-6 lg:px-8">
        {/* A. Section Heading */}
        <div className="about-header about-reveal about-reveal--delay-1">
          <div className="about-eyebrow-pill">
            <span className="about-eyebrow-dot" aria-hidden="true" />
            <span>{about.label}</span>
          </div>

          <h2 id="about-heading" className="about-main-title font-display">
            Get to <span className="about-name-gradient">Know Me</span>
          </h2>

          <p className="about-intro-text">{about.intro}</p>
        </div>

        {/* B. Main Profile Area (Left Avatar | Middle Bio | Right 3 Info Cards) */}
        <div className="about-main-grid">
          {/* Left Side: Circular Profile Frame + Blue Gradient Decor + Floating Badge */}
          <div className="about-avatar-col about-reveal about-reveal--delay-2">
            <div className="about-avatar-stage">
              {/* Decorative Gradient Aura & Concentric Rings */}
              <div className="about-avatar-aura" aria-hidden="true" />
              <div className="about-avatar-ring-outer" aria-hidden="true" />
              <div className="about-avatar-ring-inner" aria-hidden="true" />

              {/* Circular Profile Image Frame */}
              <div className="about-avatar-frame">
                <img
                  src={photoSrc}
                  alt={`${owner.fullName} — ${owner.title}`}
                  className="about-avatar-img"
                />
              </div>

              {/* Floating Badge: Front-End Enthusiast */}
              <div className="about-floating-badge">
                <span className="about-floating-badge-icon" aria-hidden="true">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <span>{about.floatingBadge}</span>
              </div>
            </div>
          </div>

          {/* Middle Section: Greeting, Highlighted Name, Title & Description */}
          <div className="about-bio-col about-reveal about-reveal--delay-3">
            <span className="about-greeting font-mono">{about.greeting}</span>

            <h3 className="about-owner-name font-display">
              {about.firstNameAndMiddle}{" "}
              <span className="about-name-gradient">
                {about.highlightedLastName}
              </span>
            </h3>

            <div className="about-role-badge">
              <Code2 className="h-4 w-4 text-accent-primary" aria-hidden="true" />
              <span>{about.professionalTitle}</span>
            </div>

            <p className="about-description">{about.description}</p>

            {/* Subtle Core Interests Pills */}
            <div className="about-interest-strip">
              {about.primaryInterests.map((interest) => (
                <span key={interest} className="about-interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Three Information Cards (My Goal, Currently Working On, What I Love) */}
          <div className="about-cards-col about-reveal about-reveal--delay-4">
            {about.infoCards.map((card) => {
              const IconComponent = rightCardIcons[card.id] || Sparkles;
              return (
                <article
                  key={card.id}
                  className={`about-glass-card about-glass-card--${card.accent}`}
                >
                  <div
                    className={`about-card-icon about-card-icon--${card.accent}`}
                    aria-hidden="true"
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="about-card-body">
                    <h4 className="about-card-title font-display">
                      {card.title}
                    </h4>
                    <p className="about-card-desc">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 3. Bottom Education & Information Cards (4 Horizontal Cards) */}
        <div className="about-bottom-grid about-reveal about-reveal--delay-5">
          {about.bottomCards.map((item) => {
            const IconComponent = bottomCardIcons[item.id] || GraduationCap;
            return (
              <div
                key={item.id}
                className={`about-bottom-card about-bottom-card--${item.accent}`}
              >
                <div
                  className={`about-bottom-icon about-bottom-icon--${item.accent}`}
                  aria-hidden="true"
                >
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="about-bottom-content">
                  <h4 className="about-bottom-title font-display">
                    {item.title}
                  </h4>
                  <p className="about-bottom-subtitle">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
