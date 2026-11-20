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
    profilePhotoUrl: "/profile-picture.jpeg",
    profilePhotoAvailable: true,
  },

  navigation: [
    { label: "About", href: "#about", index: "01" },
    { label: "Skills", href: "#skills", index: "02" },
    { label: "Projects", href: "#projects", index: "03" },
    { label: "Education", href: "#education", index: "04" },
    { label: "Services", href: "#services", index: "05" },
    { label: "Contact", href: "#contact", index: "06" },
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
    label: "About Me",
    heading: "Get to Know Me",
    intro:
      "A glimpse into my academic background, front-end development passion, and the goals driving my journey in modern web engineering.",
    floatingBadge: "Front-End Enthusiast",
    greeting: "Hi, I'm",
    firstNameAndMiddle: "Sultana Asma",
    highlightedLastName: "Islam",
    professionalTitle: "CSE Student | Aspiring Front-End Developer",
    description:
      "I'm a final-semester Computer Science and Engineering (CSE) student at Daffodil International University (Class of 2026). I enjoy turning ideas into clean, responsive, and modern web interfaces. I'm continuously learning, building projects, and improving my skills to become a professional Front-End Developer.",
    infoCards: [
      {
        id: "goal",
        title: "My Goal",
        description:
          "To grow as a professional Front-End Developer and build meaningful, user-focused web applications.",
        accent: "blue",
      },
      {
        id: "working-on",
        title: "Currently Working On",
        description:
          "Improving my React skills and building real-world projects.",
        accent: "cyan",
      },
      {
        id: "what-i-love",
        title: "What I Love",
        description:
          "Coding, UI/UX Design, Problem Solving, and Learning New Technologies.",
        accent: "purple",
      },
    ],
    bottomCards: [
      {
        id: "semester",
        title: "Final Semester",
        subtitle: "CSE Student",
        accent: "blue",
      },
      {
        id: "university",
        title: "Daffodil International University",
        subtitle: "Class of 2026",
        accent: "cyan",
      },
      {
        id: "focus",
        title: "Front-End Focus",
        subtitle: "Web Development",
        accent: "purple",
      },
      {
        id: "learning",
        title: "Always Learning",
        subtitle: "To Build Better",
        accent: "blue",
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
    heading: "My Technical Skills",
    description:
      "I'm continuously learning and improving my skills in web development.",
    primarySkills: [
      {
        id: "c-programming",
        name: "C Programming",
        category: "Programming Language",
        level: "Basic",
        percentage: 40,
        accent: "blue",
        tagline: "Foundational Programming & Problem Solving",
        description: "Basic knowledge of C language and algorithmic fundamentals.",
        iconType: "c",
      },
      {
        id: "html",
        name: "HTML",
        category: "Semantic Markup",
        level: "Basic",
        percentage: 40,
        accent: "blue",
        tagline: "Structured & Accessible Document Architecture",
        description: "Basic understanding of semantic HTML tags and page structure.",
        iconType: "html",
      },
      {
        id: "sql-mysql",
        name: "SQL / MySQL",
        category: "Relational Database",
        level: "Familiar",
        percentage: 65,
        accent: "cyan",
        tagline: "Relational Database Management & Query Design",
        description: "Hands-on experience with SQL queries, schema design, and relational data management.",
        iconType: "database",
      },
      {
        id: "currently-learning",
        name: "CSS and JavaScript",
        category: "Continuous Learning",
        level: "In Progress",
        percentage: 35,
        accent: "violet",
        tagline: "Interactive & Modern Web Development",
        description:
          "Exploring these technologies to build more interactive and dynamic websites.",
        iconType: "learning",
        link: "#projects",
      },
    ],
    interestsDetail: [
      {
        title: "Front-End Development",
        summary:
          "Engineering clean, maintainable client-side web interfaces with modern standards.",
      },
      {
        title: "Responsive Web Design",
        summary:
          "Crafting fluid layouts that adapt seamlessly across mobile, tablet, and desktop screens.",
      },
      {
        title: "Modern UI Development",
        summary:
          "Building sleek, component-driven dark and light interfaces with crisp visual hierarchy.",
      },
      {
        title: "UI/UX Design",
        summary:
          "Prioritizing intuitive navigation, readability, and frictionless user journeys.",
      },
      {
        title: "Web Technologies",
        summary:
          "Continuously exploring modern web APIs, performance best practices, and modern workflows.",
      },
    ],
  },

  projects: {
    sectionIndex: "03",
    eyebrow: "FEATURED PROJECT",
    heading: "Projects",
    badgeLabel: "My Project",
    description:
      "A featured showcase of my academic and front-end development work, responsive architecture, and modern user interface design.",
    featuredProject: {
      id: "featured-project-01",
      badge: "Academic Project",
      title: "Modern React Web Application",
      subtitle: "Interactive Front-End Architecture & Responsive Web Experience",
      description:
        "An interactive, responsive web application engineered with React, modern CSS, and clean JavaScript. Designed with modular component hierarchy, client-side state handling, and accessible navigation for an engaging user experience.",
      language: "JavaScript (ES6+)",
      library: "React.js / CSS3",
      domain: "Front-End Web Development",
      liveUrl: "",
      githubUrl: "https://github.com/Sultana-Asma",
      previewImage: "", // Leave empty for high-fidelity interactive mockup or set to image path
      previewLabel: "Web Application UI Preview",
      keyFeatures: [
        "Modular React functional component hierarchy and custom state management",
        "Fluid mobile-first responsive layout adapting seamlessly to all screen sizes",
        "Clean client-side state handling, dynamic filtering, and seamless interactions",
        "Semantic HTML5 structure with accessible navigation and high performance",
      ],
      technologies: [
        { name: "React.js", category: "Library" },
        { name: "JavaScript (ES6+)", category: "Language" },
        { name: "HTML5 & CSS3", category: "Styling" },
        { name: "Responsive Design", category: "UI/UX" },
        { name: "Git & GitHub", category: "Tool" },
      ],
    },
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
      "Strong foundation in structured programming, algorithms, and web technologies",
      "Focused on Front-End Development, Responsive Design, and modern UI architectures",
      "Committed to building clean, accessible, and performant web solutions",
    ],
    academicHistory: [
      {
        id: "hsc",
        degree: "Higher Secondary Certificate (HSC)",
        code: "02 // HIGHER SECONDARY",
        institution: "Adarsha Degree College, Parbatipur, Dinajpur",
        location: "Parbatipur, Dinajpur",
        gpa: "5.00",
        gpaScale: "5.00",
        year: "2021",
        accent: "violet",
        summary: "Completed Higher Secondary Certificate with a perfect GPA of 5.00 in the Science stream.",
      },
      {
        id: "ssc",
        degree: "Secondary School Certificate (SSC)",
        code: "03 // SECONDARY SCHOOL",
        institution: "Janankur Model Pilot School, Parbatipur, Dinajpur",
        location: "Parbatipur, Dinajpur",
        gpa: "4.94",
        gpaScale: "5.00",
        year: "2019",
        accent: "cyan",
        summary: "Completed Secondary School Certificate with distinction (GPA 4.94) in the Science stream.",
      },
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
    sectionIndex: "05",
    eyebrow: "SERVICES",
    heading: "What I",
    headingAccent: "Offer",
    description: "Here are some services I can provide:",
    items: [
      {
        id: "basic-html-webpage",
        number: "01",
        title: "Basic HTML Webpage",
        summary: "Create simple and clean webpages using HTML.",
        iconType: "html",
        accent: "violet",
        deliverables: [
          "Clean & Semantic Structure",
          "Responsive Design",
          "Easy to Maintain",
        ],
        inquirySubject: "Inquiry: Basic HTML Webpage",
      },
      {
        id: "c-programming-basics",
        number: "02",
        title: "C Programming Basics",
        summary: "Write and understand basic C programs.",
        iconType: "c",
        accent: "blue",
        deliverables: [
          "Simple Problem Solving",
          "Clean Code",
          "Beginner Level Support",
        ],
        inquirySubject: "Inquiry: C Programming Basics",
      },
      {
        id: "sql-mysql-database",
        number: "03",
        title: "SQL / MySQL",
        summary: "Design relational schemas and write efficient database queries.",
        iconType: "database",
        accent: "cyan",
        deliverables: [
          "CRUD Queries & Data Retrieval",
          "Table Schema & Relational Design",
          "Data Filtering & Query Optimization",
        ],
        inquirySubject: "Inquiry: SQL / MySQL",
      },
    ],
    collaborationBanner: {
      title: "Let's Work Together!",
      description: "Feel free to reach out for any project or collaboration.",
      buttonLabel: "Contact Me",
      buttonHref: "#contact",
    },
  },

  contact: {
    sectionIndex: "06",
    eyebrow: "CONTACT",
    heading: "Let's Connect for Internships, Projects, or Collaborations.",
    description:
      "I am currently in my final semester of CSE at Daffodil International University (graduating in 2026) and actively open to Front-End Developer internships, entry-level roles, and freelance projects in Dhaka or remotely.",
    inquiryTypes: [
      "Basic HTML Webpage",
      "C Programming Basics",
      "SQL / MySQL",
      "Internship / Entry-Level Role",
      "Project Collaboration",
      "General Inquiry",
    ],
  },
};
