import { useState } from "react";
import { Lightbulb, Wrench, IndianRupee, PieChart, Sparkles, Target, Settings, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function BusinessBuilder() {
  const [budget, setBudget] = useState('50000');
  const [isGenerating, setIsGenerating] = useState(false);
  const [idea, setIdea] = useState<any>(null);

  const generateIdea = async () => {
    setIsGenerating(true);
    
    try {
      const res = await fetch("/api/business/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          budget, 
          skills: ["Cooking", "Order Mgmt", "Local Area Knowledge", "Basic English"],
          location: "Andheri East, Mumbai" 
        })
      });
      
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);

      setIdea(data);
    } catch (e) {
      console.error(e);
      alert("Error generating business plan. Make sure Gemini API Key is set.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="font-serif italic text-2xl mb-1 text-[#E4E3E0]">Micro-Entrepreneurship Builder</h2>
        <p className="text-xs text-[#666] leading-relaxed">Generate AI-backed business plans based on your skills, local demand, and budget.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 self-start">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1A1A1A]">
            <Settings className="w-4 h-4 text-amber-500" />
            <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E4E3E0]">AI Input Variables</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#888] mb-2">Your Verified Skills</label>
              <div className="p-3 bg-[#070707] border border-[#1A1A1A] text-xs text-[#E4E3E0] font-mono">
                [Cooking, Order Mgmt, Local Area Knowledge, Basic English]
              </div>
              <p className="text-[10px] text-[#555] font-mono mt-2 uppercase tracking-wider">Auto-extracted from your profile</p>
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#888] mb-2">Target Location</label>
              <div className="p-3 bg-[#070707] border border-[#1A1A1A] text-sm flex items-center text-[#E4E3E0]">
                <MapPinIcon className="w-4 h-4 mr-3 text-amber-500" /> Andheri East, Mumbai
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#888] mb-3 flex items-center justify-between">
                Initial Budget Constraint
                <span className="text-amber-500 font-serif text-sm normal-case tracking-normal pl-2 font-bold">₹{parseInt(budget).toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="5000" 
                max="500000" 
                step="5000" 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full h-1 bg-[#1A1A1A] appearance-none cursor-pointer accent-amber-500" 
              />
              <div className="flex justify-between text-[10px] font-mono text-[#555] mt-2 uppercase tracking-wider">
                <span>₹5k</span>
                <span>₹5L</span>
              </div>
            </div>

            <button 
              onClick={generateIdea}
              disabled={isGenerating}
              className="w-full mt-6 bg-amber-500 text-black py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
            >
              {isGenerating ? "Analyzing local market..." : <><Sparkles className="w-4 h-4"/> Generate Business Plan</>}
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          {!idea ? (
            <div className="h-full bg-[#070707] border border-[#1A1A1A] border-dashed flex items-center justify-center flex-col text-center p-8 text-[#555] min-h-[400px]">
              <Lightbulb className="w-12 h-12 mb-4 text-[#333]" />
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888]">No Plan Generated</h3>
              <p className="text-xs mt-3 max-w-sm font-mono leading-relaxed">Adjust your inputs and click generate to let AI find the perfect micro-business opportunity.</p>
            </div>
          ) : (
            <div className="bg-[#0A0A0A] border border-[#1A1A1A]">
               <div className="bg-amber-500 p-8 text-black border-b border-black/10">
                 <div className="inline-block px-2 py-1 bg-black/10 border border-black/20 text-[9px] font-bold tracking-[0.2em] uppercase mb-4 shadow-sm">AI Recommendation</div>
                 <h2 className="text-3xl font-serif italic mb-3 leading-tight">{idea.title}</h2>
                 <p className="text-black/80 text-sm flex items-center gap-2 font-mono"><Target className="w-4 h-4"/> Demand: {idea.demand}</p>
               </div>
               
               <div className="p-8 space-y-10">
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666] mb-3 flex items-center gap-2"><IndianRupee className="w-3 h-3 text-amber-500" /> Est. Startup Cost</h4>
                      <p className="text-xl font-serif text-[#E4E3E0] border-b border-[#333] pb-2 inline-block object-left pl-1">{idea.cost}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#666] mb-3 flex items-center gap-2"><PieChart className="w-3 h-3 text-amber-500" /> Break-Even</h4>
                      <p className="text-xl font-serif text-amber-500 border-b border-amber-500/30 pb-2 inline-block object-left pl-1">{idea.breakeven}</p>
                    </div>
                 </div>
                 
                 <div>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E4E3E0] mb-4 flex items-center gap-2"><Wrench className="w-4 h-4 text-[#888]"/> Zero-Cost Marketing Plan</h4>
                    <ul className="space-y-3">
                      {idea.marketing.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-[#E4E3E0] font-serif bg-[#070707] p-3 border border-[#1A1A1A]">
                          <span className="text-amber-500 font-bold mt-0.5 opacity-70">•</span> {item}
                        </li>
                      ))}
                    </ul>
                 </div>
                 
                 <div className="bg-[#070707] border border-[#1A1A1A] p-5">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-amber-500 mb-4 flex items-center gap-2"><Building2 className="w-4 h-4"/> Recommended MSME & Govt Schemes</h4>
                    <div className="flex flex-wrap gap-2">
                       {idea.schemes.map((scheme: string, i: number) => (
                         <span key={i} className="bg-[#111] text-[#E4E3E0] font-mono text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 border border-[#333]">{scheme}</span>
                       ))}
                    </div>
                 </div>
                 
                 <div className="flex justify-end gap-4 pt-6 border-t border-[#1A1A1A]">
                   <button className="px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#888] hover:text-[#E4E3E0] hover:bg-[#111] bg-[#070707] border border-[#1A1A1A] transition-colors">Save to Dashboard</button>
                   <button className="px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-bold text-black bg-amber-500 hover:bg-amber-400 transition-colors shadow-sm">View Full PDF Report</button>
                 </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  )
}
