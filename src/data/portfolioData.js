/**
 * Centralized Portfolio Content & Configuration (v2.0 — Dark-First Modern Minimal UI)
 * Owner: Sultana Asma Islam
 *
 * Verified Profile Data:
 * - Name: Sultana Asma Islam
 * - Title: CSE Student | Aspiring Front-End Developer
 * - University: Daffodil International University
 * - Semester: Final Semester (Last Semester)
 * - Expected Graduation: 2026
 * - Location: Dhaka, Bangladesh
 * - Email: sultanaasmaislam7@gmail.com
 * - GitHub: https://github.com/Sultana-Asma
 * - Skills: HTML, CSS, JavaScript, React
 * - Interests: Front-End Development, Responsive Web Design, Modern UI Development, UI/UX Design, Web Technologies
 */

export const portfolioData = {
  owner: {
    fullName: "Sultana Asma Islam",
    monogram: "SAI",
    title: "CSE Student | Aspiring Front-End Developer",
    shortRole: "Aspiring Front-End Developer",
    academicBackground: "Computer Science and Engineering (CSE) Student",
    university: "Daffodil International University",
    semester: "Final Semester",
    graduationYear: "2026",
    availabilityStatus: "Available for Internships & Freelance Projects",
    location: "Dhaka, Bangladesh",
    email: "sultanaasmaislam7@gmail.com",
    githubUrl: "https://github.com/Sultana-Asma",
    githubHandle: "github.com/Sultana-Asma",
    linkedinUrl: "", // Placeholder until provided
    linkedinPlaceholder: "[PLACEHOLDER: LinkedIn Profile]",
    resumeUrl: "/placeholder-resume.pdf",
    profilePhotoUrl: "/profile-photo.jpg", // Drop photo at public/profile-photo.jpg
    profilePhotoAvailable: true,
  },

  navigation: [
    { label: "About", href: "#about", index: "01" },
    { label: "Skills", href: "#skills", index: "02" },
    { label: "Projects", href: "#projects", index: "03" },
    { label: "Education", href: "#education", index: "04" },
    { label: "Journey", href: "#journey", index: "05" },
    { label: "Services", href: "#services", index: "06" },
    { label: "Contact", href: "#contact", index: "07" },
  ],

  hero: {
    badgeText: "Available for Internships & Freelance · Dhaka",
    greeting: "Hello, I'm",
    name: "Sultana Asma Islam",
    roleTitle: "CSE Student | Aspiring Front-End Developer",
    headline: "Building Clean, Responsive & Modern Web Interfaces.",
    description:
      "Final-semester Computer Science and Engineering (CSE) student at Daffodil International University (Class of 2026), specializing in crafting intuitive, responsive front-end experiences with HTML, CSS, JavaScript, and React.",
    primaryCta: {
      label: "View Featured Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "Download Resume",
      href: "/placeholder-resume.pdf",
    },
    coreSkills: ["HTML", "CSS", "JavaScript", "React"],
  },

  about: {
    sectionIndex: "01",
    eyebrow: "ABOUT ME",
    heading: "Combining a Computer Science Foundation with Modern Front-End Craft.",
    paragraphs: [
      "I am Sultana Asma Islam, a final-semester Computer Science and Engineering (CSE) student at Daffodil International University in Dhaka, graduating in 2026. My focus lies in building clean, responsive, and user-centered web interfaces that bridge structured engineering logic with refined visual design.",
      "[PLACEHOLDER: Additional Personal Bio Notes] — As an aspiring Front-End Developer, I enjoy transforming ideas and UI/UX concepts into accessible, fast, and interactive web applications using semantic HTML, modern CSS architectures, JavaScript, and reusable React components.",
    ],
    quickFacts: [
      {
        label: "University",
        value: "Daffodil International University",
        meta: "B.Sc. in Computer Science & Engineering",
      },
      {
        label: "Academic Stage",
        value: "Final Semester · Class of 2026",
        meta: "Undergraduate CSE Program",
      },
      {
        label: "Core Technical Stack",
        value: "HTML, CSS, JavaScript, React",
        meta: "Modern Front-End Development",
      },
      {
        label: "Location",
        value: "Dhaka, Bangladesh",
        meta: "Open to On-Site & Remote Opportunities",
      },
    ],
    primaryInterests: [
      "Front-End Development",
      "Responsive Web Design",
      "Modern UI Development",
      "UI/UX Design",
      "Web Technologies",
    ],
  },

  skills: {
    sectionIndex: "02",
    eyebrow: "TECHNICAL SKILLS",
    heading: "Core Technologies & Front-End Capabilities.",
    description:
      "Focused on strong web fundamentals and component-driven interface development using my verified technical stack.",
    primarySkills: [
      {
        id: "html",
        name: "HTML",
        category: "Semantic Markup",
        accent: "blue",
        tagline: "Structured, Accessible & SEO-Ready Document Architecture",
        capabilities: [
          "Semantic HTML5 landmarks and clean DOM hierarchy",
          "Accessible forms, keyboard navigation, and ARIA standards",
          "Structured metadata and search-engine-friendly markup",
        ],
      },
      {
        id: "css",
        name: "CSS",
        category: "Styling & Responsive Layout",
        accent: "violet",
        tagline: "Modern Layouts, Design Systems & Fluid Responsiveness",
        capabilities: [
          "CSS Grid and Flexbox for complex multi-device layouts",
          "Mobile-first responsive web design across all screen sizes",
          "Custom properties (CSS variables), dark UI theming, and smooth transitions",
        ],
      },
      {
        id: "javascript",
        name: "JavaScript",
        category: "Interactive Logic",
        accent: "blue",
        tagline: "Dynamic Client-Side Behavior & Modern ES6+ Programming",
        capabilities: [
          "DOM manipulation, event handling, and interactive UI states",
          "Modern ES6+ syntax, modular functions, and array data filtering",
          "Client-side form validation and asynchronous API integration",
        ],
      },
      {
        id: "react",
        name: "React",
        category: "Component UI Architecture",
        accent: "violet",
        tagline: "Modular, Declarative & Reusable Front-End Interfaces",
        capabilities: [
          "Reusable functional components and clean prop composition",
          "Interactive state management with React Hooks (useState, useEffect, useMemo)",
          "Single-page application flows and dynamic component rendering",
        ],
      },
    ],
    interestsDetail: [
      {
        title: "Front-End Development",
        summary: "Engineering clean, maintainable client-side web interfaces with modern standards.",
      },
      {
        title: "Responsive Web Design",
        summary: "Crafting fluid layouts that adapt seamlessly across mobile, tablet, and desktop screens.",
      },
      {
        title: "Modern UI Development",
        summary: "Building sleek, component-driven dark and light interfaces with crisp visual hierarchy.",
      },
      {
        title: "UI/UX Design",
        summary: "Prioritizing intuitive navigation, readability, and frictionless user journeys.",
      },
      {
        title: "Web Technologies",
        summary: "Continuously exploring modern web APIs, performance best practices, and React workflows.",
      },
    ],
  },

  projects: {
    sectionIndex: "03",
    eyebrow: "FEATURED PROJECTS",
    heading: "Selected Front-End Projects & UI Showcase.",
    description:
      "Structured project placeholders ready to be populated with your real academic, personal, and GitHub repositories.",
    categories: ["All", "React", "JavaScript", "HTML & CSS", "UI/UX"],
    items: [
      {
        id: "project-01",
        index: "01",
        title: "[PLACEHOLDER: Project 01 — Modern React Web Application]",
        category: "React",
        shortDescription:
          "[PLACEHOLDER: Concise 1–2 sentence summary of this React application, the problem it solves, and its core interactive features.]",
        fullDescription:
          "[PLACEHOLDER: Detailed breakdown of the component hierarchy, state management approach, and responsive UI decisions built with React, JavaScript, and CSS.]",
        keyFeatures: [
          "Modular React functional components and custom hooks",
          "Responsive dark-mode layout across mobile and desktop",
          "Dynamic filtering and interactive user feedback",
        ],
        technologies: ["React", "JavaScript", "CSS", "HTML"],
        liveUrl: "",
        githubUrl: "https://github.com/Sultana-Asma",
        isPlaceholder: true,
        previewLabel: "React Component Architecture",
      },
      {
        id: "project-02",
        index: "02",
        title: "[PLACEHOLDER: Project 02 — Responsive Multi-Section Landing Page]",
        category: "HTML & CSS",
        shortDescription:
          "[PLACEHOLDER: Concise summary highlighting mobile-first responsive web design, CSS Grid architecture, and modern typography.]",
        fullDescription:
          "[PLACEHOLDER: Detailed explanation of how semantic HTML5 and modern CSS Grid/Flexbox were used to achieve a pixel-accurate, accessible layout across all viewports.]",
        keyFeatures: [
          "Semantic HTML5 structure and WCAG contrast compliance",
          "Fluid typography and multi-breakpoint CSS Grid layout",
          "Smooth navigation and interactive hover states",
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "",
        githubUrl: "https://github.com/Sultana-Asma",
        isPlaceholder: true,
        previewLabel: "Responsive Web Design",
      },
      {
        id: "project-03",
        index: "03",
        title: "[PLACEHOLDER: Project 03 — Interactive JavaScript Web Utility]",
        category: "JavaScript",
        shortDescription:
          "[PLACEHOLDER: Concise summary demonstrating clean ES6+ JavaScript logic, DOM manipulation, and dynamic state updates.]",
        fullDescription:
          "[PLACEHOLDER: Detailed overview of the client-side algorithms, event handling, and validation workflows engineered in vanilla JavaScript.]",
        keyFeatures: [
          "Clean ES6+ modular JavaScript architecture",
          "Real-time DOM updates and client-side input validation",
          "Keyboard-accessible controls and responsive layout",
        ],
        technologies: ["JavaScript", "HTML", "CSS"],
        liveUrl: "",
        githubUrl: "https://github.com/Sultana-Asma",
        isPlaceholder: true,
        previewLabel: "Interactive ES6+ JavaScript",
      },
      {
        id: "project-04",
        index: "04",
        title: "[PLACEHOLDER: Project 04 — Modern UI/UX Interface Concept]",
        category: "UI/UX",
        shortDescription:
          "[PLACEHOLDER: Concise summary of a modern user interface concept translated into reusable React and CSS components.]",
        fullDescription:
          "[PLACEHOLDER: Detailed notes on visual hierarchy, spacing tokens, and interactive component states designed for an intuitive user experience.]",
        keyFeatures: [
          "Consistent design system tokens and dark surface hierarchy",
          "Reusable UI primitives (cards, badges, modals, forms)",
          "Built with React and modern CSS",
        ],
        technologies: ["React", "CSS", "HTML"],
        liveUrl: "",
        githubUrl: "https://github.com/Sultana-Asma",
        isPlaceholder: true,
        previewLabel: "Modern UI/UX System",
      },
    ],
  },

  education: {
    sectionIndex: "04",
    eyebrow: "EDUCATION",
    heading: "Academic Background in Computer Science & Engineering.",
    degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
    institution: "Daffodil International University",
    department: "Department of Computer Science and Engineering",
    currentStatus: "Final Semester (Last Semester)",
    expectedGraduation: "2026",
    location: "Dhaka, Bangladesh",
    summary:
      "Completing my final semester in Computer Science and Engineering at Daffodil International University (Class of 2026), combining core computer science principles with hands-on specialization in Front-End Web Development and Modern UI Engineering.",
    highlights: [
      "Final-semester undergraduate student graduating in 2026",
      "Strong foundation in structured programming and web technologies",
      "Focused on Front-End Development, Responsive Design, and UI/UX",
      "[PLACEHOLDER: Final Year CapstoneProject / Academic Focus]",
    ],
  },

  learningJourney: {
    sectionIndex: "05",
    eyebrow: "LEARNING JOURNEY",
    heading: "My Progression in Front-End Web Development.",
    description:
      "How I have systematically developed my front-end engineering and UI design skills alongside my CSE degree at Daffodil International University.",
    milestones: [
      {
        step: "01",
        phase: "Web Foundations",
        title: "Semantic HTML5 & Document Structure",
        status: "Completed Foundation",
        description:
          "Built a strong command of semantic HTML, accessible form controls, and clean document outlines that form the backbone of every web project.",
        tags: ["HTML", "Semantic Web", "Accessibility"],
      },
      {
        step: "02",
        phase: "Responsive Styling & UI",
        title: "Modern CSS, Flexbox, Grid & Responsive Design",
        status: "Completed Foundation",
        description:
          "Mastered mobile-first responsive layouts, CSS Grid, Flexbox, custom design tokens, and modern dark/light UI aesthetics.",
        tags: ["CSS", "Responsive Web Design", "UI/UX Design"],
      },
      {
        step: "03",
        phase: "Dynamic Client Logic",
        title: "Interactive JavaScript (ES6+) & DOM Manipulation",
        status: "Completed Foundation",
        description:
          "Progressed into writing clean, modular JavaScript to power interactive interfaces, dynamic filtering, form validation, and asynchronous workflows.",
        tags: ["JavaScript", "ES6+", "DOM Events"],
      },
      {
        step: "04",
        phase: "Component Architecture",
        title: "Modern UI Development with React",
        status: "Active Specialization",
        description:
          "Currently focused on building scalable, component-driven front-end applications with React, reusable UI patterns, and modern web technologies.",
        tags: ["React", "Modern UI Development", "Web Technologies"],
      },
    ],
  },

  // Conditional Sections: Only rendered when enabled is set to true
  experience: {
    enabled: false,
    sectionIndex: "05A",
    eyebrow: "EXPERIENCE",
    heading: "Professional & Internship Experience.",
    items: [],
  },

  certifications: {
    enabled: false,
    sectionIndex: "05B",
    eyebrow: "CERTIFICATIONS",
    heading: "Certifications & Academic Achievements.",
    items: [],
  },

  services: {
    sectionIndex: "06",
    eyebrow: "SERVICES",
    heading: "Front-End Development Services.",
    description:
      "Available for freelance projects, internships, and collaborative front-end development work. Focused on delivering clean code and responsive, modern interfaces.",
    items: [
      {
        id: "service-01",
        number: "01",
        title: "Responsive Website Development",
        summary:
          "Custom, mobile-first websites and landing pages built with semantic HTML, modern CSS, and JavaScript that perform smoothly across all devices.",
        deliverables: [
          "Pixel-accurate responsive layouts for mobile, tablet & desktop",
          "Clean semantic HTML5 and maintainable CSS architecture",
          "Cross-browser compatibility and fast page load performance",
        ],
        inquirySubject: "Freelance: Responsive Website Development",
      },
      {
        id: "service-02",
        number: "02",
        title: "React Front-End UI Development",
        summary:
          "Interactive, component-driven web interfaces and single-page applications built with clean, reusable React components.",
        deliverables: [
          "Modular React component architecture and state management",
          "Interactive filtering, modals, and dynamic UI views",
          "Scalable front-end codebase ready for backend integration",
        ],
        inquirySubject: "Freelance: React Front-End UI Development",
      },
      {
        id: "service-03",
        number: "03",
        title: "Modern UI/UX Design Implementation",
        summary:
          "Translating UI/UX wireframes and design concepts into polished, accessible, and visually engaging front-end code.",
        deliverables: [
          "Strong typography, dark/light theming, and visual hierarchy",
          "Subtle micro-interactions, hover states, and smooth transitions",
          "Frontend UI modernization and responsiveness improvements",
        ],
        inquirySubject: "Freelance: Modern UI/UX Design Implementation",
      },
    ],
  },

  contact: {
    sectionIndex: "07",
    eyebrow: "CONTACT",
    heading: "Let's Connect for Internships, Projects, or Collaborations.",
    description:
      "I am currently in my final semester of CSE at Daffodil International University (graduating in 2026) and actively open to Front-End Developer internships, entry-level roles, and freelance projects in Dhaka or remotely.",
    inquiryTypes: [
      "Internship / Entry-Level Front-End Role",
      "Freelance: Responsive Website Development",
      "Freelance: React Front-End UI Development",
      "Freelance: Modern UI/UX Design Implementation",
      "Project Collaboration",
      "General Inquiry",
    ],
  },
};
