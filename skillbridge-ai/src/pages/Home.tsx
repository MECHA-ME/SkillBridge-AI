import { 
  ArrowRight, Globe, Target, Users, Zap, BookOpen, 
  Cpu, Layers, ShieldCheck, AlertCircle, CheckCircle2, 
  Briefcase, FileText, Lightbulb, Database, Code, Server 
} from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="space-y-24 max-w-6xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center space-y-8 pt-20 pb-12 border-b border-[#1A1A1A]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-amber-500 text-[10px] uppercase font-bold tracking-[0.2em] border border-[#333]">
          Platform Overview
        </div>
        <h1 className="text-5xl md:text-7xl font-serif italic text-white tracking-tight leading-tight">
          ABOUT <span className="text-amber-500 not-italic">SkillBridge AI</span>
        </h1>
        <p className="text-xl text-[#888] font-serif max-w-3xl mx-auto mt-6 leading-relaxed">
          A predictive economic mobility ecosystem designed to transform users from unskilled individuals to empowered professionals and micro-entrepreneurs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 bg-amber-500 text-black px-8 py-4 font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-amber-400 transition-colors w-full sm:w-auto">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#features" className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 font-bold text-[12px] uppercase tracking-[0.2em] border border-[#333] hover:bg-[#1A1A1A] transition-colors w-full sm:w-auto">
            Explore Product Details
          </a>
        </div>
      </div>

      {/* Problem Statement Section */}
      <section id="problem-statement" className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif text-white flex items-center justify-center gap-3">
            <AlertCircle className="w-8 h-8 text-amber-500" /> The Problem Statement
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">Understanding the systemic challenges we are solving.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
            <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">What we address</h3>
            <p className="text-[#E4E3E0] leading-relaxed text-sm">
              We address the critical socio-economic gap caused by rapid technological disruption, where marginalized communities, gig workers, and students lack verifiable pathways to upskill and align with local market demands.
            </p>
          </div>
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
            <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">Why it matters</h3>
            <p className="text-[#E4E3E0] leading-relaxed text-sm">
              Economic stagnation and inequality are growing. Without affordable, hyper-localized, and trusted mechanisms for skill acquisition, a large demographic remains trapped in low-paying or obsolete jobs, directly impacting global economic growth (SDG 8).
            </p>
          </div>
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
            <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">Who is affected</h3>
            <p className="text-[#E4E3E0] leading-relaxed text-sm">
              Unskilled or semi-skilled laborers, gig-economy workers, unguided students, and aspiring micro-entrepreneurs (MSMEs) in developing or transitioning economies who lack access to premium career counseling.
            </p>
          </div>
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
            <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-3">Current limitations</h3>
            <p className="text-[#E4E3E0] leading-relaxed text-sm">
              Existing systems (like generalized MOOCs or standard job boards) lack personalized, AI-driven local market analysis, do not offer verifiable skill passports (no blockchain trust layer), and fail to seamlessly bridge the transition from learning to micro-entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Product Features & Solutions */}
      <section id="features" className="space-y-8">
        <div className="text-center space-y-4 pt-12 border-t border-[#1A1A1A]">
          <h2 className="text-3xl font-serif text-white flex items-center justify-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-amber-500" /> Core Platform Features
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">How SkillBridge AI bridges the gap between ambition and reality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
            <FileText className="w-8 h-8 text-amber-500 mb-6" />
            <h3 className="text-white font-bold text-lg mb-3">AI Resume Analyzer</h3>
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              Advanced NLP processes user experience, identifying skill gaps against real-time industry demands and suggesting targeted micro-learning paths.
            </p>
            <Link to="/resume" className="text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-400">Try Analyzer &rarr;</Link>
          </div>
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
            <Briefcase className="w-8 h-8 text-amber-500 mb-6" />
            <h3 className="text-white font-bold text-lg mb-3">Hyper-Local Job Matcher</h3>
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              Connects users to immediate, relevant opportunities based on their newly verified skills and precise geographic location.
            </p>
            <Link to="/jobs" className="text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-400">Find Jobs &rarr;</Link>
          </div>
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
            <Lightbulb className="w-8 h-8 text-amber-500 mb-6" />
            <h3 className="text-white font-bold text-lg mb-3">Micro-Business Engine</h3>
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              Guides aspiring entrepreneurs through market analysis, requirement checklists, and predictive ROI based on local trends.
            </p>
            <Link to="/business" className="text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-amber-400">Build Business &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section id="technical-approach" className="space-y-8">
        <div className="text-center space-y-4 pt-12 border-t border-[#1A1A1A]">
          <h2 className="text-3xl font-serif text-white flex items-center justify-center gap-3">
            <Cpu className="w-8 h-8 text-amber-500" /> Technical Approach
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">The architecture, methodology, and tools powering the ecosystem.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" /> System Architecture & Methodology
            </h3>
            <p className="text-[#E4E3E0] leading-relaxed text-sm mb-4">
              SkillBridge AI adopts a modern, decoupled microservices-inspired architecture. The frontend leverages React and Vite for a highly responsive SPA experience, styled precisely with Tailwind CSS. The backend API is powered by Node.js/Express, orchestrating secure routes and data flowing into our primary databases (PostgreSQL and Firebase). 
            </p>
            <p className="text-[#E4E3E0] leading-relaxed text-sm">
              We employ an agile methodology, prioritizing iterative development and continuous integration. The core intelligence relies on Google's Gemini API for NLP and generative tasks, integrated alongside traditional machine learning algorithms for matching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-amber-500" /> Data Handling & Testing
              </h3>
              <ul className="space-y-3 text-sm text-[#E4E3E0]">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Data Handling:</strong> User data is securely managed with encrypted payloads. Resumes are parsed ephemerally for extraction, while core profile data and skill progression are stored securely in the cloud database.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Testing:</strong> Implementation incorporates unit testing for core logic, integration testing for API endpoints, and end-to-end (E2E) testing for critical user paths to ensure reliability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span><strong>Performance:</strong> Evaluated via Lighthouse scores, API response latency monitoring, and strict rate-limiting on LLM calls to guarantee a snappy, cost-effective infrastructure.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-500" /> Blockchain & Verification
              </h3>
              <p className="text-[#E4E3E0] leading-relaxed text-sm">
                To guarantee authenticity, SkillBridge AI integrates with EVM-compatible networks (e.g., Polygon). Once a user completes a verified learning module or job, a smart contract mints an immutable record of completion (a digital skill passport) associated with the user's wallet address. This establishes a zero-trust verification mechanism for employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section id="tools" className="space-y-8">
        <div className="text-center space-y-4 pt-12 border-t border-[#1A1A1A]">
          <h2 className="text-3xl font-serif text-white flex items-center justify-center gap-3">
            <Code className="w-8 h-8 text-amber-500" /> Tools & Requirements
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">The tech stack and platforms utilized.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A] text-center">
            <h4 className="text-amber-500 font-bold uppercase text-[10px] tracking-widest mb-2">Languages</h4>
            <p className="text-white text-sm font-medium">TypeScript, Node.js</p>
            <p className="text-[#666] text-xs mt-1">Python (AI Scripts), Solidity</p>
          </div>
          <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A] text-center">
            <h4 className="text-amber-500 font-bold uppercase text-[10px] tracking-widest mb-2">Software/Frameworks</h4>
            <p className="text-white text-sm font-medium">React 18+, Vite</p>
            <p className="text-[#666] text-xs mt-1">Tailwind CSS, Express</p>
          </div>
          <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A] text-center">
            <h4 className="text-amber-500 font-bold uppercase text-[10px] tracking-widest mb-2">Platforms</h4>
            <p className="text-white text-sm font-medium">Google Cloud (Run)</p>
            <p className="text-[#666] text-xs mt-1">Firebase, Polygon</p>
          </div>
          <div className="bg-[#0A0A0A] p-6 border border-[#1A1A1A] text-center">
            <h4 className="text-amber-500 font-bold uppercase text-[10px] tracking-widest mb-2">Hardware/APIs</h4>
            <p className="text-white text-sm font-medium">Gemini 1.5 Pro API</p>
            <p className="text-[#666] text-xs mt-1">Standard Cloud Compute</p>
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="space-y-8 pb-12">
        <div className="text-center space-y-4 pt-12 border-t border-[#1A1A1A]">
          <h2 className="text-3xl font-serif text-white flex items-center justify-center gap-3">
            <BookOpen className="w-8 h-8 text-amber-500" /> References
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">Foundational literature and documentation.</p>
        </div>

        <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
          <ul className="space-y-4 text-sm text-[#E4E3E0] max-w-4xl mx-auto list-disc pl-5">
            <li><strong>AI & NLP:</strong> Vaswani, A., et al. (2017). "Attention Is All You Need." <em>Advances in Neural Information Processing Systems</em>. (Transformer Architecture foundation).</li>
            <li><strong>Blockchain in Education:</strong> Chen, G., et al. (2018). "Exploring blockchain technology and its potential applications for education." <em>Smart Learning Environments</em>, 5(1), 1.</li>
            <li><strong>Official Documentation:</strong> <a href="https://ai.google.dev/docs" target="_blank" rel="noreferrer" className="text-amber-500 hover:underline">Google Gemini API Documentation</a>; React & Vite official docs; Tailwind CSS documentation.</li>
            <li><strong>Socio-Economic Impact:</strong> United Nations (2015). <em>Sustainable Development Goals (SDG 8: Decent Work and Economic Growth).</em> Available at un.org/sustainabledevelopment/economic-growth.</li>
            <li><strong>Books:</strong> "Designing Data-Intensive Applications" by Martin Kleppmann (O'Reilly Media) for system architecture best practices.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
