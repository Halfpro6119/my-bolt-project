import React from 'react';
import { Share2, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: number;
  publishedAt: string;
  category: string;
  author: string;
  stats: {
    roi?: string;
    timeReduction?: string;
    conversionIncrease?: string;
  };
}

export const SAMPLE_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'How AI Can Automate Lead Generation for Small Businesses',
    excerpt: 'Struggling to find qualified leads? Discover how small businesses are using AI to generate 3x more qualified leads while cutting costs by 40%. Learn the exact implementation steps and start transforming your lead generation today.',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1600',
    readTime: 8,
    publishedAt: '2024-03-20',
    category: 'Lead Generation',
    author: 'Sarah Chen',
    stats: {
      roi: '312%',
      timeReduction: '68%',
      conversionIncrease: '187%'
    }
  },
  {
    id: '2',
    title: 'The Future of AI-Powered Customer Support: A Complete Implementation Guide',
    excerpt: 'Is your support team overwhelmed? Learn how businesses are using AI to handle 80% of customer inquiries automatically while improving satisfaction scores by 45%. Follow our step-by-step guide to transform your customer support.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600',
    readTime: 10,
    publishedAt: '2024-03-19',
    category: 'Customer Service',
    author: 'Marcus Rodriguez',
    stats: {
      roi: '245%',
      timeReduction: '80%',
      conversionIncrease: '45%'
    }
  },
  {
    id: '3',
    title: 'AI Marketing Automation: A 5-Step System for 10x ROI',
    excerpt: 'Stop wasting money on ineffective campaigns. Discover the exact 5-step system that helped 100+ businesses achieve a 10x ROI through AI-driven marketing automation. Includes real case studies and implementation templates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    readTime: 12,
    publishedAt: '2024-03-18',
    category: 'Marketing',
    author: 'Emma Thompson',
    stats: {
      roi: '1000%',
      timeReduction: '75%',
      conversionIncrease: '312%'
    }
  }
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link 
      to={`/blog/${article.id}`}
      className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 block"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} min read</span>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
          {article.title}
        </h2>
        
        <p className="text-gray-400 mb-6">
          {article.excerpt}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-900/50 rounded-lg">
          {article.stats.roi && (
            <div className="text-center">
              <div className="text-purple-400 text-xl font-bold">{article.stats.roi}</div>
              <div className="text-gray-500 text-sm">ROI</div>
            </div>
          )}
          {article.stats.timeReduction && (
            <div className="text-center">
              <div className="text-purple-400 text-xl font-bold">{article.stats.timeReduction}</div>
              <div className="text-gray-500 text-sm">Time Saved</div>
            </div>
          )}
          {article.stats.conversionIncrease && (
            <div className="text-center">
              <div className="text-purple-400 text-xl font-bold">{article.stats.conversionIncrease}</div>
              <div className="text-gray-500 text-sm">Conversion ↑</div>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
            Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          
          <button 
            className="p-2 rounded-full hover:bg-purple-500/10 text-gray-400 hover:text-purple-400 transition-all"
            onClick={(e) => {
              e.preventDefault();
              navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href + '/' + article.id
              }).catch(() => {
                navigator.clipboard.writeText(window.location.href + '/' + article.id);
              });
            }}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}

function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            AI Automation Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Actionable guides and case studies showing exactly how businesses are using AI 
            to automate operations and drive measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_ARTICLES.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;