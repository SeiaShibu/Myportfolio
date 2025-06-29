import React from "react";
import { motion } from "framer-motion";

const MyPortfolioExperience: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6"
      >
        🎨 How I Built My Developer Portfolio Using React + TailwindCSS
      </motion.h1>

      <p className="text-sm text-gray-500 mb-4">📅 June 2025</p>

      <p className="mb-6">
        After procrastinating for, like, *a year*, I finally built my dev portfolio. I wanted it clean,
        fast, responsive, and a little ✨ aesthetic ✨ — so I picked <strong>React</strong> + <strong>TailwindCSS</strong>. And no, I didn’t touch Bootstrap this time 😌.
      </p>

      {/* 🔧 Tech Stack */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">🛠️ The Stack I Used</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>React (Vite for fast dev)</li>
        <li>TailwindCSS (utility-first = love)</li>
        <li>Framer Motion (subtle animations)</li>
        <li>TypeScript (because types are ✨ classy)</li>
        <li>GitHub Pages for deployment</li>
      </ul>

      {/* 💡 Why TailwindCSS */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">💡 Why TailwindCSS?</h2>
      <p className="mb-6">
        Tailwind is literally like writing CSS with superpowers. I could focus on structure and spacing
        without switching between CSS files. Responsive design? Handled. I used classes like
        <code className="bg-gray-100 px-1 rounded">md:flex</code> and
        <code className="bg-gray-100 px-1 rounded">lg:gap-10</code> everywhere.
      </p>

      {/* 😵 Funny Moment */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">😵 The Moment I Broke Everything</h2>
      <p className="mb-6">
        I set <code>max-w-[10vh]</code> for my whole layout. Yes, <strong>vertical height</strong> for a width prop. The result? My site looked like a zoomed-out Minecraft island 🟫🌱. Classic “Tailwind beginner” mistake. 
      </p>

      {/* 📸 Components I Built */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">📸 What I Built</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>A Hero section with a floating avatar + welcome text</li>
        <li>Skills section (flexbox layout using Tailwind)</li>
        <li>Projects section (grid layout with hover effects)</li>
        <li>Contact form using `useRef` and EmailJS</li>
      </ul>

      {/* 🧠 Key Learnings */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">🧠 What I Learned</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Utility-first CSS makes UI iteration super fast</li>
        <li>Framer Motion helps bring components to life</li>
        <li>Dark mode is ✨ essential ✨ now</li>
        <li>Responsiveness is 🔑 — always check mobile layout before deploy</li>
        <li>Animations are cool, but don’t overdo it (CPU fans are screaming)</li>
      </ul>

      {/* 🚀 Final Words */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 Final Words</h2>
      <p className="mb-6">
        React + TailwindCSS made it super fun to build a portfolio that actually reflects my dev vibe.
        If you’re planning to make your own, trust me — it doesn’t have to be perfect, just ship it.
        Break stuff. Fix it. Style it. And maybe animate it 😎.
      </p>

      {/* Back link */}
      <a
        href="/blogs"
        className="inline-block mt-6 text-blue-600 hover:underline"
      >
        ← Back to Blogs
      </a>
    </div>
  );
};

export default MyPortfolioExperience;
