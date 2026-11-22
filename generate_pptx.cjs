const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pptx = new pptxgen();

// Set 16:9 Widescreen (13.333 x 7.5 inches)
pptx.defineLayout({ name: "WIDE_16_9", width: 13.333, height: 7.5 });
pptx.layout = "WIDE_16_9";

pptx.author = "Sultana Asma Islam";
pptx.company = "Daffodil International University";
pptx.title = "My Portfolio Website — Design, Implementation & Learning";

// Color Palette
const COLORS = {
  bg: "090D18",
  cardBg: "11182B",
  cardBorder: "1E293B",
  blueAccent: "3B82F6",
  cyanAccent: "22D3EE",
  purpleAccent: "A855F7",
  textLight: "FFFFFF",
  textMuted: "94A3B8",
  codeBg: "060913",
  codeText: "E2E8F0",
};

// Helper for Slide Background, Header and Footer
function createBaseSlide(eyebrow, title, slideNum) {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Top Accent Line
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8,
    y: 0.45,
    w: 11.73,
    h: 0.04,
    fill: { color: COLORS.blueAccent },
    line: { color: COLORS.blueAccent },
  });

  // Eyebrow
  slide.addText(eyebrow.toUpperCase(), {
    x: 0.8,
    y: 0.6,
    w: 9.5,
    h: 0.3,
    fontSize: 10.5,
    fontFace: "Segoe UI",
    color: COLORS.cyanAccent,
    bold: true,
  });

  // Slide Title
  slide.addText(title, {
    x: 0.8,
    y: 0.9,
    w: 9.5,
    h: 0.55,
    fontSize: 20,
    fontFace: "Segoe UI",
    color: COLORS.textLight,
    bold: true,
  });

  // Slide Number Badge
  slide.addText(`Slide ${slideNum} / 10`, {
    x: 10.5,
    y: 0.6,
    w: 2.0,
    h: 0.35,
    fontSize: 10.5,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
    align: "right",
  });

  // Bottom Footer (Cleanly inside slide height 7.5)
  slide.addText("Sultana Asma Islam • Daffodil International University (DIU)", {
    x: 0.8,
    y: 6.8,
    w: 6.5,
    h: 0.35,
    fontSize: 9.5,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
  });

  slide.addText("Dept. of Computer Science & Engineering", {
    x: 7.5,
    y: 6.8,
    w: 5.0,
    h: 0.35,
    fontSize: 9.5,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
    align: "right",
  });

  return slide;
}

// ==========================================
// SLIDE 1: Title Slide
// ==========================================
const s1 = pptx.addSlide();
s1.background = { color: COLORS.bg };

// Accent bar
s1.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8,
  y: 0.8,
  w: 0.08,
  h: 5.4,
  fill: { color: COLORS.blueAccent },
  line: { color: COLORS.blueAccent },
});

s1.addText("DAFFODIL INTERNATIONAL UNIVERSITY • DEPT. OF CSE", {
  x: 1.1,
  y: 0.9,
  w: 11.0,
  h: 0.35,
  fontSize: 11,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

s1.addText("My Portfolio Website:\nDesign, Implementation & Learning", {
  x: 1.1,
  y: 1.35,
  w: 11.0,
  h: 1.4,
  fontSize: 26,
  fontFace: "Segoe UI",
  color: COLORS.textLight,
  bold: true,
});

s1.addText("A modern, interactive personal developer website showcasing engineering coursework and skills.", {
  x: 1.1,
  y: 2.85,
  w: 11.0,
  h: 0.4,
  fontSize: 12.5,
  fontFace: "Segoe UI",
  color: COLORS.textMuted,
});

// Card 1: Student Details
s1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 1.1,
  y: 3.4,
  w: 5.6,
  h: 2.8,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.blueAccent, width: 1.2 },
});

s1.addText("PRESENTER INFORMATION", {
  x: 1.35,
  y: 3.55,
  w: 5.1,
  h: 0.3,
  fontSize: 10,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

s1.addText([
  { text: "Name: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Sultana Asma Islam\n", options: { color: COLORS.textLight } },
  { text: "Student ID: ", options: { bold: true, color: COLORS.textLight } },
  { text: "0242310005101682\n", options: { color: COLORS.cyanAccent } },
  { text: "Batch: ", options: { bold: true, color: COLORS.textLight } },
  { text: "231          ", options: { color: COLORS.textLight } },
  { text: "Section: ", options: { bold: true, color: COLORS.textLight } },
  { text: "64_M\n", options: { color: COLORS.textLight } },
  { text: "Program: ", options: { bold: true, color: COLORS.textLight } },
  { text: "B.Sc. in CSE (FSIT)\n", options: { color: COLORS.textMuted } },
  { text: "GitHub: ", options: { bold: true, color: COLORS.textLight } },
  { text: "github.com/Sultana-Asma", options: { color: COLORS.blueAccent } },
], {
  x: 1.35,
  y: 3.9,
  w: 5.1,
  h: 2.1,
  fontSize: 11,
  fontFace: "Segoe UI",
  lineSpacing: 19,
});

// Card 2: Academic & Course Supervision
s1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 6.95,
  y: 3.4,
  w: 5.6,
  h: 2.8,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.cardBorder, width: 1 },
});

s1.addText("ACADEMIC SUPERVISION", {
  x: 7.2,
  y: 3.55,
  w: 5.1,
  h: 0.3,
  fontSize: 10,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

s1.addText([
  { text: "Course: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Web Computing\n", options: { bold: true, color: COLORS.cyanAccent } },
  { text: "Course Teacher: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Md. Taufik Hasan\n", options: { color: COLORS.textLight } },
  { text: "Designation: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Lecturer\n", options: { color: COLORS.textMuted } },
  { text: "Department: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Dept. of Computer Science & Engineering\n", options: { color: COLORS.textMuted } },
  { text: "Institution: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Daffodil International University (DIU)", options: { color: COLORS.textLight } },
], {
  x: 7.2,
  y: 3.9,
  w: 5.1,
  h: 2.1,
  fontSize: 11,
  fontFace: "Segoe UI",
  lineSpacing: 19,
});

// ==========================================
// SLIDE 2: Introduction
// ==========================================
const s2 = createBaseSlide("01 // Introduction", "Project Overview & Why I Built This", "02");

// Card 1
s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🌐 What Is This Website?", { x: 1.0, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Personal Front-End Portfolio: Built from scratch to showcase real engineering coursework.\n\n" +
  "• Technology Core: Engineered with Semantic HTML5, modern CSS variables, JavaScript, and React 19.\n\n" +
  "• Interactive Experience: Features live browser simulations instead of static resume text.",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 19 }
);

// Card 2
s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🎯 Who Is It For?", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Job Recruiters: Can evaluate practical coding ability, clean code architecture, and UI/UX design sense.\n\n" +
  "• University Teachers: Can test live coursework deliverables and verify implementation standards.\n\n" +
  "• Peers & Collaborators: Open-source project review and collaborative development.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 19 }
);

// Card 3
s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🚀 Primary Objectives", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Digital Identity: Replace traditional paper/PDF resumes with an authentic, verified live presence.\n\n" +
  "• Solve Coursework Barrier: Bring desktop C++ OpenGL graphics simulations directly into the browser.\n\n" +
  "• Full Responsiveness: Achieve 100% usability across mobile phones, tablets, and desktop monitors.",
  { x: 9.08, y: 2.2, w: 3.25, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 19 }
);

// ==========================================
// SLIDE 3: Website Structure & Sitemap Diagram
// ==========================================
const s3 = createBaseSlide("02 // Structure", "Website Structure & Sitemap Diagram", "03");

// Top Root Node: SPA Architecture
s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 3.66,
  y: 1.55,
  w: 6.0,
  h: 0.65,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.blueAccent, width: 1.5 },
});

s3.addText("🌐 SINGLE PAGE APPLICATION (SPA) ROOT", {
  x: 3.66,
  y: 1.62,
  w: 6.0,
  h: 0.28,
  fontSize: 11,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
  align: "center",
});

s3.addText("Single entry (index.html) • Sticky Header Bar • Client-Side Smooth Scrolling", {
  x: 3.66,
  y: 1.9,
  w: 6.0,
  h: 0.24,
  fontSize: 9.5,
  fontFace: "Segoe UI",
  color: COLORS.textMuted,
  align: "center",
});

// Vertical trunk line
s3.addShape(pptx.shapes.RECTANGLE, {
  x: 6.64,
  y: 2.2,
  w: 0.05,
  h: 0.35,
  fill: { color: COLORS.cyanAccent },
  line: { color: COLORS.cyanAccent },
});

// Horizontal branch distribution bar
s3.addShape(pptx.shapes.RECTANGLE, {
  x: 1.65,
  y: 2.55,
  w: 10.03,
  h: 0.04,
  fill: { color: COLORS.cyanAccent },
  line: { color: COLORS.cyanAccent },
});

