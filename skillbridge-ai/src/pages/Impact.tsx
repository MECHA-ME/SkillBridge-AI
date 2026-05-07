import { Globe, Users, TrendingUp, CheckCircle, Rocket } from "lucide-react";

export function Impact() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-12">
      <div className="text-center space-y-4 pt-12 pb-8 border-b border-[#1A1A1A]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-amber-500 text-[10px] uppercase font-bold tracking-[0.2em] border border-[#333]">
          SDG 8 Hackathon Project
        </div>
        <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
          From Skill to Salary <br className="hidden md:block"/> to Startup
        </h1>
        <p className="text-sm text-[#888] font-mono uppercase tracking-wider max-w-2xl mx-auto mt-4">
          A predictive economic mobility ecosystem transforming users from unskilled to entrepreneurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
          <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-6 flex items-center gap-3">
            <Globe className="w-4 h-4 text-amber-500" /> The Problem
          </h2>
          <p className="text-[#E4E3E0] font-serif text-lg leading-relaxed">
            Millions of students, graduates, gig workers, women, rural youth, and informal laborers lack market-relevant skills, career direction, access to local jobs, entrepreneurship guidance, financial literacy, and verified work records. Existing job portals are reactive, fragmented, and fail to create true economic mobility.
          </p>
        </div>

        <div className="bg-amber-500 p-8 border border-amber-500 text-black shadow-sm transform hover:scale-[1.01] transition-transform">
          <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-60 mb-6 flex items-center gap-3">
            <Rocket className="w-4 h-4" /> The Solution
          </h2>
          <p className="text-black font-serif text-lg leading-relaxed font-medium">
            An AI-powered workforce empowerment ecosystem that integrates:
            <br/><br/>
            <span className="block mb-1">• AI Skill Gap Analysis & Upskilling</span>
            <span className="block mb-1">• Hyperlocal Smart Job Engine</span>
            <span className="block mb-1">• Micro-Entrepreneurship Builder</span>
            <span className="block mb-1">• Blockchain Worker Identity</span>
            <span className="block">• Financial Growth Dashboard</span>
          </p>
        </div>
      </div>

      <div className="space-y-8 pt-8 border-t border-[#1A1A1A]">
        <h2 className="font-serif italic text-2xl text-center text-[#E4E3E0]">UN SDG 8 Impact Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ImpactMetric number="Target 8.1" text="Sustain economic growth" />
          <ImpactMetric number="Target 8.2" text="Diversify, innovate and upgrade" />
          <ImpactMetric number="Target 8.3" text="Promote policies for job creation" />
          <ImpactMetric number="Target 8.5" text="Full employment and decent work" />
        </div>
      </div>

      <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A]">
        <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-6">Technical Architecture</h2>
        <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TechBadge category="Frontend" tech="React, Tailwind, Recharts" />
              <TechBadge category="Backend & API" tech="Express, Node (FastAPI mapping)" />
              <TechBadge category="AI Layer" tech="Gemini API, NLP Transformers" />
              <TechBadge category="Database" tech="PostgreSQL + Firebase" />
              <TechBadge category="Blockchain" tech="Polygon Smart Contracts" />
           </div>
        </div>
      </div>
    </div>
  );
}

function ImpactMetric({ number, text }: { number: string, text: string }) {
  return (
    <div className="bg-[#070707] border border-[#1A1A1A] p-6 text-center hover:border-amber-500/50 transition-colors group">
      <div className="text-[10px] text-amber-500 uppercase font-bold tracking-widest mb-3 group-hover:scale-110 transition-transform origin-center">{number}</div>
      <div className="text-sm font-serif text-[#E4E3E0] leading-snug">{text}</div>
    </div>
  )
}

function TechBadge({ category, tech }: { category: string, tech: string }) {
  return (
    <div className="px-5 py-4 bg-[#070707] border border-[#1A1A1A]">
      <div className="text-[9px] text-[#555] font-bold uppercase tracking-[0.2em] mb-2">{category}</div>
      <div className="text-sm font-mono text-[#E4E3E0]">{tech}</div>
    </div>
  )
}
