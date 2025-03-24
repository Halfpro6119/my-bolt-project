import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Share2, CheckCircle, ArrowRight } from 'lucide-react';
import { SAMPLE_ARTICLES } from './BlogPage';

function ArticlePage() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = SAMPLE_ARTICLES.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  const articleContent = {
    '1': {
      sections: [
        {
          title: "The Lead Generation Crisis in Small Business",
          content: `Are you tired of spending countless hours and resources on lead generation with minimal results? You're not alone. Our recent survey of 500+ small businesses revealed that 78% struggle with consistent lead generation, while 65% find their current methods too expensive and time-consuming.

But there's a solution that's transforming how small businesses approach lead generation: AI-powered automation.`
        },
        {
          title: "Real-World Success: The Parker Agency Case Study",
          content: `The Parker Agency, a small marketing firm with 15 employees, was struggling to generate qualified leads. They were spending $5,000 monthly on various lead generation tools with disappointing results.

After implementing AI-driven lead generation:
• Lead quality increased by 312%
• Cost per lead decreased from $50 to $12
• Sales team productivity improved by 68%
• ROI reached 312% within 3 months`
        },
        {
          title: "Step-by-Step Implementation Guide",
          content: `Here's your actionable roadmap to AI-powered lead generation:

1. Audit Your Current Process (Day 1-2)
   • Document your existing lead generation channels
   • Calculate your current cost per lead
   • Identify major bottlenecks and pain points

2. Choose the Right AI Tools (Day 3-4)
   • Select a CRM with AI capabilities
   • Implement lead scoring automation
   • Set up multi-channel tracking

3. Create Your AI Strategy (Day 5-7)
   • Define your ideal customer profile
   • Set up automated lead qualification criteria
   • Create response templates for different scenarios

4. Launch and Optimize (Week 2)
   • Begin with a small segment of your audience
   • Monitor key metrics daily
   • Adjust parameters based on initial results`
        },
        {
          title: "Expert Tips for Maximum Impact",
          content: `Industry leaders share their insights:

"Focus on data quality first. The better your input data, the more effective your AI system will be." - John Smith, AI Implementation Specialist

"Start small and scale gradually. Test your AI system with a subset of leads before rolling it out completely." - Maria Garcia, Lead Generation Expert

Key Success Factors:
• Clean, organized CRM data
• Clear qualification criteria
• Regular system monitoring
• Continuous optimization`
        },
        {
          title: "Measuring Success: Key Metrics to Track",
          content: `Monitor these metrics to ensure optimal performance:

1. Lead Quality Metrics
   • Conversion rate by lead source
   • Time to qualification
   • Lead score accuracy

2. Efficiency Metrics
   • Cost per qualified lead
   • Lead response time
   • Automation rate

3. ROI Metrics
   • Revenue per lead
   • Customer acquisition cost
   • Overall ROI`
        }
      ],
      takeaways: [
        "Implement AI-driven lead scoring for 68% faster qualification",
        "Automate follow-ups to reduce response time by 80%",
        "Use predictive analytics to identify high-value prospects",
        "Integrate multi-channel tracking for comprehensive lead insights"
      ]
    },
    '2': {
      sections: [
        {
          title: "The Customer Support Challenge",
          content: `Is your support team drowning in tickets? You're not alone. Recent data shows that 73% of customer support teams are overwhelmed, with response times averaging 12+ hours. This leads to frustrated customers and burned-out staff.

But innovative businesses are solving this with AI-powered support automation - and the results are transformative.`
        },
        {
          title: "Success Story: TechFlow Solutions",
          content: `TechFlow Solutions, a SaaS company with 2,000+ customers, was struggling with support scalability. Their team of 8 support agents was handling 500+ tickets daily, leading to:
• 14-hour average response times
• 67% customer satisfaction score
• Frequent agent burnout and turnover

After implementing AI support automation:
• Response time dropped to 3 minutes
• Customer satisfaction increased to 94%
• Support costs reduced by 62%
• Agents now focus on complex, high-value interactions`
        },
        {
          title: "Implementation Blueprint",
          content: `Follow this proven framework to transform your support operations:

1. Assessment Phase (Week 1)
   • Audit current support channels
   • Analyze common customer issues
   • Map customer journey touchpoints
   • Identify automation opportunities

2. AI System Setup (Week 2)
   • Choose AI support platform
   • Train AI on your knowledge base
   • Set up integration with existing tools
   • Create response templates

3. Automation Workflow Creation (Week 3)
   • Design conversation flows
   • Set up automatic ticket routing
   • Create escalation protocols
   • Implement feedback loops

4. Testing and Optimization (Week 4)
   • Run pilot with select customers
   • Gather and analyze feedback
   • Refine AI responses
   • Scale to full deployment`
        },
        {
          title: "Best Practices from Industry Leaders",
          content: `Expert insights for maximum effectiveness:

"The key is to start with your most common customer inquiries. These quick wins build confidence in the system." - David Chen, Customer Experience Director

"Don't try to automate everything at once. Focus on the 20% of issues that cause 80% of volume." - Rachel Martinez, AI Support Specialist

Critical Success Factors:
• Comprehensive knowledge base
• Clear escalation paths
• Regular AI training updates
• Continuous performance monitoring`
        },
        {
          title: "Performance Tracking Framework",
          content: `Monitor these key metrics to ensure optimal performance:

1. Response Metrics
   • First response time
   • Resolution time
   • Automation rate
   • Escalation frequency

2. Customer Experience
   • Satisfaction scores
   • Self-service success rate
   • Channel effectiveness
   • Resolution accuracy

3. Business Impact
   • Cost per ticket
   • Agent productivity
   • Customer retention
   • Support ROI`
        }
      ],
      takeaways: [
        "Reduce response times by 80% with AI-powered instant replies",
        "Increase customer satisfaction by 45% through consistent support",
        "Cut support costs by 62% while improving service quality",
        "Free up agents for complex problem-solving and relationship building"
      ]
    },
    '3': {
      sections: [
        {
          title: "The Marketing Automation Revolution",
          content: `Are your marketing campaigns delivering disappointing returns? You're throwing money at various channels but can't seem to move the needle? You're not alone - 67% of businesses report their marketing ROI is flat or declining.

But there's a revolution happening: AI-driven marketing automation is helping businesses achieve unprecedented ROI, and we'll show you exactly how to implement it.`
        },
        {
          title: "Case Study: Global Retail Success",
          content: `RetailPro, an e-commerce company with $5M in annual revenue, was struggling with marketing effectiveness. Their traditional campaigns were yielding:
• 1.2% conversion rate
• $42 cost per acquisition
• 8% email open rate
• 2.3x ROI on ad spend

After implementing our 5-step AI marketing system:
• Conversion rate jumped to 4.8%
• Cost per acquisition dropped to $11
• Email open rates reached 32%
• ROI increased to 10.4x
• Revenue grew by 312% in 6 months`
        },
        {
          title: "The 5-Step Implementation System",
          content: `Follow this proven framework to transform your marketing:

1. Data Integration & Analysis (Week 1)
   • Consolidate customer data sources
   • Set up AI analytics tracking
   • Create customer segments
   • Define key performance metrics

2. AI Campaign Setup (Week 2)
   • Configure AI-powered ad targeting
   • Set up dynamic email personalization
   • Implement predictive content selection
   • Create automated A/B testing

3. Customer Journey Automation (Week 3)
   • Design personalized customer journeys
   • Set up trigger-based campaigns
   • Create dynamic content rules
   • Implement cross-channel coordination

4. Optimization Framework (Week 4)
   • Set up automated bid management
   • Configure dynamic budget allocation
   • Create performance monitoring dashboards
   • Implement automated reporting

5. Scale & Refine (Week 5+)
   • Expand to additional channels
   • Refine targeting algorithms
   • Optimize conversion paths
   • Scale successful campaigns`
        },
        {
          title: "Expert Implementation Tips",
          content: `Leading marketers share their insights:

"The power of AI marketing lies in micro-segmentation and real-time personalization. Start there." - Sarah Johnson, Digital Marketing Director

"Focus on building comprehensive customer profiles first. Better data means better AI decisions." - Michael Chang, Marketing AI Specialist

Critical Success Factors:
• Clean, consolidated data
• Clear success metrics
• Regular performance reviews
• Continuous optimization
• Cross-channel coordination`
        },
        {
          title: "Measuring Marketing Success",
          content: `Track these metrics to ensure optimal performance:

1. Campaign Performance
   • Conversion rates by channel
   • Cost per acquisition
   • Return on ad spend
   • Customer lifetime value

2. Engagement Metrics
   • Click-through rates
   • Email open rates
   • Social engagement
   • Website behavior

3. Business Impact
   • Revenue growth
   • Market share
   • Customer acquisition cost
   • Overall marketing ROI`
        }
      ],
      takeaways: [
        "Achieve 10x ROI through AI-powered campaign optimization",
        "Reduce customer acquisition costs by 75% with smart targeting",
        "Increase conversion rates by 300% using predictive analytics",
        "Scale successful campaigns automatically across channels"
      ]
    }
  };

  const content = articleContent[articleId as keyof typeof articleContent];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20" />
      
      <article className="relative max-w-4xl mx-auto px-4 sm:px-6 animate-fade-in">
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </button>

        <div className="aspect-w-16 aspect-h-9 mb-8 rounded-2xl overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {article.category}
          </span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} min read</span>
          </div>
          <span className="text-gray-400">By {article.author}</span>
          <button 
            className="ml-auto p-2 rounded-full hover:bg-purple-500/10 text-gray-400 hover:text-purple-400 transition-all"
            onClick={() => {
              navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href
              }).catch(() => {
                navigator.clipboard.writeText(window.location.href);
              });
            }}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <h1 className="text-4xl font-bold text-white mb-6">
          {article.title}
        </h1>

        <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
          {article.stats.roi && (
            <div className="text-center">
              <div className="text-purple-400 text-3xl font-bold mb-1">{article.stats.roi}</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
          )}
          {article.stats.timeReduction && (
            <div className="text-center">
              <div className="text-purple-400 text-3xl font-bold mb-1">{article.stats.timeReduction}</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
          )}
          {article.stats.conversionIncrease && (
            <div className="text-center">
              <div className="text-purple-400 text-3xl font-bold mb-1">{article.stats.conversionIncrease}</div>
              <div className="text-gray-400">Conversion Increase</div>
            </div>
          )}
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            {article.excerpt}
          </p>
          
          {content && content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2>{section.title}</h2>
              <div className="whitespace-pre-wrap">{section.content}</div>
            </div>
          ))}

          {content && (
            <div className="mt-12 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Key Takeaways</h2>
              <ul className="space-y-4">
                {content.takeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="mb-6">
              Get a free AI strategy session and discover how you can implement these solutions in your business.
            </p>
            <button
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-400 transition-colors"
            >
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ArticlePage;