// 6 Main Page Section Cards
const sitemapSections = [
  {
    title: "01. About Me",
    anchor: "#about",
    color: COLORS.blueAccent,
    points: "• Short Bio\n• Academic Journey\n• Quick Highlights\n• Profile Image",
  },
  {
    title: "02. Skills",
    anchor: "#skills",
    color: COLORS.cyanAccent,
    points: "• C Coding (40%)\n• HTML (40%)\n• SQL (65%)\n• CSS & JS (35%)",
  },
  {
    title: "03. Projects",
    anchor: "#projects",
    color: COLORS.purpleAccent,
    points: "• Smart Village\n• C++ OpenGL\n• Tech Stack Tags\n• [Sub-Modal ⮯]",
  },
  {
    title: "04. Education",
    anchor: "#education",
    color: COLORS.blueAccent,
    points: "• DIU B.Sc in CSE\n• HSC (GPA 5.00)\n• SSC (GPA 4.94)\n• Academic Timeline",
  },
  {
    title: "05. Services",
    anchor: "#services",
    color: COLORS.cyanAccent,
    points: "• Webpage Design\n• C Coding Logic\n• SQL Database\n• Clean Delivery",
  },
  {
    title: "06. Contact",
    anchor: "#contact",
    color: COLORS.blueAccent,
    points: "• Message Form\n• Honeypot Bot Trap\n• Direct Email\n• Social Links",
  },
];

sitemapSections.forEach((sec, idx) => {
  const xPos = 0.85 + idx * 2.01;

  // Drop line from horizontal bar
  s3.addShape(pptx.shapes.RECTANGLE, {
    x: xPos + 0.86,
    y: 2.55,
    w: 0.04,
    h: 0.22,
    fill: { color: COLORS.cyanAccent },
    line: { color: COLORS.cyanAccent },
  });

  // Card box
  s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos,
    y: 2.77,
    w: 1.78,
    h: 1.85,
    fill: { color: COLORS.cardBg },
    line: { color: sec.title.includes("Projects") ? COLORS.purpleAccent : COLORS.cardBorder, width: sec.title.includes("Projects") ? 1.5 : 1 },
  });

  // Section Title
  s3.addText(sec.title, {
    x: xPos + 0.08,
    y: 2.87,
    w: 1.62,
    h: 0.28,
    fontSize: 10,
    fontFace: "Segoe UI",
    bold: true,
    color: COLORS.textLight,
    align: "center",
  });

  // Anchor Badge
  s3.addText(sec.anchor, {
    x: xPos + 0.08,
    y: 3.15,
    w: 1.62,
    h: 0.22,
    fontSize: 8.5,
    fontFace: "Consolas",
    color: sec.color,
    align: "center",
  });

  // Bullet points
  s3.addText(sec.points, {
    x: xPos + 0.12,
    y: 3.42,
    w: 1.54,
    h: 1.1,
    fontSize: 8.5,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
    lineSpacing: 13,
  });
});

// Drop line from Projects Card to Sub-Modal
s3.addShape(pptx.shapes.RECTANGLE, {
  x: 4.87 + 0.86,
  y: 4.62,
  w: 0.04,
  h: 0.35,
  fill: { color: COLORS.purpleAccent },
  line: { color: COLORS.purpleAccent },
});

// Sub-Modal Architecture Box (Distinct from main scrollable sections)
s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 2.2,
  y: 4.97,
  w: 8.93,
  h: 1.45,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.purpleAccent, width: 1.4 },
});

s3.addText("🔍 SUB-FEATURE // INTERACTIVE CASE STUDY MODAL (Smart Village C++ Simulation)", {
  x: 2.4,
  y: 5.08,
  w: 8.53,
  h: 0.28,
  fontSize: 10,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

// 3 Simulation Mode Blocks (Clean, no redundant technical numbers)
const modes = [
  {
    name: "☀️ 1. Daytime Mode",
    desc: "Sunny village river scene with moving sailboat and rotating windmill animation.",
    x: 2.4,
  },
  {
    name: "🌙 2. Night & Solar Lamp Mode",
    desc: "Moonlit night sky with stars and glowing solar streetlamp illumination cones.",
    x: 5.38,
  },
  {
    name: "🌧️ 3. Rain Mode (Canvas)",
    desc: "Animated falling raindrops with real-time river ripples using HTML5 Canvas.",
    x: 8.36,
  },
];

modes.forEach((m) => {
  s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: m.x,
    y: 5.42,
    w: 2.76,
    h: 0.9,
    fill: { color: COLORS.cardBg },
    line: { color: COLORS.cardBorder, width: 1 },
  });

  s3.addText(m.name, {
    x: m.x + 0.1,
    y: 5.48,
    w: 2.56,
    h: 0.24,
    fontSize: 9,
    fontFace: "Segoe UI",
    bold: true,
    color: COLORS.textLight,
  });

  s3.addText(m.desc, {
    x: m.x + 0.1,
    y: 5.74,
    w: 2.56,
    h: 0.52,
    fontSize: 8,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
    lineSpacing: 11,
  });
});

