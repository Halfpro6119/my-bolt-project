import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import ConsultationPage from './pages/ConsultationPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import NewsletterPage from './pages/NewsletterPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:articleId" element={<ArticlePage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
      </Routes>
    </>
  );
}

export default App;