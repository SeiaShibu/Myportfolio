import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
}

const blogs: BlogPost[] = [
  {
    title: 'How I Built My Portfolio with React + TypeScript',
    description: 'Step-by-step guide on how I designed, developed, and deployed my personal portfolio using React, TypeScript, and Tailwind CSS.',
    date: 'June 2025',
    slug: 'portfolio-react-typescript',
  },
  {
    title: 'Fake News Detection Using Naive Bayes & Flask',
    description: 'My AI mini project where I built a fake news detector using a Kaggle dataset, Naive Bayes, and deployed it with Flask.',
    date: 'May 2025',
    slug: 'fake-news-naive-bayes',
  },
  {
    title: 'SHAP & XAI for Beginners: Explained with Loan Data',
    description: 'Diving into explainable AI with SHAP values to break down loan predictions — visualizations, code, and beginner tips!',
    date: 'May 2025',
    slug: 'shap-xai-loan-predictions',
  },
  {
    title: 'How I Built a Recipe App Using Flask + MySQL',
    description: 'Here’s how I created a full-stack recipe manager using Flask, SQLAlchemy, and MySQL — with file uploads and user auth!',
    date: 'April 2025',
    slug: 'flask-recipe-manager-app',
  },
];

const Blogs: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">📝 My Blogs</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {blogs.map((post) => (
          <div
            key={post.slug}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            {/* You can later link to a blog details page here */}
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