// Bottom Summary Footnote
s3.addText("Architecture Distinction: 6 single-page scrollable sections (#) + 1 interactive dialog sub-modal launched from Projects.", {
  x: 0.85,
  y: 6.55,
  w: 11.6,
  h: 0.25,
  fontSize: 8.5,
  fontFace: "Segoe UI",
  color: COLORS.textMuted,
  align: "center",
});

// ==========================================
// SLIDE 4: HTML & Technologies Used
// ==========================================
const s4 = createBaseSlide("03 // Technologies", "Main Tools & Technologies Used in the Project", "04");

// Card 1: Semantic HTML5
s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("🏷️ Semantic HTML5 Elements", { x: 1.0, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s4.addText(
  "• <header> & <nav>: Used for the sticky top navigation bar.\n\n" +
  "• <section> & <article>: Provides clean semantic page hierarchy and structure.\n\n" +
  "• <canvas>: Used for procedural 2D rendering of rain and river ripples.\n\n" +
  "• <form> & <input>: Structured contact message form with ARIA accessibility roles.\n\n" +
  "Why? Semantic markup ensures accessibility (a11y), clean code organization, and search-friendly SEO.",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// Card 2: Modern CSS
s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("🎨 Modern CSS3 Styling", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s4.addText(
  "• CSS Variables: Centralized color palette (--bg-surface, --accent-blue) enabling instant theme switching.\n\n" +
  "• Flexbox & CSS Grid: Creates fluid multi-column card layouts and aligned components.\n\n" +
  "• CSS clamp(): Fluid typography scaling smoothly across small mobile phones to large monitors.\n\n" +
  "• Layered Glass Blur: Uses backdrop-filter blur for modern dark-themed contrast.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// Card 3: JavaScript, React & Vite
s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("⚡ JavaScript, React 19 & Tooling", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s4.addText(
  "• React 19 Components: Code is modularized into reusable UI components.\n\n" +
  "• React Hooks: useState handles Day/Night/Rain modes and theme states; useEffect manages events.\n\n" +
  "• Vite Bundler: Lightning-fast hot module replacement (HMR) and optimized production build.\n\n" +
  "• Lucide React Icons: Clean, resolution-independent SVG vector iconography.",
  { x: 9.08, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 5: Key Features
// ==========================================
const s5 = createBaseSlide("04 // Key Features", "Core Features & Interactive Capabilities", "05");

// Left Card: Simulation Feature
s5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s5.addText("🌧️ Interactive Project Simulation Popup", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s5.addText(
  "• Solves the C++ Graphics Barrier: Our OpenGL coursework runs natively on desktop as an .exe file. I built an in-browser interactive modal so evaluators can test the visual concepts live.\n\n" +
  "• 3 Live Atmosphere Modes:\n" +
  "   1. Daytime Mode: Sunny village riverside with an animated sailboat and windmill.\n" +
  "   2. Night & Solar Lamps: Moonlit scenery with glowing solar streetlamp light cones.\n" +
  "   3. Rain Mode: Procedural falling raindrops colliding with the river to produce real-time ripples.\n\n" +
  "• Pure Browser Canvas: Runs procedurally without heavy external video assets or plugins.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// Right Card: UX & Security Features
s5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s5.addText("🛡️ User Experience & Security Features", { x: 7.13, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.blueAccent });
s5.addText(
  "• Dark & Light Theme Switcher: Visitors can toggle between dark and light themes with one click.\n\n" +
  "• Verified Academic Skills Metrics: Clear percentage bars showing real coursework progress:\n" +
  "   - C Programming (40%) | HTML (40%)\n" +
  "   - SQL / MySQL (65%)   | CSS & JavaScript (35%)\n\n" +
  "• Invisible Honeypot Security: Traps automated spam bots silently without annoying users with CAPTCHAs.\n\n" +
  "• 100% Responsive Architecture: Adaptive layout for mobile phones, tablets, and desktops.",
  { x: 7.13, y: 2.2, w: 5.15, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 6: Code Explanation
// ==========================================
const s6 = createBaseSlide("05 // Code Explanation", "Two Important Code Snippets & Technical Justification", "06");

// Snippet 1: Canvas Rain Physics
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s6.addText("SNIPPET 1: CANVAS PROCEDURAL RAIN & RIPPLES", { x: 1.05, y: 1.75, w: 5.15, h: 0.3, fontSize: 11, bold: true, color: COLORS.cyanAccent });

s6.addShape(pptx.shapes.RECTANGLE, { x: 1.05, y: 2.1, w: 5.15, h: 2.2, fill: { color: COLORS.codeBg }, line: { color: COLORS.cardBorder } });
s6.addText(
  "// 1. Move raindrops down with natural wind drift\n" +
  "d.y += d.speed;\n" +
  "d.x += d.wind;\n\n" +
  "// 2. River surface collision: generate water ripple\n" +
  "if (d.y > height * 0.67 && Math.random() < 0.18) {\n" +
  "  addRipple(d.x, d.y); // Creates expanding water ring\n" +
  "}\n" +
  "if (d.y > height + 20) {\n" +
  "  d.y = -d.length; d.x = Math.random() * width;\n" +
  "}",
  { x: 1.15, y: 2.18, w: 4.95, h: 2.0, fontSize: 9.5, fontFace: "Consolas", color: COLORS.codeText }
);

s6.addText(
  "Technical Justification:\n" +
  "• Procedural 2D Canvas rendering animates dynamic rain and water ripples in real-time within the browser DOM.\n" +
  "• Eliminates the need for heavy external media files or video assets.\n" +
  "• Authentically recreates our desktop C++ OpenGL simulation directly on the web.",
  { x: 1.05, y: 4.5, w: 5.15, h: 1.6, fontSize: 10, color: COLORS.textMuted, lineSpacing: 15 }
);

// Snippet 2: Honeypot Bot Security
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s6.addText("SNIPPET 2: INVISIBLE HONEYPOT SPAM PROTECTION", { x: 7.13, y: 1.75, w: 5.15, h: 0.3, fontSize: 11, bold: true, color: COLORS.blueAccent });

s6.addShape(pptx.shapes.RECTANGLE, { x: 7.13, y: 2.1, w: 5.15, h: 2.2, fill: { color: COLORS.codeBg }, line: { color: COLORS.cardBorder } });
s6.addText(
  "// Hidden input: invisible to real users, auto-filled by bots\n" +
  "<div className=\"hidden\" aria-hidden=\"true\">\n" +
  "  <input name=\"website\" tabIndex={-1} autoComplete=\"off\"\n" +
  "    value={formData.website} onChange={handleChange} />\n" +
  "</div>\n\n" +
  "// Honeypot check in handleSubmit:\n" +
  "if (formData.website && formData.website.trim() !== '') {\n" +
  "  setStatus('success'); // Return dummy success\n" +
  "  return; // Silently discard automated spam submission\n" +
  "}",
  { x: 7.23, y: 2.18, w: 4.95, h: 2.0, fontSize: 9.0, fontFace: "Consolas", color: COLORS.codeText }
);

s6.addText(
  "Technical Justification:\n" +
  "• An invisible input field hidden from human view (aria-hidden=\"true\", tabIndex={-1}).\n" +
  "• Automated spam bots scrape the DOM and indiscriminately fill every field.\n" +
  "• If populated on submit, the script silently drops the submission without sending spam, providing frictionless protection without annoying CAPTCHAs.",
  { x: 7.13, y: 4.5, w: 5.15, h: 1.6, fontSize: 10, color: COLORS.textMuted, lineSpacing: 15 }
);

// ==========================================
// SLIDE 7: Output & Live Demo (3 Un-Squashed 16:9 Outputs)
// ==========================================
const s7 = createBaseSlide("06 // Output & Demo", "Visual Output & Live Demo Plan", "07");

// --- COLUMN 1: Desktop Homepage View ---
// Mockup Frame
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.8,
  y: 1.55,
  w: 3.65,
  h: 2.45,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.cardBorder, width: 1 },
});

// Titlebar
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.8,
  y: 1.55,
  w: 3.65,
  h: 0.32,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.cardBorder, width: 1 },
});
s7.addShape(pptx.shapes.OVAL, { x: 0.95, y: 1.66, w: 0.08, h: 0.08, fill: { color: "EF4444" } });
s7.addShape(pptx.shapes.OVAL, { x: 1.08, y: 1.66, w: 0.08, h: 0.08, fill: { color: "F59E0B" } });
s7.addShape(pptx.shapes.OVAL, { x: 1.21, y: 1.66, w: 0.08, h: 0.08, fill: { color: "10B981" } });
s7.addText("localhost:3000 • Homepage", {
  x: 1.38,
  y: 1.6,
  w: 3.0,
  h: 0.22,
  fontSize: 8,
  fontFace: "Consolas",
  color: COLORS.textMuted,
});

// Exact 16:9 Image (3.55 x 2.0)
const heroShotPath = path.join(__dirname, "public", "screenshots", "website-desktop-hero.png");
if (fs.existsSync(heroShotPath)) {
  s7.addImage({
    path: heroShotPath,
    x: 0.85,
    y: 1.92,
    w: 3.55,
    h: 2.0,
    sizing: { type: "contain", w: 3.55, h: 2.0 },
  });
}

// Column 1 Description Box
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.8,
  y: 4.15,
  w: 3.65,
  h: 2.35,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.cardBorder, width: 1 },
});
s7.addText("🖥️ 01 // Desktop Homepage", { x: 0.95, y: 4.25, w: 3.35, h: 0.25, fontSize: 11, bold: true, color: COLORS.cyanAccent });
s7.addText(
  "• Clean dark theme with electric blue glows\n\n" +
  "• Sticky navigation bar with active scroll spy\n\n" +
  "• Professional introduction & circular portrait\n\n" +
  "• Direct resume download and contact triggers",
  { x: 0.95, y: 4.58, w: 3.35, h: 1.8, fontSize: 9.5, color: COLORS.textMuted, lineSpacing: 14 }
);

// --- COLUMN 2: Technical Skills Output ---
// Mockup Frame
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 4.84,
  y: 1.55,
  w: 3.65,
  h: 2.45,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.blueAccent, width: 1.2 },
});

