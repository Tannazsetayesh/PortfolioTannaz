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
            A production-ready SaaS application for generating data-grounded 
            marketing plans for local businesses with intelligent budget allocation 
            and multi-step enrichment pipelines
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Next.js 16
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            OpenAI GPT-4
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Claude AI
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Postgres
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Inngest
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Production SaaS
          </span>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Overview
          </h2>
          <div className="text-slate-700 space-y-4">
            <p className="leading-relaxed">
              Production SaaS that generates data-grounded marketing plans for local businesses by orchestrating multiple data sources—SERP rankings, Google Places, PageSpeed Insights, and real-time CPC data—through an async enrichment pipeline.
            </p>
            <p className="leading-relaxed">
              Features schema-validated AI outputs, intelligent budget allocation, graceful API degradation, cost tracking, and professional PDF generation.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Tech Stack
          </h2>
          <div className="text-slate-700 space-y-3">
            <p><span className="font-semibold text-slate-900">Frontend:</span> Next.js 16 (App Router), React 19, TailwindCSS</p>
            <p><span className="font-semibold text-slate-900">Backend:</span> TypeScript, Postgres (Supabase)</p>
            <p><span className="font-semibold text-slate-900">AI/ML:</span> OpenAI API (GPT-4), Claude for structured analysis</p>
            <p><span className="font-semibold text-slate-900">Infrastructure:</span> Inngest, Puppeteer, Resend</p>
            <p><span className="font-semibold text-slate-900">Integrations:</span> SERP API, Google PageSpeed Insights, Google Places API, Stripe</p>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Async Multi-Step Enrichment Pipeline
              </h3>
              <p className="leading-relaxed">
                Orchestrates parallel API calls across multiple data sources with intelligent caching and graceful degradation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Schema-Validated AI Outputs
              </h3>
              <p className="leading-relaxed">
                Zod validation ensures structured, hallucination-free responses with parallelized LLM calls for fault isolation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Intelligent Budget Allocation
              </h3>
              <p className="leading-relaxed">
                Proprietary algorithm allocates budgets using real-time CPC data and competitor analysis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Production-Grade Infrastructure
              </h3>
              <p className="leading-relaxed">
                Job queue with retries, cost tracking, PDF generation, and SSRF protection.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Architecture Highlights
          </h2>
          <div className="space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Job Queue with Retries & Idempotency
              </h3>
              <p className="leading-relaxed">
                Inngest orchestration with automatic retries and detailed observability.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Enrichment Caching Layer
              </h3>
              <p className="leading-relaxed">
                Intelligent caching with 7-30 day TTL reduces API costs while maintaining data freshness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Parallelized LLM Architecture
              </h3>
              <p className="leading-relaxed">
                Independent LLM calls per section with Zod validation for consistent outputs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Security & Cost Management
              </h3>
              <p className="leading-relaxed">
                SSRF protection and per-report cost tracking for margin analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Impact</h2>
          <div className="text-slate-700 space-y-4">
            <p className="leading-relaxed">
              Production SaaS demonstrating full-stack AI development—from data orchestration and LLM integration to payment processing and PDF generation.
            </p>
            <p className="leading-relaxed">
              Combines async job orchestration, schema-validated outputs, intelligent caching, and real-time market data to deliver reliable insights for local businesses.
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
