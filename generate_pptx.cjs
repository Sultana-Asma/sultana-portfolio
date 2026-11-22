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

s1.addText("My Portfolio Website:\nDesign, Development & What I Learned", {
  x: 1.1,
  y: 1.35,
  w: 11.0,
  h: 1.4,
  fontSize: 26,
  fontFace: "Segoe UI",
  color: COLORS.textLight,
  bold: true,
});

s1.addText("A modern, interactive personal website to showcase my coding skills and coursework.", {
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
  "• My personal developer website built from scratch.\n\n" +
  "• Built using clean HTML, modern CSS, JavaScript, and React.\n\n" +
  "• Shows my university projects with real interactive demos instead of just reading text.",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 19 }
);

// Card 2
s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🎯 Who Is It For?", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Job Recruiters: Can quickly check my practical coding skills and clean design taste.\n\n" +
  "• University Teachers: Can test my real project work and verify my code.\n\n" +
  "• Classmates & Peers: To collaborate and learn from each other.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 19 }
);

// Card 3
s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🚀 My Main Goals", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Build a live digital profile instead of an old-fashioned paper or PDF resume.\n\n" +
  "• Solve a real problem: Show our desktop C++ OpenGL simulation directly in the browser.\n\n" +
  "• Make the website look great on mobile phones, tablets, and computers.",
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