// Titlebar
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 4.84,
  y: 1.55,
  w: 3.65,
  h: 0.32,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.blueAccent, width: 1 },
});
s7.addShape(pptx.shapes.OVAL, { x: 4.99, y: 1.66, w: 0.08, h: 0.08, fill: { color: "EF4444" } });
s7.addShape(pptx.shapes.OVAL, { x: 5.12, y: 1.66, w: 0.08, h: 0.08, fill: { color: "F59E0B" } });
s7.addShape(pptx.shapes.OVAL, { x: 5.25, y: 1.66, w: 0.08, h: 0.08, fill: { color: "10B981" } });
s7.addText("localhost:3000 • #skills", {
  x: 5.42,
  y: 1.6,
  w: 3.0,
  h: 0.22,
  fontSize: 8,
  fontFace: "Consolas",
  color: COLORS.textMuted,
});

// Exact 16:9 Image (3.55 x 2.0)
const skillsShotPath = path.join(__dirname, "public", "screenshots", "website-skills-section.png");
if (fs.existsSync(skillsShotPath)) {
  s7.addImage({
    path: skillsShotPath,
    x: 4.89,
    y: 1.92,
    w: 3.55,
    h: 2.0,
    sizing: { type: "contain", w: 3.55, h: 2.0 },
  });
}

