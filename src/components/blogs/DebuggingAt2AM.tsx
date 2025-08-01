import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Added import

const BlogPost1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
        
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-gray-500"> April 3 2025</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mt-2 leading-tight">
            😩 I Tried Debugging at 2AM — Here's What I Learned (Besides Crying)
          </h1>
        </div>

        {/* Hero GIF */}
        <img
          src="https://media.giphy.com/media/Zt7MgZmcneEtdGm2bK/giphy.gif"
          alt="debug gif"
          className="rounded-2xl w-full h-64 object-cover mb-8"
        />

        {/* Blog Content */}
        <div className="text-gray-800 space-y-6 text-[17px] leading-relaxed">
          <p>
            So it’s 2AM. I’m sipping my third cold coffee and watching VSCode judge me silently. 
            I was building a React + Node.js app, and my component just wouldn’t render. Debugging became my emotional support activity.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">🧠 The Real Problem</h2>
          <p>
            I threw in 47 <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-pink-600">console.log</code>s. 
            Turns out, a simple typo in a prop name — <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-red-600">titlle</code> instead of <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-green-600">title</code>. Yup. That cost me 3 hours of sleep and sanity.
          </p>

          <h2 className="text-xl font-semibold text-blue-600">🔧 The Fix</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Typed props properly using TypeScript.</li>
            <li>Enabled ESLint rules to catch undefined props.</li>
            <li>Actually used the VSCode debugger instead of spamming logs.</li>
            <li>Slept. Came back. Solved it in 2 mins.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-600">🧰 Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React (TS)', 'Node.js', 'VSCode Debugger', 'ESLint + Prettier'].map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-blue-600">💡 Key Takeaways</h2>
          <p>
            Debugging isn’t about being a genius — it’s about staying calm, trusting your tools, and knowing when to step away.
            2AM bugs are almost always solved by 10AM sleep + coffee + brain cells.
          </p>

          <p className="italic text-purple-600">
            “The bug you rage at tonight might become your viral blog post tomorrow.”  
          </p>
        </div>

        {/* Back button */}
        <div className="mt-12">
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link to="/blogs" className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full shadow">
            ← Back to Blogs
          </Link>


        </div>
      </div>
    </div>
  );
};

export default BlogPost1;
