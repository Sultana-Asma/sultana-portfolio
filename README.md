# Sultana Asma Islam — Personal Portfolio Website

A modern, minimal, dark-by-default personal portfolio website built for **Sultana Asma Islam** (**CSE Student | Aspiring Front-End Developer** at **Daffodil International University**, Class of 2026, Dhaka, Bangladesh).

---

## 1. Verified Owner Profile

- **Full Name**: Sultana Asma Islam
- **Title**: CSE Student | Aspiring Front-End Developer
- **University**: Daffodil International University (B.Sc. in CSE, Final Semester, Expected Graduation: 2026)
- **Location**: Dhaka, Bangladesh
- **Email**: `sultanaasmaislam7@gmail.com`
- **GitHub**: [https://github.com/Sultana-Asma](https://github.com/Sultana-Asma)
- **Core Technical Skills**: HTML, CSS, JavaScript, React
- **Primary Interests**: Front-End Development, Responsive Web Design, Modern UI Development, UI/UX Design, Web Technologies

---

## 2. Technology Stack

- **Framework**: Next.js 15 (App Router) & React 19
- **Styling**: CSS3 Custom Properties (Design Tokens) + Tailwind CSS
- **Typography**: `Plus Jakarta Sans` (Display), `Inter` (Body), `JetBrains Mono` (Code & Tags)
- **Icons**: `lucide-react`
- **Backend API**: Next.js Serverless Route Handler (`POST /api/contact`) with validation & honeypot anti-spam protection

---

## 3. Running Locally

```bash
# Install dependencies
npm install

# Start development server at http://localhost:3000
npm run dev

# Build for production
npm run build
```

---

## 4. How to Customize Content & Placeholders

All text, links, project cards, and section toggles are centralized in a single file:
- `src/data/portfolioData.js`

### Adding Your Profile Photo
1. Place your photo file at `public/profile-photo.jpg`.
2. The Hero section will automatically detect and display `/profile-photo.jpg` (and falls back to `/profile-avatar.svg` if not yet placed).

### Replacing Your Resume PDF
1. Replace `public/placeholder-resume.pdf` with your final PDF resume (or update `owner.resumeUrl` in `src/data/portfolioData.js`).

### Enabling Experience or Certifications Sections
- In `src/data/portfolioData.js`, set `experience.enabled = true` or `certifications.enabled = true` once you have entries to display.