// Column 2 Description Box
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 4.84,
  y: 4.15,
  w: 3.65,
  h: 2.35,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.blueAccent, width: 1 },
});
s7.addText("📊 02 // Verified Skills Grid", { x: 4.99, y: 4.25, w: 3.35, h: 0.25, fontSize: 11, bold: true, color: COLORS.blueAccent });
s7.addText(
  "• C Programming: 40% (Foundational basic)\n\n" +
  "• HTML5 Semantic: 40% (Accessible markup)\n\n" +
  "• SQL / MySQL: 65% (Schema & query design)\n\n" +
  "• CSS & JavaScript: 35% (In continuous learning)",
  { x: 4.99, y: 4.58, w: 3.35, h: 1.8, fontSize: 9.5, color: COLORS.textMuted, lineSpacing: 14 }
);

// --- COLUMN 3: Simulation Modal Output ---
// Mockup Frame
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 8.88,
  y: 1.55,
  w: 3.65,
  h: 2.45,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.purpleAccent, width: 1.2 },
});

// Titlebar
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 8.88,
  y: 1.55,
  w: 3.65,
  h: 0.32,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.purpleAccent, width: 1 },
});
s7.addShape(pptx.shapes.OVAL, { x: 9.03, y: 1.66, w: 0.08, h: 0.08, fill: { color: "EF4444" } });
s7.addShape(pptx.shapes.OVAL, { x: 9.16, y: 1.66, w: 0.08, h: 0.08, fill: { color: "F59E0B" } });
s7.addShape(pptx.shapes.OVAL, { x: 9.29, y: 1.66, w: 0.08, h: 0.08, fill: { color: "10B981" } });
s7.addText("localhost:3000 • Simulation Modal", {
  x: 9.46,
  y: 1.6,
  w: 3.0,
  h: 0.22,
  fontSize: 8,
  fontFace: "Consolas",
  color: COLORS.textMuted,
});

