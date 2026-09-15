"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Abstract AI-inspired background */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#1e293b", stopOpacity: 0.1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#6366f1", stopOpacity: 0.15 }}
              />
            </linearGradient>
          </defs>
          {/* Neural network inspired nodes and connections */}
          <circle cx="150" cy="200" r="3" fill="#6366f1" opacity="0.4" />
          <circle cx="300" cy="150" r="2" fill="#1e293b" opacity="0.3" />
          <circle cx="450" cy="250" r="4" fill="#6366f1" opacity="0.5" />
          <circle cx="600" cy="180" r="2.5" fill="#1e293b" opacity="0.4" />
          <circle cx="750" cy="220" r="3" fill="#6366f1" opacity="0.4" />
          <circle cx="850" cy="300" r="2" fill="#1e293b" opacity="0.3" />
          
          <line
            x1="150"
            y1="200"
            x2="300"
            y2="150"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
          <line
            x1="300"
            y1="150"
            x2="450"
            y2="250"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
          <line
            x1="450"
            y1="250"
            x2="600"
            y2="180"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
          <line
            x1="600"
            y1="180"
            x2="750"
            y2="220"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
          <line
            x1="750"
            y1="220"
            x2="850"
            y2="300"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />

          {/* Additional layer */}
          <circle cx="200" cy="700" r="3" fill="#6366f1" opacity="0.4" />
          <circle cx="400" cy="750" r="2.5" fill="#1e293b" opacity="0.3" />
          <circle cx="600" cy="700" r="3.5" fill="#6366f1" opacity="0.5" />
          <circle cx="800" cy="750" r="2" fill="#1e293b" opacity="0.4" />
          
          <line
            x1="200"
            y1="700"
            x2="400"
            y2="750"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
          <line
            x1="400"
            y1="750"
            x2="600"
            y2="700"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
          <line
            x1="600"
            y1="700"
            x2="800"
            y2="750"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 tracking-tight">
            Tannaz Setayesh
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 font-light mb-8 tracking-wide">
            AI/ML Engineer
          </p>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            Building production-ready AI products with expertise in machine
            learning, data engineering, and large language model applications.
            Transforming complex data challenges into intelligent, scalable
            solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-lg hover:scale-105 min-w-[200px]"
            >
              View My Work
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium text-lg border-2 border-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-lg hover:scale-105 min-w-[200px]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
