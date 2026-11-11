import React from "react";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolioData";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: `${portfolioData.owner.fullName} — ${portfolioData.owner.title}`,
  description:
    "Personal portfolio website of Sultana Asma Islam, a final-semester Computer Science and Engineering (CSE) student at Daffodil International University (Class of 2026) and Aspiring Front-End Developer specializing in HTML, CSS, JavaScript, and React.",
  keywords: [
    "Sultana Asma Islam",
    "Front-End Developer Dhaka",
    "Daffodil International University CSE",
    "React Developer Portfolio",
    "Responsive Web Design",
    "UI/UX Design",
    "HTML CSS JavaScript React",
  ],
  authors: [{ name: portfolioData.owner.fullName }],
  openGraph: {
    title: `${portfolioData.owner.fullName} — ${portfolioData.owner.title}`,
    description:
      "Final-semester CSE Student at Daffodil International University & Aspiring Front-End Developer crafting modern, responsive web interfaces.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.owner.fullName,
    jobTitle: portfolioData.owner.title,
    email: `mailto:${portfolioData.owner.email}`,
    url: portfolioData.owner.githubUrl,
    sameAs: [portfolioData.owner.githubUrl],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: portfolioData.owner.university,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    knowsAbout: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Front-End Development",
      "Responsive Web Design",
      "UI/UX Design",
    ],
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