// Exact 16:9 Image (3.55 x 2.0)
const modalShotPath = path.join(__dirname, "public", "screenshots", "website-simulation-modal.png");
if (fs.existsSync(modalShotPath)) {
  s7.addImage({
    path: modalShotPath,
    x: 8.93,
    y: 1.92,
    w: 3.55,
    h: 2.0,
    sizing: { type: "contain", w: 3.55, h: 2.0 },
  });
}

// Column 3 Description Box: Live Demo Quick Steps
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 8.88,
  y: 4.15,
  w: 3.65,
  h: 2.35,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.purpleAccent, width: 1.2 },
});
s7.addText("⏱️ 03 // 45-Sec Live Demo Plan", { x: 9.03, y: 4.25, w: 3.35, h: 0.25, fontSize: 11, bold: true, color: COLORS.purpleAccent });
s7.addText(
  "1. Open Chrome at http://localhost:3000/\n\n" +
  "2. Scroll to Skills to show 4 progress bars\n\n" +
  "3. Click 'View Case Study' on Smart Village\n\n" +
  "4. Toggle Day, Night, and Rain modes live\n\n" +
  "5. Resize window to demonstrate mobile fit",
  { x: 9.03, y: 4.58, w: 3.35, h: 1.8, fontSize: 9.0, color: COLORS.textLight, lineSpacing: 13 }
);

// ==========================================
// SLIDE 8: Challenges & Solutions
// ==========================================
const s8 = createBaseSlide("07 // Problem Solving", "Real Challenges Faced & Engineering Solutions", "08");

// Challenge 1
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("⚙️ 1. Desktop C++ OpenGL on Web", { x: 1.0, y: 1.75, w: 3.25, h: 0.35, fontSize: 12, bold: true, color: COLORS.textLight });
s8.addText(
  "The Challenge:\n" +
  "Our university graphics project was compiled as a native desktop C++ binary (.exe), making it impossible to run directly in web browsers.\n\n" +
  "Engineering Solution:\n" +
  "Designed an interactive Case Study modal powered by an HTML5 Canvas simulation that recreates the Daytime, Night, and Rain visual dynamics directly inside the browser.",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 17 }
);

// Challenge 2
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("🎨 2. Modal Backdrop Transparency", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 12, bold: true, color: COLORS.textLight });
s8.addText(
  "The Challenge:\n" +
  "The case study modal initially used a semi-transparent glass backdrop, causing background page text to bleed through and severely hurt readability.\n\n" +
  "Engineering Solution:\n" +
  "Replaced the transparent background with a solid opaque charcoal slate surface (#0c101d) and a dark blur overlay (rgba(3, 7, 18, 0.85)) for 100% crisp text readability.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 17 }
);

// Challenge 3
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("📱 3. Small-Screen Viewport Fit", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 12, bold: true, color: COLORS.textLight });
s8.addText(
  "The Challenge:\n" +
  "On narrow mobile screens (320px–375px), skill progress bars, modal buttons, and text cards suffered layout squeezing and horizontal overflow.\n\n" +
  "Engineering Solution:\n" +
  "Implemented responsive Flexbox wrapping, percentage-based grid columns, and CSS clamp() fluid typography to guarantee seamless multi-device scaling.",
  { x: 9.08, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 17 }
);

// ==========================================
// SLIDE 9: Future Improvements
// ==========================================
const s9 = createBaseSlide("08 // Future Plans", "Three Key Future Improvements", "09");

// Feature 1: Node.js Backend API
s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s9.addText("⚙️ 1. Node.js Backend API", { x: 1.0, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s9.addText(
  "• RESTful API Architecture:\n" +
  "Build a dedicated backend service using Node.js and Express to process contact form submissions.\n\n" +
  "• Automated Email Dispatch:\n" +
  "Connect to an email service (e.g. Nodemailer or Resend) to forward visitor inquiries straight to my personal inbox.\n\n" +
  "• Server-Side Security:\n" +
  "Implement server-side input validation, sanitization, and IP rate-limiting to prevent automated denial-of-service abuse.",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 18 }
);

// Feature 2: Database Integration
s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s9.addText("🗄️ 2. Database Integration", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.blueAccent });
s9.addText(
  "• Persistent Relational Storage:\n" +
  "Integrate a relational database (PostgreSQL or MySQL) to reliably persist all incoming inquiries and project interactions.\n\n" +
  "• Structured Schema Design:\n" +
  "Store visitor names, email addresses, categorized subjects, full messages, and timestamps safely.\n\n" +
  "• Admin Review Dashboard:\n" +
  "Create an authenticated admin dashboard route where I can view, search, and manage submitted messages.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 18 }
);

