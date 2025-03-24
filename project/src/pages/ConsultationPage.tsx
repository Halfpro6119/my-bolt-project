import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/7j4c4vkifnsan7yjmz8b16l5yjakt54v';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  question: string;
  automations?: string;
  source?: string;
}

function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendToMake = async (formData: FormData) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Make webhook error: ${errorData}`);
      }

      const responseText = await response.text();
      if (responseText.toLowerCase() !== 'accepted') {
        throw new Error('Unexpected response from Make.com');
      }
      
      return true;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request to Make.com timed out. Please try again.');
        }
        throw error;
      }
      throw new Error('An unexpected error occurred with Make.com.');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as FormData;

    try {
      await sendToMake(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setError(
        error instanceof Error 
          ? error.message 
          : 'There was an error submitting your form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 pt-16">
        <div className="max-w-md w-full text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-gray-300 text-lg">
            We'll analyze your needs and get back to you within 48 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
      
      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Would you like to know what we can do for you?
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Fill out the form below, and we'll contact you within 48 hours for a free analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No costs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No obligations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No annoying sales pitch</span>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 space-y-6">
            {/* Required Fields */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name <span className="text-purple-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email <span className="text-purple-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-2">
                Your Most Important Question <span className="text-purple-400">*</span>
              </label>
              <textarea
                name="question"
                id="question"
                required
                rows={3}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="What's your biggest challenge with automation?"
              />
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-medium text-gray-300 mb-2">
                How Did You Find Us?
              </label>
              <select
                name="source"
                id="source"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="">Please select</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                Your Website
              </label>
              <input
                type="url"
                name="website"
                id="website"
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="https://"
              />
            </div>

            <div>
              <label htmlFor="automations" className="block text-sm font-medium text-gray-300 mb-2">
                What Automations Are You Currently Using?
              </label>
              <textarea
                name="automations"
                id="automations"
                rows={3}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="List any tools or automations you're currently using..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              w-full px-8 py-4 rounded-full
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-500 hover:to-purple-500
              transition-all duration-300
              text-white font-semibold text-lg
              shadow-[0_0_20px_rgba(79,70,229,0.4)]
              hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]
              disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-105
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Request My Free AI Strategy'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationPage;