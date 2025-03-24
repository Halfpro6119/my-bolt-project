import React from 'react';
import { 
  Zap, 
  Clock, 
  Shield, 
  Bot, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import SplineAnimation from '../components/SplineAnimation';

function GradientButton({ children, className = '', onClick }: { 
  children: React.ReactNode, 
  className?: string,
  onClick?: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className={`
        relative group overflow-hidden px-8 py-4 rounded-full
        bg-gradient-to-r from-blue-600 to-purple-600
        hover:from-blue-500 hover:to-purple-500
        transition-all duration-300 transform hover:scale-105
        text-white font-semibold text-lg
        shadow-[0_0_20px_rgba(79,70,229,0.4)]
        hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </button>
  );
}

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
      
      {/* Spline Animation */}
      <SplineAnimation />

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-fade-in">
              AI-Powered Websites & Automations That Scale Your Business Effortlessly
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your website shouldn't just sit there—it should work for you. Our AI-powered websites don't just look good; 
              they automate your business, attract high-quality leads, and increase revenue while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                className="text-xl"
                onClick={() => navigate('/consultation')}
              >
                Book Your Free AI Strategy Call
              </GradientButton>
              <button
                onClick={() => navigate('/blog')}
                className="px-8 py-4 rounded-full border-2 border-purple-500/30 hover:border-purple-500 
                text-purple-400 hover:text-purple-300 transition-all duration-300 text-lg font-semibold
                hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              >
                Explore AI Insights
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="Lightning Fast Delivery"
              description="Your high-performance site is live in 48 hours, no compromises."
            />
            <FeatureCard
              icon={Bot}
              title="AI-Driven Automation"
              description="AI-driven systems eliminate busywork & boost revenue automatically."
            />
            <FeatureCard
              icon={Shield}
              title="Risk-Free Guarantee"
              description="If we don't deliver on our promises, you don't pay. Simple as that."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Book a Free Consultation",
                description: "We analyze your needs & opportunities"
              },
              {
                step: "02",
                title: "We Build & Automate",
                description: "A stunning website with AI integrations in 48 hours"
              },
              {
                step: "03",
                title: "You Scale Effortlessly",
                description: "Automate leads, bookings, and growth"
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 rounded-2xl bg-gray-800/30 border border-gray-700">
                <div className="text-5xl font-bold text-purple-400/20 absolute top-4 right-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Power of AI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700">
              <div className="text-4xl font-bold text-purple-400 mb-4">40%</div>
              <p className="text-xl text-gray-300">More conversions for businesses using AI automation</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-700">
              <div className="text-4xl font-bold text-purple-400 mb-4">2x</div>
              <p className="text-xl text-gray-300">Faster loading speeds & higher engagement rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-purple-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't let outdated systems slow you down.</h2>
          <p className="text-xl text-gray-300 mb-8">
            AI automation is the future—and it's available to you today. Let's build something powerful together.
          </p>
          <GradientButton 
            className="text-xl"
            onClick={() => navigate('/consultation')}
          >
            Book Your Free AI Strategy Call
          </GradientButton>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;