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
  { text: "[Your DIU Student ID]\n", options: { color: COLORS.cyanAccent } },
  { text: "Program: ", options: { bold: true, color: COLORS.textLight } },
  { text: "B.Sc. in CSE (Final Semester)\n", options: { color: COLORS.textMuted } },
  { text: "GitHub: ", options: { bold: true, color: COLORS.textLight } },
  { text: "github.com/Sultana-Asma", options: { color: COLORS.blueAccent } },
], {
  x: 1.35,
  y: 3.95,
  w: 5.1,
  h: 2.0,
  fontSize: 11,
  fontFace: "Segoe UI",
  lineSpacing: 21,
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
  { text: "Institution: ", options: { bold: true, color: COLORS.textLight } },
  { text: "Daffodil International University (DIU)\n", options: { color: COLORS.textLight } },
  { text: "Course: ", options: { bold: true, color: COLORS.textLight } },
  { text: "[e.g. Web Engineering / Academic Project]\n", options: { color: COLORS.cyanAccent } },
  { text: "Supervised By: ", options: { bold: true, color: COLORS.textLight } },
  { text: "[Course Teacher's Name & Title]\n", options: { color: COLORS.textMuted } },
  { text: "Time Limit: ", options: { bold: true, color: COLORS.textLight } },
  { text: "4 Minutes Presentation + 1 Min Q&A", options: { color: COLORS.textLight } },
], {
  x: 7.2,
  y: 3.95,
  w: 5.1,
  h: 2.0,
  fontSize: 11,
  fontFace: "Segoe UI",
  lineSpacing: 21,
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
// SLIDE 3: Website Structure & Sitemap
// ==========================================
const s3 = createBaseSlide("02 // Structure", "Website Structure & The 6 Main Sections", "03");

// Left Box: SPA
s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s3.addText("🏗️ Single Page Application (Fast & Smooth)", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s3.addText(
  "• Fast & Smooth: Everything is on one page, so there is no waiting for pages to reload.\n\n" +
  "• Sticky Header Bar: The top menu stays visible as you scroll, with active section highlighting.\n\n" +
  "• Easy Navigation: Visitors can click any menu link to jump smoothly to that section.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 21 }
);

// Right Box: 6 Sections
s3.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s3.addText("📋 The 6 Content Sections", { x: 7.13, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s3.addText(
  "1. About Me: Short bio, my CSE study at DIU, and my career focus.\n\n" +
  "2. Technical Skills: 2x2 grid with progress bars for C, HTML, SQL, CSS & JS.\n\n" +
  "3. Featured Projects: Smart Village OpenGL graphics with Day, Night, and Rain modes.\n\n" +
  "4. Academic Background: B.Sc. at DIU, HSC (GPA 5.00), and SSC (GPA 4.94).\n\n" +
  "5. Services: Basic web design, C coding, and SQL database queries.\n\n" +
  "6. Contact: Simple message form with spam bot protection.",
  { x: 7.13, y: 2.2, w: 5.15, h: 3.8, fontSize: 10.5, color: COLORS.textMuted, lineSpacing: 16 }
);

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
// SLIDE 7: Output & Live Demo
// ==========================================
const s7 = createBaseSlide("06 // Output & Demo", "Visual Output & My 45-Second Live Demo Plan", "07");

// Left Box
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cardBorder } });
s7.addText("🖥️ Visual Output Deliverables", { x: 1.05, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.textLight });
s7.addText(
  "• Full Desktop View: Dark theme with blue neon glows and clean card layouts.\n\n" +
  "• Mobile Phone View: Adaptive mobile menu drawer and stacked readable cards.\n\n" +
  "• Case Study Popup: Interactive Day, Night, and Rain simulation modes.\n\n" +
  "• GitHub Code Link: Connects directly to my branch on GitHub so teachers can review my code.",
  { x: 1.05, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textMuted, lineSpacing: 20 }
);

// Right Box: Demo plan
s7.addShape(pptx.shapes.ROUNDED_RECTANGLE, { x: 6.88, y: 1.55, w: 5.65, h: 4.8, fill: { color: COLORS.cardBg }, line: { color: COLORS.cyanAccent } });
s7.addText("⏱️ My 45-Second Live Demo Plan", { x: 7.13, y: 1.75, w: 5.15, h: 0.35, fontSize: 13, bold: true, color: COLORS.cyanAccent });
s7.addText(
  "Step 1: Open website in Google Chrome (localhost:3000 / 3001).\n\n" +
  "Step 2: Scroll to Skills section to show the animated progress bars.\n\n" +
  "Step 3: Click 'View Case Study' button on Smart Village project.\n\n" +
  "Step 4: Click 'Night & Solar Lamps' to show moon and streetlamp lights.\n\n" +
  "Step 5: Click 'Night Rain Mode' to show falling rain and water ripples.\n\n" +
  "Step 6: Resize browser window to show that it adapts smoothly to mobile view.",
  { x: 7.13, y: 2.2, w: 5.15, h: 3.8, fontSize: 11, color: COLORS.textLight, lineSpacing: 17 }
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

// Save to Workspace and Desktop
const primaryWorkspace = path.join(__dirname, "Portfolio_Presentation_Sultana.pptx");
const primaryDesktop = "C:\\Users\\USER\\Desktop\\Portfolio_Presentation_Sultana.pptx";
const legacyWorkspace = path.join(__dirname, "My_Portfolio_Presentation_Sultana.pptx");
const legacyDesktop = "C:\\Users\\USER\\Desktop\\My_Portfolio_Presentation_Sultana.pptx";

pptx.writeFile({ fileName: primaryWorkspace }).then((fileName) => {
  console.log(`Saved primary in workspace: ${fileName}`);
  try {
    fs.copyFileSync(primaryWorkspace, primaryDesktop);
    console.log(`Saved primary on Desktop: ${primaryDesktop}`);
  } catch (err) {
    console.error("Desktop copy note:", err.message);
  }

  // Also try copying to legacy file names if not locked
  try {
    fs.copyFileSync(primaryWorkspace, legacyWorkspace);
    console.log(`Updated legacy in workspace: ${legacyWorkspace}`);
  } catch (err) {
    console.log("Note: legacy workspace file is currently open/locked in another program.");
  }

  try {
    fs.copyFileSync(primaryWorkspace, legacyDesktop);
    console.log(`Updated legacy on Desktop: ${legacyDesktop}`);
  } catch (err) {
    console.log("Note: legacy desktop file is currently open/locked in PowerPoint.");
  }
});
