import Link from "next/link";

export default function AIMarketingAuditPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6 group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            AI Local Marketing Audit Platform
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Automated platform leveraging AI to analyze and optimize local
            marketing strategies with data-driven recommendations
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Marketing AI
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Analytics
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Automation
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Machine Learning
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Web Scraping
          </span>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              The AI Local Marketing Audit Platform is an intelligent automation
              tool designed to comprehensively analyze local business marketing
              presence across multiple digital channels. By combining web
              scraping, data analytics, and machine learning, the platform
              provides actionable insights that help businesses optimize their
              local marketing strategies.
            </p>
            <p>
              In today&apos;s digital landscape, businesses struggle to maintain
              consistent and effective marketing across various platforms—Google
              My Business, social media, review sites, and directories. This
              platform automates the audit process, identifying gaps,
              opportunities, and competitive advantages with AI-powered
              recommendations.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Key Features
          </h2>
          <div className="grid gap-4">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Automated Multi-Channel Analysis
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Automatically scans and analyzes business presence across Google
                My Business, social media platforms, review sites, and local
                directories, aggregating data into a unified dashboard.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                AI-Powered Recommendations
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Utilizes machine learning models to analyze patterns and provide
                personalized, prioritized recommendations for improving local
                search visibility and customer engagement.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Competitive Intelligence
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Benchmarks business performance against local competitors,
                identifying strategic opportunities and market positioning gaps
                with actionable competitive insights.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Comprehensive Reporting
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Generates detailed audit reports with visualizations, trend
                analysis, and clear action items, making complex data accessible
                to business owners and marketing teams.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Technical Implementation
          </h2>
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Data Collection Infrastructure
              </h3>
              <p className="leading-relaxed">
                Built a robust web scraping and API integration system to gather
                data from diverse sources including Google APIs, social media
                platforms, and review aggregators. Implemented rate limiting,
                error handling, and data validation to ensure reliable
                collection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Machine Learning Pipeline
              </h3>
              <p className="leading-relaxed">
                Developed ML models for sentiment analysis of customer reviews,
                keyword optimization, and performance prediction. The system
                learns from industry benchmarks and historical data to provide
                increasingly accurate recommendations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Scalable Backend Architecture
              </h3>
              <p className="leading-relaxed">
                Designed a microservices-based architecture with asynchronous
                task processing for handling multiple concurrent audits.
                Implemented caching strategies and database optimization for fast
                report generation and responsive user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Impact</h2>
          <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              This platform transforms the traditionally manual and
              time-consuming process of marketing audits into an automated,
              data-driven workflow. By democratizing access to sophisticated
              marketing analytics, it enables small and medium-sized businesses
              to compete more effectively in local markets.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The project demonstrates expertise in building end-to-end AI
              solutions that combine multiple technologies—web scraping, machine
              learning, data engineering, and user-facing applications—to solve
              real business challenges with measurable outcomes.
            </p>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="pt-8 border-t border-slate-200">
          {/* Primary CTA - Live Site */}
          <a
            href="https://ai-marketing-audit-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-4 bg-indigo-600 text-white text-center rounded-xl font-medium transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg flex items-center justify-center gap-2 mb-4 text-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Live Site
          </a>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/Tannazsetayesh/ai_marketing_audit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 bg-slate-900 text-white text-center rounded-xl font-medium transition-all duration-300 hover:bg-slate-800 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code on GitHub
            </a>
            <Link
              href="/#projects"
              className="flex-1 px-6 py-4 bg-white text-slate-900 text-center rounded-xl font-medium border-2 border-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-lg"
            >
              Back to All Projects
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
