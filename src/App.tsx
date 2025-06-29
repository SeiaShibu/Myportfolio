import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './ScrollToTop'; // ✅ now it's safe to import

import Home from './pages/Home';
import BlogsPage from './pages/Blogs';
import DebuggingAt2AM from './components/blogs/DebuggingAt2AM';
import ChatGPTCareerAdvice from './components/blogs/ChatGPTCareerAdvice';
import TailwindPortfolioFail from './components/blogs/TailwindPortfolioFail';

const App: React.FC = () => {
  return (
    <div className="App">

      
      <ScrollToTop /> {/* ✅ works properly now */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/debugging-at-2am" element={<DebuggingAt2AM />} />
        <Route path="/blogs/chatgpt-career-advice" element={<ChatGPTCareerAdvice />} />
        <Route path="/blogs/tailwind-portfolio-fail" element={<TailwindPortfolioFail />} />
      </Routes>

      <Footer />
    </div>
  );
};


export default App;
