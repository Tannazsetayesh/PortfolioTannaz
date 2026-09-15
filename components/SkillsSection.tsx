export default function SkillsSection() {
  const skillCategories = [
    {
      category: "AI and Machine Learning",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Model Training & Fine-tuning",
        "Computer Vision",
        "Natural Language Processing",
        "MLOps",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      category: "Generative AI and RAG",
      skills: [
        "Large Language Models",
        "OpenAI GPT",
        "Anthropic Claude",
        "LangChain",
        "Vector Databases",
        "Prompt Engineering",
        "RAG Pipelines",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
    {
      category: "Data Engineering",
      skills: [
        "Apache Spark",
        "Apache Airflow",
        "SQL & NoSQL",
        "ETL Pipelines",
        "Data Warehousing",
        "Python",
        "Pandas & NumPy",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      category: "Cloud and Infrastructure",
      skills: [
        "AWS",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "REST APIs",
        "Microservices",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 font-light">
            Technical capabilities across the AI/ML stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border-2 border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-lg bg-gradient-to-br from-white to-slate-50/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-slate-700 group-hover:text-indigo-600 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-900 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