s3.addText("Sticky Header Navigation • Smooth Client-Side Section Scrolling", {
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

// 6 Section Cards
const sitemapSections = [
  {
    title: "01. About Me",
    anchor: "#about",
    color: COLORS.blueAccent,
    points: "• Short Bio\n• Quick Metrics\n• DIU Identity\n• Profile Image",
  },
  {
    title: "02. Skills",
    anchor: "#skills",
    color: COLORS.cyanAccent,
    points: "• C Coding (40%)\n• HTML/CSS (40%)\n• SQL (65%)\n• Toolchain",
  },
  {
    title: "03. Projects",
    anchor: "#projects",
    color: COLORS.purpleAccent,
    points: "• Smart Village\n• C++ OpenGL\n• Feature Tags\n• [Sub-Modal ⮯]",
  },
  {
    title: "04. Education",
    anchor: "#education",
    color: COLORS.blueAccent,
    points: "• DIU B.Sc (CSE)\n• HSC (GPA 5.00)\n• SSC (GPA 4.94)\n• Achievements",
  },
  {
    title: "05. Services",
    anchor: "#services",
    color: COLORS.cyanAccent,
    points: "• Webpage Design\n• C Programming\n• SQL Queries\n• Fast Delivery",
  },
  {
    title: "06. Contact",
    anchor: "#contact",
    color: COLORS.blueAccent,
    points: "• Message Form\n• Honeypot Bot Trap\n• Direct Email\n• Social Icons",
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

// Sub-Modal Architecture Box
s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 2.2,
  y: 4.97,
  w: 8.93,
  h: 1.45,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.purpleAccent, width: 1.4 },
});

s3.addText("🔍 SUB-COMPONENT // INTERACTIVE CASE STUDY MODAL (Smart Village Simulation)", {
  x: 2.4,
  y: 5.08,
  w: 8.53,
  h: 0.28,
  fontSize: 10,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

// 3 Simulation Mode Blocks
const modes = [
  {
    name: "☀️ 1. Daytime Riverside Mode",
    desc: "Sunny village river scene with moving sailboat, windmill rotation, and clear sky.",
    x: 2.4,
  },
  {
    name: "🌙 2. Night & Solar Lamp Mode",
    desc: "Crescent moon, 36 sparkling stars, and solar streetlamp lighting cones.",
    x: 5.38,
  },
  {
    name: "🌧️ 3. Night Rain Mode (Canvas)",
    desc: "190 falling raindrops + real-time water ripple physics in the river at 60 FPS.",
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
s3.addText("Sitemap Goal: Single-page performance, zero reload delay, semantic HTML5 structure, and browser-accessible C++ OpenGL simulation.", {
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
const s4 = createBaseSlide("03 // Technologies", "Main Tools & HTML Tags I Used", "04");

// Card 1
s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("🏷️ HTML5 Semantic Tags", { x: 1.0, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s4.addText(
  "• <header> & <nav>: Used for top menu bar.\n\n" +
  "• <section> & <article>: Used to organize page content cleanly.\n\n" +
  "• <canvas>: Used to draw real-time falling rain and water ripples.\n\n" +
  "• <form> & <input>: Used for user messages.\n\n" +
  "Why? Semantic tags make the code clean, easy to read, and friendly for Google search (SEO).",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// Card 2
s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("🎨 Modern CSS Styling", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s4.addText(
  "• CSS Variables: Defined colors like --bg-surface and blue neon glow in one place.\n\n" +
  "• Flexbox & Grid: Used to position cards nicely on the screen.\n\n" +
  "• CSS clamp(): Keeps text readable on both small mobile phones and large laptops.\n\n" +
  "• Glass Blur: Added blurred transparent background for a modern look.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// Card 3
s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("⚡ JavaScript & React", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s4.addText(
  "• React Components: Code is broken into small reusable building blocks.\n\n" +
  "• React Hooks: Used useState to switch Day/Night modes and dark/light themes.\n\n" +
  "• Vite: Fast build tool that reloads instantly when editing code.\n\n" +
  "• Lucide Icons: Crisp SVG icons that never look blurry.",
  { x: 9.08, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 5: Key Features
// ==========================================
const s5 = createBaseSlide("04 // Key Features", "Main Features of My Portfolio Website", "05");

// Left Card
s5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s5.addText("🌧️ Interactive Project Simulation Popup", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s5.addText(
  "• Solves the C++ Graphics Problem: Our OpenGL project runs as a desktop .exe file. I built an interactive web popup so visitors can test it directly in the browser.\n\n" +
  "• 3 Live Atmosphere Modes:\n" +
  "   1. Daytime: Sunny village riverside with moving sailboat and windmill.\n" +
  "   2. Night & Solar Lamps: Glowing crescent moon, 36 stars, and solar lamp light cones.\n" +
  "   3. Night Rain: Dark rainy sky with animated falling rain and lightning.\n\n" +
  "• Canvas Rain Physics: 190 raindrops falling smoothly and creating real water ripples in the river.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// Right Card
s5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s5.addText("🛡️ User Experience & Security Features", { x: 7.13, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.blueAccent });
s5.addText(
  "• Dark & Light Theme Switcher: Visitors can switch theme with one click.\n\n" +
  "• Visual Skills Progress: Shows clear percentage bars for C (40%), HTML (40%), SQL (65%), and CSS/JS.\n\n" +
  "• Spam Bot Protection (Honeypot): Blocks internet spam bots automatically without annoying users with CAPTCHAs.\n\n" +
  "• Copy Email Button: One click copies my email with instant feedback.\n\n" +
  "• Works on All Devices: 100% responsive on Mobile Phones, Tablets, and PCs.",
  { x: 7.13, y: 2.2, w: 5.15, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 6: Code Explanation
// ==========================================
const s6 = createBaseSlide("05 // Code Explanation", "Two Important Code Snippets & Why I Used Them", "06");

// Snippet 1
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s6.addText("SNIPPET 1: CANVAS RAIN & WATER RIPPLES", { x: 1.05, y: 1.75, w: 5.15, h: 0.3, fontSize: 11, bold: true, color: COLORS.cyanAccent });

s6.addShape(pptx.shapes.RECTANGLE, { x: 1.05, y: 2.1, w: 5.15, h: 2.2, fill: { color: COLORS.codeBg }, line: { color: COLORS.cardBorder } });
s6.addText(
  "// 1. Move raindrops down with wind drift\n" +
  "d.y += d.speed;\n" +
  "d.x += d.wind;\n\n" +
  "// 2. If raindrop hits the river, make a ripple\n" +
  "if (d.y > height * 0.67 && Math.random() < 0.18) {\n" +
  "  addRipple(d.x, d.y); // Creates water circle\n" +
  "}\n" +
  "if (d.y > height + 20) {\n" +
  "  d.y = -d.length; d.x = Math.random() * width;\n" +
  "}",
  { x: 1.15, y: 2.18, w: 4.95, h: 2.0, fontSize: 9.5, fontFace: "Consolas", color: COLORS.codeText }
);

s6.addText(
  "Why I used this code:\n" +
  "• An 80MB video file would make the website slow to load.\n" +
  "• This lightweight code runs smoothly at 60 FPS directly in the browser.\n" +
  "• Brings our desktop C++ OpenGL rain feature to life on the web.",
  { x: 1.05, y: 4.5, w: 5.15, h: 1.6, fontSize: 10, color: COLORS.textMuted, lineSpacing: 15 }
);

// Snippet 2
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s6.addText("SNIPPET 2: SPAM BOT PROTECTION (HONEYPOT)", { x: 7.13, y: 1.75, w: 5.15, h: 0.3, fontSize: 11, bold: true, color: COLORS.blueAccent });

s6.addShape(pptx.shapes.RECTANGLE, { x: 7.13, y: 2.1, w: 5.15, h: 2.2, fill: { color: COLORS.codeBg }, line: { color: COLORS.cardBorder } });
s6.addText(
  "// Form submit handler\n" +
  "const handleSubmit = (e) => {\n" +
  "  e.preventDefault();\n" +
  "  if (!validateForm()) return;\n\n" +
  "  // Bot check: hidden field is empty for humans\n" +
  "  if (formData.website && formData.website.trim() !== '') {\n" +
  "    setStatus('success');\n" +
  "    return; // Silently blocks automated spam bot\n" +
  "  }\n" +
  "};",
  { x: 7.23, y: 2.18, w: 4.95, h: 2.0, fontSize: 9.5, fontFace: "Consolas", color: COLORS.codeText }
);

s6.addText(
  "Why I used this code:\n" +
  "• Protects my email from automated spam bots on the internet.\n" +
  "• Keeps the form friendly for human visitors without annoying puzzles or CAPTCHAs.\n" +
  "• Checks email format and message length before submitting.",
  { x: 7.13, y: 4.5, w: 5.15, h: 1.6, fontSize: 10, color: COLORS.textMuted, lineSpacing: 15 }
);

// ==========================================
// SLIDE 7: Output & Live Demo (With Actual Screenshots)
// ==========================================
const s7 = createBaseSlide("06 // Output & Demo", "Visual Output & Actual Website Screenshots", "07");

// Left Window Card: Desktop Homepage View
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.8,
  y: 1.55,
  w: 6.35,
  h: 4.9,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.cardBorder, width: 1 },
});

// Browser Titlebar Mockup
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.8,
  y: 1.55,
  w: 6.35,
  h: 0.35,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.cardBorder, width: 1 },
});

s7.addShape(pptx.shapes.OVAL, { x: 0.95, y: 1.67, w: 0.1, h: 0.1, fill: { color: "EF4444" } });
s7.addShape(pptx.shapes.OVAL, { x: 1.12, y: 1.67, w: 0.1, h: 0.1, fill: { color: "F59E0B" } });
s7.addShape(pptx.shapes.OVAL, { x: 1.29, y: 1.67, w: 0.1, h: 0.1, fill: { color: "10B981" } });

s7.addText("localhost:3000 • Desktop Homepage (Hero, Bio & Skills)", {
  x: 1.5,
  y: 1.6,
  w: 5.5,
  h: 0.24,
  fontSize: 8.5,
  fontFace: "Consolas",
  color: COLORS.textMuted,
});

// Desktop Screenshot Image
const heroShotPath = path.join(__dirname, "public", "screenshots", "website-desktop-hero.png");
if (fs.existsSync(heroShotPath)) {
  s7.addImage({
    path: heroShotPath,
    x: 0.85,
    y: 1.95,
    w: 6.25,
    h: 3.9,
  });
}

s7.addText("Actual Desktop View: Hero, About Me, Navigation & Skills Card", {
  x: 0.85,
  y: 6.0,
  w: 6.25,
  h: 0.35,
  fontSize: 9,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
  align: "center",
});

// Right Window Card: Simulation Modal View
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 7.35,
  y: 1.55,
  w: 5.18,
  h: 3.15,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.blueAccent, width: 1.2 },
});

s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 7.35,
  y: 1.55,
  w: 5.18,
  h: 0.32,
  fill: { color: COLORS.codeBg },
  line: { color: COLORS.blueAccent, width: 1 },
});

s7.addShape(pptx.shapes.OVAL, { x: 7.5, y: 1.66, w: 0.09, h: 0.09, fill: { color: "EF4444" } });
s7.addShape(pptx.shapes.OVAL, { x: 7.65, y: 1.66, w: 0.09, h: 0.09, fill: { color: "F59E0B" } });
s7.addShape(pptx.shapes.OVAL, { x: 7.8, y: 1.66, w: 0.09, h: 0.09, fill: { color: "10B981" } });

s7.addText("Smart Village Interactive Simulation Modal", {
  x: 7.98,
  y: 1.6,
  w: 4.4,
  h: 0.22,
  fontSize: 8,
  fontFace: "Consolas",
  color: COLORS.textLight,
  bold: true,
});

// Modal Screenshot Image
const modalShotPath = path.join(__dirname, "public", "screenshots", "website-simulation-modal.png");
if (fs.existsSync(modalShotPath)) {
  s7.addImage({
    path: modalShotPath,
    x: 7.4,
    y: 1.9,
    w: 5.08,
    h: 2.72,
  });
}

// Right Bottom: Live Demo Plan Card
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 7.35,
  y: 4.82,
  w: 5.18,
  h: 1.63,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.cyanAccent, width: 1.2 },
});

s7.addText("⏱️ 45-Second Live Browser Demo Steps", {
  x: 7.55,
  y: 4.92,
  w: 4.78,
  h: 0.28,
  fontSize: 10.5,
  fontFace: "Segoe UI",
  bold: true,
  color: COLORS.cyanAccent,
});

s7.addText(
  "1. Open Chrome browser (http://localhost:3000/ or :3001/)\n" +
  "2. Scroll to Skills to show the 4 animated percentage bars\n" +
  "3. Click 'View Case Study' on the Smart Village project\n" +
  "4. Toggle Night Mode (Moon & Lamps) and Rain Mode (Canvas Ripples)\n" +
  "5. Resize the window to demonstrate mobile responsiveness",
  {
    x: 7.55,
    y: 5.25,
    w: 4.78,
    h: 1.15,
    fontSize: 9,
    fontFace: "Segoe UI",
    color: COLORS.textLight,
    lineSpacing: 14,
  }
);

// ==========================================
// SLIDE 8: Challenges & Solutions
// ==========================================
const s8 = createBaseSlide("07 // Problem Solving", "Problems I Faced & How I Solved Them", "08");

// Card 1
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("⚙️ 1. OpenGL Web Problem", { x: 1.0, y: 1.75, w: 3.25, h: 0.35, fontSize: 12.5, bold: true, color: COLORS.textLight });
s8.addText(
  "The Problem:\n" +
  "Our C++ OpenGL graphics project runs on desktop as an .exe file, so it cannot be viewed directly on the web.\n\n" +
  "My Solution:\n" +
  "I designed an interactive Case Study popup with an HTML5 Canvas simulation that recreates Day, Night, and Rain modes in the browser.",
  { x: 1.0, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 17 }
);

// Card 2
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.84, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("🎨 2. Transparent Popup Bug", { x: 5.04, y: 1.75, w: 3.25, h: 0.35, fontSize: 12.5, bold: true, color: COLORS.textLight });
s8.addText(
  "The Problem:\n" +
  "Initially, the popup background was transparent, so the page text behind it was overlapping and hard to read.\n\n" +
  "My Solution:\n" +
  "I added a 100% solid dark charcoal background (#0c101d) and a dark blur overlay so all popup text is clear and readable.",
  { x: 5.04, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 17 }
);

// Card 3
s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.88, y: 1.55, w: 3.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("📱 3. Small Mobile Screen Fit", { x: 9.08, y: 1.75, w: 3.25, h: 0.35, fontSize: 12.5, bold: true, color: COLORS.textLight });
s8.addText(
  "The Problem:\n" +
  "On small phones (320px–360px), buttons and text were getting squeezed and overflowing off the screen.\n\n" +
  "My Solution:\n" +
  "I used responsive flex-wrap and CSS clamp() so fonts and buttons resize smoothly on small mobile screens.",
  { x: 9.08, y: 2.2, w: 3.25, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 17 }
);

// ==========================================
// SLIDE 9: Future Improvements
// ==========================================
const s9 = createBaseSlide("08 // Future Plans", "Future Improvements & Planned Features", "09");

// Left Box
s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s9.addText("📦 Backend & Database Plans", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s9.addText(
  "• Node.js Backend API: Connect the contact form to a real backend to send messages directly to my email.\n\n" +
  "• Database Storage: Save visitor inquiries in a PostgreSQL or MongoDB database.\n\n" +
  "• Admin Dashboard: Add a login page where I can view and manage all messages.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 20 }
);

// Right Box
s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.blueAccent } });
s9.addText("🚀 3D Graphics, App & Hosting", { x: 7.13, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.blueAccent });
s9.addText(
  "• 3D Web Graphics (Three.js): Add interactive 3D computer graphics models directly inside the browser.\n\n" +
  "• Mobile App Feel (PWA): Add offline support so visitors can open the website even without internet.\n\n" +
  "• Custom Domain: Publish the website online using Vercel or Netlify with my own domain name.",
  { x: 7.13, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 20 }
);

// ==========================================
// SLIDE 10: Conclusion & Q&A
// ==========================================
const s10 = createBaseSlide("09 // Conclusion & Q&A", "Conclusion & What I Learned", "10");

// Left Box: Learnings
s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s10.addText("💡 What I Learned from This Project", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s10.addText(
  "• How to write clean, semantic HTML and structure web pages properly.\n\n" +
  "• How to design responsive layouts using CSS Grid, Flexbox, and fluid clamp() typography.\n\n" +
  "• How to build real-time Canvas animations running at 60 FPS.\n\n" +
  "• How to debug real-world web problems like transparency bugs and mobile screen overflow.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 21 }
);

// Right Box: Thank You
s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.blueAccent } });
s10.addText("🤝 THANK YOU!", { x: 7.13, y: 2.3, w: 5.15, h: 0.6, fontSize: 24, bold: true, color: COLORS.textLight, align: "center" });
s10.addText(
  "\"Thank you Sir and everyone for your time.\n\nI am now ready to answer any questions you may have.\"",
  { x: 7.13, y: 3.1, w: 5.15, h: 1.5, fontSize: 12.5, color: COLORS.textMuted, align: "center", lineSpacing: 20 }
);

s10.addText("Q&A Session • Open for Questions", {
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

  // 1. Always copy to Updated Desktop file (never locked)
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
