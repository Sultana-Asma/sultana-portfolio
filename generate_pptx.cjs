const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pptx = new pptxgen();

// Set 16:9 Widescreen
pptx.layout = "LAYOUT_16x9";
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

// Helper to add common slide background and header
function createBaseSlide(eyebrow, title, slideNum) {
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  // Top header line
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.8,
    y: 0.5,
    w: 11.7,
    h: 0.04,
    fill: { color: COLORS.blueAccent },
    line: { color: COLORS.blueAccent },
  });

  // Eyebrow
  slide.addText(eyebrow.toUpperCase(), {
    x: 0.8,
    y: 0.65,
    w: 9.0,
    h: 0.3,
    fontSize: 10,
    fontFace: "Segoe UI",
    color: COLORS.cyanAccent,
    bold: true,
  });

  // Main Title
  slide.addText(title, {
    x: 0.8,
    y: 0.95,
    w: 9.5,
    h: 0.65,
    fontSize: 22,
    fontFace: "Segoe UI",
    color: COLORS.textLight,
    bold: true,
  });

  // Slide Number
  slide.addText(`Slide ${slideNum} / 10`, {
    x: 10.5,
    y: 0.65,
    w: 2.0,
    h: 0.35,
    fontSize: 10,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
    align: "right",
  });

  // Footer
  slide.addText("Sultana Asma Islam • Daffodil International University (DIU)", {
    x: 0.8,
    y: 7.0,
    w: 8.0,
    h: 0.3,
    fontSize: 9,
    fontFace: "Segoe UI",
    color: COLORS.textMuted,
  });

  slide.addText("Department of Computer Science & Engineering", {
    x: 8.5,
    y: 7.0,
    w: 4.0,
    h: 0.3,
    fontSize: 9,
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

// Decorative ambient bar
s1.addShape(pptx.shapes.RECTANGLE, {
  x: 1.0,
  y: 1.2,
  w: 0.1,
  h: 4.8,
  fill: { color: COLORS.blueAccent },
  line: { color: COLORS.blueAccent },
});

// Title & Subtitle
s1.addText("DAFFODIL INTERNATIONAL UNIVERSITY • DEPT. OF CSE", {
  x: 1.3,
  y: 1.3,
  w: 10.5,
  h: 0.3,
  fontSize: 11,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

s1.addText("My Portfolio Website:\nDesign, Implementation & Learning", {
  x: 1.3,
  y: 1.8,
  w: 10.5,
  h: 1.6,
  fontSize: 28,
  fontFace: "Segoe UI",
  color: COLORS.textLight,
  bold: true,
});

s1.addText("Modern Front-End Architecture, Responsive UI & Interactive Showcase", {
  x: 1.3,
  y: 3.5,
  w: 10.5,
  h: 0.4,
  fontSize: 13,
  fontFace: "Segoe UI",
  color: COLORS.textMuted,
});

// Card 1: Presenter Info
s1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 1.3,
  y: 4.2,
  w: 5.2,
  h: 2.1,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.blueAccent, width: 1 },
});

s1.addText("PRESENTER DETAILS", {
  x: 1.5,
  y: 4.35,
  w: 4.8,
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
  { text: "[Your DIU Student ID]\n", options: { color: COLORS.cyanAccent } },
  { text: "Program: ", options: { bold: true, color: COLORS.textLight } },
  { text: "B.Sc. in CSE (Final Semester)\n", options: { color: COLORS.textMuted } },
  { text: "GitHub: ", options: { bold: true, color: COLORS.textLight } },
  { text: "github.com/Sultana-Asma", options: { color: COLORS.blueAccent } },
], {
  x: 1.5,
  y: 4.7,
  w: 4.8,
  h: 1.4,
  fontSize: 11,
  fontFace: "Segoe UI",
  lineSpacing: 20,
});

// Card 2: Academic & Course Supervision
s1.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 6.8,
  y: 4.2,
  w: 5.2,
  h: 2.1,
  fill: { color: COLORS.cardBg },
  line: { color: COLORS.cardBorder, width: 1 },
});

s1.addText("ACADEMIC SUPERVISION", {
  x: 7.0,
  y: 4.35,
  w: 4.8,
  h: 0.3,
  fontSize: 10,
  fontFace: "Segoe UI",
  color: COLORS.cyanAccent,
  bold: true,
});

