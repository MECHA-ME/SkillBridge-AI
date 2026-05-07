import { ArrowRight, Globe, Target, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto pb-16">
      {/* Hero Section */}
      <div className="text-center space-y-6 pt-12 pb-8 border-b border-[#1A1A1A]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-amber-500 text-[10px] uppercase font-bold tracking-[0.2em] border border-[#333]">
          Welcome to SkillBridge AI
        </div>
        <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight leading-tight">
          ABOUT <span className="text-amber-500 not-italic">SkillBridge AI</span>
        </h1>
        <p className="text-lg text-[#888] font-serif max-w-2xl mx-auto mt-6 leading-relaxed">
          SkillBridge AI is a predictive economic mobility ecosystem designed to transform users from unskilled individuals to empowered professionals and micro-entrepreneurs. We leverage AI and blockchain to close the skill gap and create verifiable pathways to success.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link to="/dashboard" className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-amber-400 transition-colors">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* About Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4 flex items-center gap-3">
            <Target className="w-4 h-4 text-amber-500" /> Our Mission
          </h3>
          <p className="text-[#E4E3E0] font-serif leading-relaxed text-sm">
            To provide accessible, hyper-localized upskilling and job matching that aligns with UN Sustainable Development Goal 8 (Decent Work and Economic Growth). We aim to democratize career growth for marginalized communities.
          </p>
        </div>
        
        <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4 flex items-center gap-3">
            <Zap className="w-4 h-4 text-amber-500" /> Core Engine
          </h3>
          <p className="text-[#E4E3E0] font-serif leading-relaxed text-sm">
            Powered by advanced NLP Transformers and the Gemini API, our platform analyzes resumes, identifies missing skills in the local market, and suggests tailored micro-entrepreneurship plans or fast-track learning routes.
          </p>
        </div>

        <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4 flex items-center gap-3">
            <Globe className="w-4 h-4 text-amber-500" /> Blockchain Verified
          </h3>
          <p className="text-[#E4E3E0] font-serif leading-relaxed text-sm">
            Every skill acquired and job completed is recorded securely on a Polygon-backed Smart Contract, acting as an immutable digital passport that builds trust between employers and job seekers.
          </p>
        </div>

        <div className="bg-[#0A0A0A] p-8 border border-[#1A1A1A] hover:border-amber-500/30 transition-colors">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4 flex items-center gap-3">
            <Users className="w-4 h-4 text-amber-500" /> For Everyone
          </h3>
          <p className="text-[#E4E3E0] font-serif leading-relaxed text-sm">
            Whether you are a student, gig worker, or aspiring MSME owner, the platform provides tailored end-to-end guidance from skill identification to financial readiness and local job acquisition.
          </p>
        </div>
      </div>
    </div>
  );
}
