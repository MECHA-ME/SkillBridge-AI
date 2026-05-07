import { useState, useEffect } from "react";
import { MapPin, Briefcase, Zap, Building, ChevronRight, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

export function JobMatcher() {
  const [activeTab, setActiveTab] = useState<'jobs'|'apprenticeships'>('jobs');
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/jobs/match")
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="font-serif italic text-2xl mb-1 text-[#E4E3E0]">Hyperlocal Smart Job Engine</h2>
          <p className="text-xs text-[#666] leading-relaxed">AI-matched hyperlocal opportunities based on your verified skills.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#070707] border border-[#1A1A1A] p-1">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={cn("px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors", activeTab === 'jobs' ? "bg-amber-500 text-black shadow-sm" : "text-[#888] hover:text-[#E4E3E0]")}
          >
            Nearby Jobs
          </button>
          <button 
            onClick={() => setActiveTab('apprenticeships')}
            className={cn("px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold transition-colors", activeTab === 'apprenticeships' ? "bg-amber-500 text-black shadow-sm" : "text-[#888] hover:text-[#E4E3E0]")}
          >
            Apprenticeships
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between text-xs tracking-wider font-mono text-[#666] mb-4 px-1">
            <span className="uppercase">Showing best matches within 5km</span>
            <span className="flex items-center gap-1 text-amber-500 cursor-pointer hover:text-amber-400 font-sans tracking-normal uppercase text-[10px] font-bold"><MapPin className="w-3 h-3"/> Edit Radius</span>
          </div>
          
          {jobs.map(job => (
            <div key={job.id} className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 hover:border-amber-500/30 transition-colors cursor-pointer group flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
               <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-serif text-[#E4E3E0] group-hover:text-amber-500 transition-colors">{job.title}</h3>
                    {job.verified && <span className="bg-amber-500/10 text-amber-500 px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold border border-amber-500/20 flex items-center gap-1"><Building className="w-3 h-3"/> MSME Verified</span>}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#888]">
                    <span className="flex items-center gap-1.5"><Building className="w-3 h-3" /> {job.company}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {job.location}</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-flex items-center px-2 py-1 text-[10px] uppercase tracking-widest font-bold bg-[#1A1A1A] text-[#888] border border-[#333]">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 text-[10px] uppercase tracking-widest font-bold bg-[#070707] text-[#E4E3E0] border border-[#333]">
                      {job.salary}
                    </span>
                  </div>
               </div>
               
               <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 border-t sm:border-t-0 sm:border-l border-[#1A1A1A] pt-4 sm:pt-0 sm:pl-6 min-w-[120px]">
                 <div className="text-center">
                    <div className="text-2xl font-serif italic text-amber-500 flex items-center justify-center gap-1">
                      {job.matchScore} <Zap className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                    </div>
                    <div className="text-[9px] text-[#666] uppercase tracking-[0.2em] font-bold mt-1">Match Score</div>
                 </div>
                 <button className="hidden sm:flex text-[#333] group-hover:text-amber-500 transition-colors">
                   <ChevronRight className="w-5 h-5" />
                 </button>
               </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
           <div className="bg-amber-500 border border-amber-500 p-6 text-black">
             <h3 className="font-serif italic text-lg mb-2 flex items-center gap-2"><Calculator className="w-4 h-4"/> AI Salary Predictor</h3>
             <p className="text-black/70 text-xs mb-5 font-mono">Based on your extracted skills and current local market trends.</p>
             <div className="bg-[#050505] p-4 text-[#E4E3E0] text-center border border-[#1A1A1A]">
               <div className="text-[9px] text-[#888] uppercase tracking-[0.2em] font-bold">Predicted Range</div>
               <div className="text-2xl font-serif mt-2">₹18k - ₹26k<span className="text-sm font-sans text-[#666]">/mo</span></div>
             </div>
             <button className="w-full mt-6 bg-black text-white py-3 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-black/80 transition-colors border border-black shadow-sm">
               Discover Missing Skills (+₹5k)
             </button>
           </div>
           
           <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6">
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E4E3E0] mb-5">Government Schemes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 pb-4 border-b border-[#1A1A1A]">
                  <div className="w-10 h-10 bg-[#111] border border-[#333] flex items-center justify-center text-amber-500 flex-shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-serif text-[#E4E3E0]">PMKVY Apprenticeship</div>
                    <div className="text-xs text-[#888] mt-1 font-mono leading-relaxed">Stipend of up to ₹7,000/mo while you learn.</div>
                  </div>
                </li>
              </ul>
              <button className="mt-5 text-[10px] uppercase font-bold tracking-widest text-[#888] hover:text-[#E4E3E0] w-full text-center transition-colors">View all eligible schemes</button>
           </div>
        </div>
      </div>
    </div>
  );
}