// Feature 3: Custom Domain & Hosting
s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s9.addText("🌐 3. Custom Domain & Hosting", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.purpleAccent });
s9.addText(
  "• Production Cloud Deployment:\n" +
  "Publish the portfolio to high-performance cloud hosting platforms such as Vercel or Netlify.\n\n" +
  "• Personalized Domain Name:\n" +
  "Connect the site to a personalized professional domain (e.g. sultanaasma.dev) with automatic SSL encryption.\n\n" +
  "• Automated CI/CD Pipelines:\n" +
  "Configure GitHub Actions to automatically build, test, and deploy code updates upon every git push to the main branch.",
  { x: 9.08, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 18 }
);

// ==========================================
// SLIDE 10: Conclusion & Q&A
// ==========================================
const s10 = createBaseSlide("09 // Conclusion & Q&A", "Conclusion & Key Project Learnings", "10");

// Left Box: Learnings
s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s10.addText("💡 What I Learned from This Project", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s10.addText(
  "• Semantic Architecture: Practical structuring of accessible web documents using Semantic HTML5.\n\n" +
  "• Modern CSS Mastery: Designing responsive layouts with custom CSS variables, Grid, Flexbox, and fluid clamp() typography.\n\n" +
  "• Procedural Canvas Animation: Building dynamic real-time graphics and collision physics using the HTML5 Canvas 2D context.\n\n" +
  "• Engineering Problem Solving: Debugging modal transparency bleed-through, securing forms with silent honeypots, and ensuring multi-device responsiveness.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 21 }
);

// Right Box: Thank You & Q&A
s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.blueAccent } });
s10.addText("🤝 THANK YOU!", { x: 7.13, y: 2.3, w: 5.15, h: 0.6, fontSize: 24, bold: true, color: COLORS.textLight, align: "center" });
s10.addText(
  "\"Thank you, honorable faculty and everyone, for your time and guidance.\n\nI am now ready to answer any questions regarding my project.\"",
  { x: 7.13, y: 3.1, w: 5.15, h: 1.5, fontSize: 12.5, color: COLORS.textMuted, align: "center", lineSpacing: 20 }
);

s10.addText("Q&A Session • Open for Faculty Evaluation", {
  x: 7.13,
  y: 4.8,
  w: 5.15,
  h: 0.4,
  fontSize: 11.5,
  bold: true,
  color: COLORS.cyanAccent,
  align: "center",
});

// Save to Workspace and Desktop safely
const baseTempWorkspace = path.join(__dirname, "Portfolio_Presentation_Sultana_New.pptx");
const primaryWorkspace = path.join(__dirname, "Portfolio_Presentation_Sultana.pptx");
const primaryDesktop = "C:\\Users\\USER\\Desktop\\Portfolio_Presentation_Sultana.pptx";
const updatedDesktop = "C:\\Users\\USER\\Desktop\\Portfolio_Presentation_Sultana_Updated.pptx";
const legacyWorkspace = path.join(__dirname, "My_Portfolio_Presentation_Sultana.pptx");
const legacyDesktop = "C:\\Users\\USER\\Desktop\\My_Portfolio_Presentation_Sultana.pptx";

pptx.writeFile({ fileName: baseTempWorkspace }).then(() => {
  console.log(`Generated presentation successfully.`);

  // 1. Always copy to Updated Desktop file
  try {
    fs.copyFileSync(baseTempWorkspace, updatedDesktop);
    console.log(`Saved updated copy on Desktop: ${updatedDesktop}`);
  } catch (err) {
    console.error("Updated desktop copy note:", err.message);
  }

  // 2. Try copying to primary workspace and desktop
  try {
    fs.copyFileSync(baseTempWorkspace, primaryWorkspace);
    console.log(`Updated primary in workspace: ${primaryWorkspace}`);
  } catch (err) {
    console.log("Workspace primary file is locked by open program.");
  }

  try {
    fs.copyFileSync(baseTempWorkspace, primaryDesktop);
    console.log(`Updated primary on Desktop: ${primaryDesktop}`);
  } catch (err) {
    console.log("Desktop primary file is currently open in PowerPoint.");
  }

  // 3. Try copying to legacy names
  try {
    fs.copyFileSync(baseTempWorkspace, legacyWorkspace);
    console.log(`Updated legacy in workspace: ${legacyWorkspace}`);
  } catch (err) {
    console.log("Workspace legacy file is locked.");
  }

  try {
    fs.copyFileSync(baseTempWorkspace, legacyDesktop);
    console.log(`Updated legacy on Desktop: ${legacyDesktop}`);
  } catch (err) {
    console.log("Desktop legacy file is locked.");
  }

  // Clean up temp file
  try {
    if (fs.existsSync(primaryWorkspace)) {
      fs.unlinkSync(baseTempWorkspace);
    }
  } catch (e) {}
});
