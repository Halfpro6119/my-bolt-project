import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can AI automation help my business?",
    answer: "AI automation saves you time, reduces human errors, and increases revenue by streamlining repetitive tasks. Whether it's lead generation, customer follow-ups, or scheduling, AI can handle it efficiently—allowing you to focus on growing your business."
  },
  {
    question: "What makes your AI-powered websites better?",
    answer: "Our websites are built with cutting-edge AI technology that doesn't just look good—it works for you. They automate lead generation, optimize customer engagement, and are designed for maximum conversions. Plus, we deliver them in record time."
  },
  {
    question: "How fast can you build and launch my site?",
    answer: "Speed is our specialty. We deliver high-performance, AI-powered websites in a week or less—without compromising quality. Need revisions? We make adjustments lightning-fast."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in helping high-growth businesses in industries like e-commerce, professional services, healthcare, real estate, and local businesses. If you need a high-performing, automated online presence, we've got you covered."
  },
  {
    question: "What if I don't like the website?",
    answer: "We guarantee results. If you're not 100% satisfied, we'll work with you until it's perfect. Our mission is to make sure you get a website that converts and drives real business growth."
  },
  {
    question: "What happens after the website is live?",
    answer: "We don't just leave you hanging. Our AI-powered websites come with built-in automation to keep working for you—handling leads, scheduling, and follow-ups. Plus, you'll get ongoing support to ensure everything runs smoothly."
  },
  {
    question: "How much does it cost?",
    answer: "Our pricing is transparent and tailored to your business needs. Unlike traditional web agencies that charge thousands for a basic site, we offer high-performance AI-powered websites at a fraction of the cost—delivered in days, not months."
  },
  {
    question: "How do I get started?",
    answer: "Simple—just book a free consultation. We'll assess your needs and show you exactly how AI automation can transform your business."
  }
];

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-purple-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;