s1.addText([
  { text: "Institution: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Daffodil International University (DIU)\n", options: { color: COLORS.textLight } },
  { text: "Course: ", options: { bold: true, color: COLORS.textLight } },
  { text: "[e.g. Web Engineering / Academic Project]\n", options: { color: COLORS.cyanAccent } },
  { text: "Supervised By: ", options: { bold: true, color: COLORS.textLight } },
  { text: "[Teacher's Name & Designation]\n", options: { color: COLORS.textMuted } },
  { text: "Format: ", options: { bold: true, color: COLORS.textLight } },
  { text: "4 Min Presentation + 1 Min Q&A", options: { color: COLORS.textLight } },
], {
  x: 7.0,
  y: 4.7,
  w: 4.8,
  h: 1.4,
  fontSize: 11,
  fontFace: "Segoe UI",
  lineSpacing: 20,
});

// ==========================================
// SLIDE 2: Introduction
// ==========================================
const s2 = createBaseSlide("01 // Executive Context", "Project Overview & Target Audience", "02");

s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🌐 What the Website Is", { x: 1.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• A modern, high-performance developer portfolio built from scratch.\n\n" +
  "• Engineered using Semantic HTML5, modern CSS3, and React component architecture.\n\n" +
  "• Created to showcase real-world computer science coursework and front-end engineering skills.",
  { x: 1.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🎯 Target Audience", { x: 5.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Technical Recruiters & HR: Assessing practical coding ability, attention to UI/UX, and front-end competency.\n\n" +
  "• University Evaluators: Reviewing structural implementation, adherence to modern web standards, and code quality.\n\n" +
  "• Engineering Peers: Fostering open-source collaboration and feedback.",
  { x: 5.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

s2.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s2.addText("🚀 Primary Objectives", { x: 9.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s2.addText(
  "• Establish a verified digital presence superior to static PDF resumes.\n\n" +
  "• Solve the challenge of showcasing desktop C++ OpenGL graphics simulations natively inside the browser.\n\n" +
  "• Achieve 100% responsiveness across Mobile, Tablet, and Desktop displays.",
  { x: 9.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

// ==========================================
// SLIDE 3: Website Structure & Sitemap
// ==========================================
const s3 = createBaseSlide("02 // Architecture", "Website Structure & Sectional Sitemap", "03");

s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 5.6, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s3.addText("🏗️ Single Page Application (SPA) Rationale", { x: 1.0, y: 2.0, w: 5.2, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s3.addText(
  "• Zero Page-Reload Latency: Eliminates jarring full-page refreshes for a seamless user journey.\n\n" +
  "• Sticky Blurred Navigation: Translucent glassmorphic header tracks active section position in real time.\n\n" +
  "• Accessible Anchor Routing: Clean semantic IDs (#about, #skills, #projects, #education, #services, #contact) enable direct linking.",
  { x: 1.0, y: 2.6, w: 5.2, h: 3.6, fontSize: 11, color: COLORS.textMuted, lineSpacing: 20 }
);

s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.8, w: 5.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s3.addText("📋 6 Purpose-Built Content Sections", { x: 7.0, y: 2.0, w: 5.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s3.addText(
  "01 // About Me: Bio, CSE background at DIU, career goals, and core interests.\n\n" +
  "02 // Technical Skills: 2x2 grid with animated progress bars (C, HTML, SQL, CSS & JS).\n\n" +
  "03 // Featured Project: Smart Village OpenGL/GLUT simulation + interactive modal.\n\n" +
  "04 // Academic Background: Education timeline (DIU B.Sc., HSC GPA 5.00, SSC GPA 4.94).\n\n" +
  "05 // Services: Basic HTML, C programming, SQL queries, and Collaboration banner.\n\n" +
  "06 // Contact: Validated message form, copy email button, and direct channels.",
  { x: 7.0, y: 2.5, w: 5.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 4: HTML & Technologies Used
// ==========================================
const s4 = createBaseSlide("03 // Technical Stack", "Technologies & Semantic HTML Elements", "04");

s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("🏷️ Semantic HTML5 Elements", { x: 1.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 12, bold: true, color: COLORS.textLight });
s4.addText(
  "• <header> & <nav>: App header and sticky accessible navigation.\n\n" +
  "• <section> & <article>: Meaningful grouping for SEO and screen readers.\n\n" +
  "• <canvas>: 60 FPS real-time rain particle rendering.\n\n" +
  "• <form>, <input>, <button>: Fully accessible form controls with ARIA labels.",
  { x: 1.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("🎨 Modern CSS3 Architecture", { x: 5.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 12, bold: true, color: COLORS.textLight });
s4.addText(
  "• CSS Design Tokens: Variables for dark/light themes (--bg-canvas, --bg-surface).\n\n" +
  "• CSS Grid & Flexbox: Multi-axis responsive alignment.\n\n" +
  "• Fluid Typography: clamp() ensures headers scale smoothly on phones.\n\n" +
  "• Glassmorphism: Hardware-accelerated backdrop-filter blur.",
  { x: 5.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

s4.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s4.addText("⚡ JavaScript & React Ecosystem", { x: 9.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 12, bold: true, color: COLORS.textLight });
s4.addText(
  "• React 18: Component-driven hierarchy with clean props and modularity.\n\n" +
  "• React Hooks: useState, useEffect, useRef, and useMemo for optimal re-renders.\n\n" +
  "• Vite Build Tool: Sub-second hot module replacement & fast production bundles.\n\n" +
  "• Lucide SVG Icons: Razor-sharp on Retina / 4K displays.",
  { x: 9.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 5: Key Features
// ==========================================
const s5 = createBaseSlide("04 // Engineering Highlights", "Key Features & Interactive Capabilities", "05");

s5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 5.6, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s5.addText("🌧️ Interactive Simulation Modal", { x: 1.0, y: 2.0, w: 5.2, h: 0.4, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s5.addText(
  "• Solves the Desktop OpenGL Web Barrier: Bridges compiled C++ executables to the web via an interactive case study.\n\n" +
  "• 3 Dynamic Atmosphere Modes:\n" +
  "   1. Daytime Scene: Lush village riverside with windmill and sailboat.\n" +
  "   2. Night & Solar Lamps: Glowing crescent moon, 36 stars, and solar lamp light cones.\n" +
  "   3. Night Rain Mode: Overcast stormy sky with falling rain and lightning flash.\n\n" +
  "• Physics Rain Engine: 190 dynamic raindrops colliding with river water to create ripples.",
  { x: 1.0, y: 2.5, w: 5.2, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

s5.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.8, w: 5.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s5.addText("🛡️ User Experience & Security", { x: 7.0, y: 2.0, w: 5.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.blueAccent });
s5.addText(
  "• Dark / Light Theme Personalization: Instant theme switcher with memory.\n\n" +
  "• Animated Proficiency Bars: Visual percentage indicators for C, HTML, SQL, and CSS.\n\n" +
  "• Honeypot Anti-Spam Security: Traps bots without annoying real users with CAPTCHAs.\n\n" +
  "• One-Click Email Copy: Interactive clipboard utility with confirmation feedback.\n\n" +
  "• 100% Cross-Device Fluidity: Handcrafted for Mobile (320px+), Tablet (768px), and PC.",
  { x: 7.0, y: 2.5, w: 5.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 6: Code Explanation
// ==========================================
const s6 = createBaseSlide("05 // Code Implementation", "Code Explanation & Technical Justification", "06");

// Snippet 1 Box
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 5.6, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s6.addText("SNIPPET 1: CANVAS RAIN & RIVER SPLASHES", { x: 1.0, y: 2.0, w: 5.2, h: 0.3, fontSize: 10.5, bold: true, color: COLORS.cyanAccent });

s6.addShape(pptx.shapes.RECTANGLE, { x: 1.0, y: 2.4, w: 5.2, h: 2.2, fill: { color: COLORS.codeBg }, line: { color: COLORS.cardBorder } });
s6.addText(
  "// Particle velocity & wind drift\n" +
  "d.y += d.speed;\n" +
  "d.x += d.wind;\n\n" +
  "// Collision detection with river surface\n" +
  "if (d.y > height * 0.67 && Math.random() < 0.18) {\n" +
  "  addRipple(d.x, d.y); // Creates water ripple\n" +
  "}\n" +
  "if (d.y > height + 20) {\n" +
  "  d.y = -d.length; d.x = Math.random() * width;\n" +
  "}",
  { x: 1.1, y: 2.5, w: 5.0, h: 2.0, fontSize: 9.5, fontFace: "Consolas", color: COLORS.codeText }
);

s6.addText(
  "Technical Justification:\n" +
  "• Replaces heavy 80MB GIF files with a lightweight 60 FPS HTML5 Canvas engine.\n" +
  "• Accurately emulates our C++ OpenGL drawRain() routine natively in the browser.\n" +
  "• Scales with window.devicePixelRatio for razor-sharp rendering on Retina displays.",
  { x: 1.0, y: 4.8, w: 5.2, h: 1.6, fontSize: 10, color: COLORS.textMuted, lineSpacing: 15 }
);

// Snippet 2 Box
s6.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.8, w: 5.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s6.addText("SNIPPET 2: HONEYPOT ANTI-SPAM PROTECTION", { x: 7.0, y: 2.0, w: 5.3, h: 0.3, fontSize: 10.5, bold: true, color: COLORS.blueAccent });

s6.addShape(pptx.shapes.RECTANGLE, { x: 7.0, y: 2.4, w: 5.3, h: 2.2, fill: { color: COLORS.codeBg }, line: { color: COLORS.cardBorder } });
s6.addText(
  "// Honeypot field: invisible to humans, filled by bots\n" +
  "const handleSubmit = (e) => {\n" +
  "  e.preventDefault();\n" +
  "  if (!validateForm()) return;\n\n" +
  "  // Bot check: if hidden website field has value\n" +
  "  if (formData.website && formData.website.trim() !== '') {\n" +
  "    setStatus('success');\n" +
  "    return; // Silently trap bot without sending\n" +
  "  }\n" +
  "};",
  { x: 7.1, y: 2.5, w: 5.1, h: 2.0, fontSize: 9.5, fontFace: "Consolas", color: COLORS.codeText }
);

s6.addText(
  "Technical Justification:\n" +
  "• Traps malicious automated web crawlers without requiring intrusive CAPTCHAs.\n" +
  "• Maintains a completely frictionless experience for legitimate evaluators and recruiters.\n" +
  "• Paired with client-side Regex validation for email and message length constraints.",
  { x: 7.0, y: 4.8, w: 5.3, h: 1.6, fontSize: 10, color: COLORS.textMuted, lineSpacing: 15 }
);

// ==========================================
// SLIDE 7: Output & Live Demo
// ==========================================
const s7 = createBaseSlide("06 // Verification", "Output Deliverables & Live Demo Checklist", "07");

s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 5.6, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s7.addText("🖥️ Output Deliverables Summary", { x: 1.0, y: 2.0, w: 5.2, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s7.addText(
  "• Desktop Interface: Premium dark aesthetic with electric blue glowing cards and fluid layout.\n\n" +
  "• Mobile Experience: Full-screen drawer menu, touch-friendly CTA buttons, and adaptive typography.\n\n" +
  "• Interactive Case Study Modal: Live switching between Daytime, Night & Solar Lamps, and Night Rain Mode.\n\n" +
  "• Direct Repository Integration: Connected to official GitHub branch for complete academic transparency.",
  { x: 1.0, y: 2.6, w: 5.2, h: 3.6, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.8, w: 5.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cyanAccent } });
s7.addText("⏱️ 45-Second Live Demo Action Plan", { x: 7.0, y: 2.0, w: 5.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s7.addText(
  "Step 1: Open website in browser (localhost:3000 / live deployment).\n\n" +
  "Step 2: Demonstrate smooth scroll to Skills and About sections.\n\n" +
  "Step 3: Click 'View Case Study' on Featured Project.\n\n" +
  "Step 4: Switch modes:\n" +
  "   • Daytime ➔ Night (point out crescent moon & solar streetlamps)\n" +
  "   • Night ➔ Rain Mode (point out falling raindrops and river ripples)\n\n" +
  "Step 5: Resize browser to demonstrate seamless Mobile & Tablet responsiveness.",
  { x: 7.0, y: 2.5, w: 5.3, h: 3.8, fontSize: 11, color: COLORS.textLight, lineSpacing: 16 }
);

// ==========================================
// SLIDE 8: Challenges & Solutions
// ==========================================
const s8 = createBaseSlide("07 // Problem Solving", "Challenges Faced & Engineering Solutions", "08");

s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("⚙️ Challenge 1: OpenGL Web Barrier", { x: 1.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 11.5, bold: true, color: COLORS.textLight });
s8.addText(
  "Problem:\n" +
  "C++ OpenGL compiles to native .exe, making direct web URLs impossible.\n\n" +
  "Engineering Solution:\n" +
  "Engineered a multi-mode Case Study modal with an HTML5 Canvas simulation reproducing the C++ day, night, and rain routines.",
  { x: 1.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 4.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("🎨 Challenge 2: Modal Transparency", { x: 5.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 11.5, bold: true, color: COLORS.textLight });
s8.addText(
  "Problem:\n" +
  "Modal container initially rendered transparently, causing background section text to overlap.\n\n" +
  "Engineering Solution:\n" +
  "Enforced a 100% solid dark charcoal slate background (#0c101d) paired with an opaque backdrop blur overlay.",
  { x: 5.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

s8.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 8.8, y: 1.8, w: 3.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s8.addText("📱 Challenge 3: Mobile Viewport", { x: 9.0, y: 2.0, w: 3.3, h: 0.4, fontSize: 11.5, bold: true, color: COLORS.textLight });
s8.addText(
  "Problem:\n" +
  "Narrow screens (320px–360px) suffered button crowding and badge clipping.\n\n" +
  "Engineering Solution:\n" +
  "Applied fluid CSS clamp() typography, flex-wrap button groups, and High-DPI canvas scaling (window.devicePixelRatio).",
  { x: 9.0, y: 2.5, w: 3.3, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

// ==========================================
// SLIDE 9: Future Improvements
// ==========================================
const s9 = createBaseSlide("08 // Roadmap", "Future Scope & Planned Improvements", "09");

s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 5.6, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s9.addText("📦 Full-Stack & Database Integration", { x: 1.0, y: 2.0, w: 5.2, h: 0.4, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s9.addText(
  "• Serverless API Backend: Connect the contact form to a Node.js / Express microservice or Resend API for direct email dispatch.\n\n" +
  "• Persistent Database Storage: Store incoming project inquiries in a PostgreSQL or Supabase database.\n\n" +
  "• Admin Dashboard: Create a protected authentication route to review, tag, and respond to incoming inquiries.",
  { x: 1.0, y: 2.6, w: 5.2, h: 3.6, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

s9.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.8, w: 5.7, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s9.addText("🚀 3D WebGL, PWA & CI/CD Pipelines", { x: 7.0, y: 2.0, w: 5.3, h: 0.4, fontSize: 13, bold: true, color: COLORS.blueAccent });
s9.addText(
  "• Real-Time WebGL / Three.js: Integrate 3D interactive graphics models to elevate the visual showcase.\n\n" +
  "• Progressive Web App (PWA): Implement Service Workers for offline caching and home-screen mobile installation.\n\n" +
  "• Automated CI/CD: Configure automated GitHub Actions to deploy directly to Vercel/Netlify with a custom domain (sultanaasma.dev).",
  { x: 7.0, y: 2.6, w: 5.3, h: 3.6, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

// ==========================================
// SLIDE 10: Conclusion & Q&A
// ==========================================
const s10 = createBaseSlide("09 // Summary & Q&A", "Conclusion & Learning Outcomes", "10");

s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.8, w: 6.0, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s10.addText("💡 Summary of Key Learnings", { x: 1.0, y: 2.0, w: 5.6, h: 0.4, fontSize: 13, bold: true, color: COLORS.textLight });
s10.addText(
  "• Successfully designed and implemented a production-ready, fully responsive developer portfolio representing my CSE coursework.\n\n" +
  "• Mastered semantic HTML5 document architecture and modern CSS utility design patterns.\n\n" +
  "• Gained practical experience in real-time HTML5 2D Canvas particle simulation and responsive breakpoints.\n\n" +
  "• Learned how to debug cross-device UI inconsistencies and solve real engineering trade-offs in web performance.",
  { x: 1.0, y: 2.6, w: 5.6, h: 3.6, fontSize: 11, color: COLORS.textMuted, lineSpacing: 18 }
);

s10.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 7.2, y: 1.8, w: 5.3, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.blueAccent } });
s10.addText("🤝 THANK YOU!", { x: 7.4, y: 2.5, w: 4.9, h: 0.6, fontSize: 24, bold: true, color: COLORS.textLight, align: "center" });
s10.addText(
  "\"Thank you for your valuable time and guidance.\n\nI would be delighted to answer any questions from the honorable faculty.\"",
  { x: 7.4, y: 3.3, w: 4.9, h: 1.5, fontSize: 12, color: COLORS.textMuted, align: "center", lineSpacing: 18 }
);

s10.addText("Q&A Session • Open for Evaluation", {
  x: 7.4,
  y: 5.2,
  w: 4.9,
  h: 0.4,
  fontSize: 11,
  bold: true,
  color: COLORS.cyanAccent,
  align: "center",
});

// Output Paths
const outputWorkspace = path.join(__dirname, "My_Portfolio_Presentation_Sultana.pptx");
const outputDesktop = "C:\\Users\\USER\\Desktop\\My_Portfolio_Presentation_Sultana.pptx";

pptx.writeFile({ fileName: outputWorkspace }).then((fileName) => {
  console.log(`Saved in workspace: ${fileName}`);
  try {
    fs.copyFileSync(outputWorkspace, outputDesktop);
    console.log(`Saved on Desktop: ${outputDesktop}`);
  } catch (err) {
    console.error("Desktop copy note:", err.message);
  }
});
