import Link from "next/link";

export default function IRSRagAssistantPage() {
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
            IRS Manual RAG Assistant
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Retrieval-augmented generation system for intelligent navigation and
            question-answering across complex IRS documentation
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            RAG
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            LLM
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Document Intelligence
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Python
          </span>
          <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium">
            Vector Database
          </span>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
            <p>
              The IRS Manual RAG Assistant is an advanced retrieval-augmented
              generation system designed to help users navigate and extract
              information from the extensive IRS Internal Revenue Manual. This
              intelligent assistant combines the power of large language models
              with efficient document retrieval to provide accurate,
              context-aware answers to complex tax-related questions.
            </p>
            <p>
              Traditional keyword search often fails to capture the nuanced
              nature of tax documentation. This project addresses that challenge
              by implementing a sophisticated RAG pipeline that understands
              context, maintains conversation history, and retrieves the most
              relevant sections from thousands of pages of IRS documentation.
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
                Intelligent Document Retrieval
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Leverages vector embeddings and semantic search to find the most
                relevant IRS manual sections, going beyond simple keyword
                matching to understand the intent behind queries.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Contextual Question Answering
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Generates precise, citation-backed answers using retrieved
                context, ensuring responses are grounded in official IRS
                documentation with proper source attribution.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Conversational Interface
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Maintains conversation history to enable follow-up questions and
                clarifications, creating a natural dialogue experience for
                complex multi-part queries.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Scalable Architecture
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Built with production-ready infrastructure supporting efficient
                indexing, fast retrieval, and scalable deployment for handling
                multiple concurrent users.
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
                Document Processing Pipeline
              </h3>
              <p className="leading-relaxed">
                Implemented a robust ETL pipeline to parse, chunk, and embed IRS
                manual documents. The system intelligently segments documents
                while preserving semantic meaning and contextual boundaries,
                ensuring optimal retrieval performance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                RAG Architecture
              </h3>
              <p className="leading-relaxed">
                Utilized state-of-the-art embedding models for semantic search,
                integrated with a vector database for efficient similarity
                search. The retrieval component feeds relevant context to a
                fine-tuned language model for accurate answer generation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Quality Assurance
              </h3>
              <p className="leading-relaxed">
                Implemented comprehensive evaluation metrics including retrieval
                precision, answer accuracy, and citation correctness. Regular
                testing against a curated set of tax questions ensures
                consistent performance.
              </p>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Impact</h2>
          <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              This project demonstrates the practical application of RAG
              technology in making complex regulatory documentation more
              accessible. By combining advanced NLP techniques with thoughtful
              UX design, the assistant significantly reduces the time required
              to find accurate information in the IRS manual.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The system showcases expertise in building production-ready AI
              applications that handle real-world challenges including document
              complexity, query ambiguity, and the need for verifiable,
              trustworthy responses.
            </p>
          </div>
        </section>

        {/* CTA Buttons */}
        <section className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200">
          <a
            href="https://github.com/Tannazsetayesh/ai-chatbot-rag"
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
        </section>
      </article>
    </main>
  );
}
