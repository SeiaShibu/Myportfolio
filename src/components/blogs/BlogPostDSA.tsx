// BlogPostDSA.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostDSA: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-100 py-10 px-4 sm:px-8 lg:px-24">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
        <div className="mb-6">
          <p className="text-sm text-gray-500">August 1, 2025</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mt-2">
            📚 Studying DSA at Midnight Was a Bold Move — Here's How It Went
          </h1>
        </div>

        <img
          src="https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
          alt="DSA grind gif"
          className="rounded-2xl w-full h-64 object-cover mb-8"
        />

        <div className="text-gray-800 space-y-6 text-[17px] leading-relaxed">
          <p>
            📍 Midnight. Fan spinning. Spotify playing lofi like it’s a coping mechanism. I stare at a LeetCode “medium” problem that looks suspiciously like a PhD thesis. It’s me vs recursion now. No friends, just function calls and backtracking 😵‍💫.
          </p>

          <p>
            They told me, "Just dry run it." Okay genius, I did. Now I’m more confused than ever. My for loop’s in shambles, and the base case left the chat.
          </p>

          <h2 className="text-xl font-semibold text-purple-600">📦 Things I’ve Sacrificed to DSA:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Sleep 😴</li>
            <li>My social life (gone like my heap memory)</li>
            <li>Keyboard keys — from rage tapping spacebar</li>
            <li>Hope</li>
          </ul>

          <h2 className="text-xl font-semibold text-purple-600">📈 New Concepts I Pretend To Understand</h2>
          <p>
            Every time someone says "2D DP", I just nod and smile. I thought backtracking was for undoing moves — not undoing my will to code. And don’t even get me started on segment trees... bro, what TREE??
          </p>

          <h2 className="text-xl font-semibold text-purple-600">🚨 Placement Pressure is Real</h2>
          <p>
            “Solve 100 LeetCode questions and you’ll be fine.” Lies. I solved 100 and still blanked out when the interviewer asked me to implement a stack. My brain went: “Import Stack from Java.util” 😭
          </p>

          <p>
            Now I’m doing mock interviews with ChatGPT, brushing up every topic from O(n) to Oops-I-forgot-LinkedLists.
          </p>

          <h2 className="text-xl font-semibold text-purple-600">💡 Takeaways (Before I Cry Again)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Don’t skip basics — arrays & hashmaps carry 80% of your placement game.</li>
            <li>Code on paper sometimes. You won't have StackBlitz in an interview.</li>
            <li>DSA is 70% mindset, 30% actually writing code.</li>
            <li>If stuck, take a walk — not scroll Instagram 💀</li>
          </ul>

          <p className="italic text-indigo-600">
            "DSA doesn't get easier. You just get funnier about it."
          </p>

          <h2 className="text-xl font-semibold text-purple-600">💡 Final Thoughts</h2>
          <p>
            DSA won’t click in a day — but one day, it will. The key? Consistency, patience, and not throwing your laptop.
          </p>

          <p className="italic text-indigo-600">
            "Late night coding is romantic... until you hit a segmentation fault."
          </p>
        </div>

        <div className="mt-10">
          <Link
            to="/blogs"
            className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full shadow"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDSA;
