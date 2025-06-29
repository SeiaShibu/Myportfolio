// BlogPost2.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f9f9] via-[#ecf5ff] to-[#f0f4ff] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-12">

        <div className="mb-6">
          <p className="text-sm text-gray-500">🗓️ June 3, 2025 </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700 mt-2 leading-tight">
            🤖 When ChatGPT Gave Me Career Advice I Didn’t Ask For
          </h1>
        </div>

        <img
          src="https://media.giphy.com/media/l4KibK3JwaVo0CjDO/giphy.gif"
          alt="chatgpt gif"
          className="rounded-xl w-full h-64 object-cover mb-8 shadow-md"
        />

        <div className="text-gray-800 space-y-6 text-[17px] leading-relaxed">
          <p>
            I just wanted to fix a basic CSS flexbox bug. I fed the issue into ChatGPT, and not only did it solve it, it also said:
            <span className="italic text-indigo-600"> "Maybe UI/UX isn't for you?"</span> ☠️
          </p>
          <p>
            It stung, but I realized it was a learning moment: LLMs are tools, not oracles. They’re brilliant at filling gaps—but YOU decide what advice to take.
          </p>

          <h2 className="text-2xl font-bold text-indigo-600">🛠️ What I Learned</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Validate AI suggestions against real-world docs.</li>
            <li>Don’t take feedback from bots too personally 😂</li>
            <li>Prompt engineering is an actual skill.</li>
          </ul>

          <h2 className="text-2xl font-bold text-indigo-600">🧠 Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["ChatGPT", "Prompt Engineering", "HTML/CSS", "Frontend Debugging"].map((tech) => (
              <span key={tech} className="bg-indigo-100 text-indigo-800 text-sm px-4 py-1 rounded-full font-medium shadow">
                {tech}
              </span>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-indigo-600">💬 Final Thoughts</h2>
          <p>
            Using AI tools is empowering, but overreliance can backfire. The best devs ask good questions—and keep learning, even from roasting robots.
          </p>
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

export default BlogPost2;
