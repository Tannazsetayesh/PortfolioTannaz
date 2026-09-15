export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Advisor for Residential Gateway Operations",
      description:
        "Intelligent system for optimizing residential gateway operations through machine learning-driven insights and automated decision-making.",
      tags: ["Machine Learning", "Operations AI", "Automation"],
      gradient: "from-blue-50 to-indigo-50",
      detailLink: null,
      githubLink: null,
    },
    {
      title: "Loreo Multilingual Meeting Intelligence",
      description:
        "Advanced NLP platform for extracting actionable insights from multilingual meetings with real-time transcription and analysis.",
      tags: ["NLP", "Multilingual AI", "Real-time Processing"],
      gradient: "from-violet-50 to-purple-50",
      detailLink: null,
      githubLink: null,
    },
    {
      title: "IRS Manual RAG Assistant",
      description:
        "Retrieval-augmented generation system for intelligent navigation and question-answering across complex IRS documentation.",
      tags: ["RAG", "LLM", "Document Intelligence"],
      gradient: "from-slate-50 to-gray-50",
      detailLink: "/projects/irs-rag-assistant",
      githubLink: "https://github.com/Tannazsetayesh/ai-chatbot-rag",
    },
    {
      title: "AI Local Marketing Audit Platform",
      description:
        "Automated platform leveraging AI to analyze and optimize local marketing strategies with data-driven recommendations.",
      tags: ["Marketing AI", "Analytics", "Automation"],
      gradient: "from-indigo-50 to-blue-50",
      detailLink: "/projects/ai-marketing-audit",
      githubLink: "https://github.com/Tannazsetayesh/ai_marketing_audit",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Selected works showcasing AI/ML solutions in production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${project.gradient} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-slate-200/50`}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/70 text-slate-700 text-sm rounded-full border border-slate-200/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons for projects with links */}
                {(project.detailLink || project.githubLink) && (
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    {project.detailLink && (
                      <a
                        href={project.detailLink}
                        className="flex-1 px-4 py-2.5 bg-slate-900 text-white text-center rounded-lg font-medium text-sm transition-all duration-300 hover:bg-slate-800 hover:shadow-md"
                      >
                        View Details
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-white text-slate-900 text-center rounded-lg font-medium text-sm border-2 border-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-md flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        See Code on GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
