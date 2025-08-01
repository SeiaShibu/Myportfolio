import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
  title: '📚 Studying DSA at Midnight Was a Bold Move — Here\'s How It Went',
  date: 'August 1, 2025',
  path: '/blogs/studying-dsa-at-midnight',
  gif: 'https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif',
  content: `
     Midnight. Fan spinning. Spotify playing lofi like it’s a coping mechanism. I stare at a LeetCode “medium” problem that looks suspiciously like a PhD thesis. It’s me vs recursion now. No friends, just function calls and backtracking
  `,
  tech: ['LeetCode', 'DP', 'Recursion', 'Notion'],
},

  {
    title: '😩 I Tried Debugging at 2AM — Here\'s What I Learned (Besides Crying)',
    date: 'April 3, 2025',
    path: '/blogs/debugging-at-2am'
,
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3l5b3dxc2c0bTU2dzZqZXNvZDBrdjl1Mnp2bDYyb3hwNmg2NWI0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Zt7MgZmcneEtdGm2bK/giphy.gif',
    content: `
      Debugging late at night is a tech rite of passage. I was working on a React + Node.js app, and something wasn\'t rendering right. 
      Turns out, I was console.logging like crazy instead of using the VSCode debugger, and the real bug? A missing comma in my backend route. 
      Sleep literally fixed the problem in 5 minutes the next morning. The lesson? Don\'t underestimate rest and proper debugging tools.
    `,
    tech: ['React', 'Node.js', 'VSCode Debugger'],
  },
  {
    title: '🤖 When ChatGPT Gave Me Career Advice I Didn’t Ask For',
    date: 'June 3, 2025',
    path: 'chatgpt-career-advice',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmttY2Njc3RsbHJndjByZzR0dTlpMWNqbm52M3Qxb29lY3U5aThlayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4KibK3JwaVo0CjDO/giphy.gif',
    content: `
      I asked ChatGPT for help with a frontend bug. It fixed it... and then told me to switch careers. 😅 
      While funny, it reminded me of how AI can help you debug, but always with a critical eye. 
      I learned how to leverage LLMs + documentation without fully relying on them.
    `,
    tech: ['ChatGPT', 'Prompt Engineering', 'LLMs'],
  },
  {
    title: '        🎨 How I Built My Developer Portfolio Using React + TailwindCSS',
    date: 'June 16, 2025',
    path: 'tailwind-portfolio-fail',
    gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2F4YXBoYjU3bHVuM2Y0czdlcTJkZjZ2NGRkN3E2OXFtZ2RxbzRrOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vR85PnGsBwu1PFK/giphy.gif',
    content: `
    "I built my dev portfolio with TailwindCSS, React, and a little too much confidence. Turns out flex doesn’t fix bad layout decisions."
    `,
    tech: ['TailwindCSS', 'Responsive Design', 'Flex/Grid'],
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">📚 My Tech Blog Adventures</h1>
      <div className="grid gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={post.gif}
              alt="blog gif"
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2 className="text-2xl font-bold mt-2 mb-3">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.content.slice(0, 150)}...</p>
              <Link
                to={post.path}
                className="text-blue-600 font-semibold hover:underline"
              >
                Read more →
              </Link>
              <div className="mt-4 text-sm text-gray-500">
                🔧 Tech Used: {post.tech.join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
