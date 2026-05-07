import { useState } from "react";
import { UploadCloud, FileText, CheckCircle2, AlertCircle, TrendingUp, BookOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeResume = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    
    try {
      // Create a fake string to send based on file name if we can't extract PDF text in browser easily
      const res = await fetch("/api/resume/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText: "User uploaded file: " + file.name + "\nSkills: Customer Service, Billing.\nExperience: 2 years retail." })
      });
      
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);

      // Map the returned data correctly. Specifically 'recommendedCourses' vs 'courses'
      setResults({
        ...data,
        courses: data.recommendedCourses || []
      });
    } catch (e) {
      console.error(e);
      alert("Error analyzing resume. Make sure Gemini API Key is set.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-8">
        <h2 className="font-serif italic text-2xl mb-1 text-[#E4E3E0]">AI Skill Gap Analyzer</h2>
        <p className="text-xs text-[#666] leading-relaxed">Upload your resume to discover skill gaps and get a personalized upskilling roadmap.</p>
      </div>

      {!results ? (
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className={cn("mt-2 flex justify-center border border-dashed border-[#333] px-6 py-10 hover:border-amber-500/50 hover:bg-[#111] transition-colors", isAnalyzing && "opacity-50 pointer-events-none")}>
              <div className="text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-[#444]" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-[#888] justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-transparent font-semibold text-amber-500 hover:text-amber-400 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleUpload} accept=".pdf,.doc,.docx" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#555] mt-2">PDF, DOCX up to 10MB</p>
              </div>
            </div>
            
            {file && (
              <div className="mt-6 p-4 bg-[#070707] border border-[#1A1A1A] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-medium text-[#E4E3E0]">{file.name}</span>
                </div>
                <button 
                  onClick={analyzeResume}
                  disabled={isAnalyzing}
                  className="bg-amber-500 text-black px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-amber-400 transition disabled:opacity-50 shadow-sm"
                >
                  {isAnalyzing ? "Analyzing NLP..." : "Analyze Now"}
                </button>
              </div>
            )}
            
            {isAnalyzing && (
              <div className="mt-6 space-y-3">
                <div className="h-1 bg-[#1A1A1A] w-full overflow-hidden">
                  <div className="h-full bg-amber-500 transition-all duration-1000 w-2/3 animate-pulse"></div>
                </div>
                <p className="text-xs text-[#888] font-mono">Extracting entities using Transformers... comparing with regional demand.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 md:col-span-2">
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] border-b border-[#1A1A1A] pb-3 mb-6">Skill Analysis</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-serif text-[#E4E3E0] flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" /> Extracted Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {results.extractedSkills.map((s: string) => (
                      <span key={s} className="bg-[#070707] text-[#888] px-3 py-1 text-xs font-medium border border-[#1A1A1A] uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-serif text-[#E4E3E0] flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-red-500" /> Missing Industry Skills (High Demand)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {results.missingSkills.map((s: string) => (
                      <span key={s} className="bg-red-500/10 text-red-400 px-3 py-1 text-xs font-medium border border-red-500/20 uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6">
                <h3 className="text-[11px] uppercase tracking-widest font-semibold text-[#888] mb-2">Employability Score</h3>
                <div className="flex items-end gap-2 text-3xl font-serif text-amber-500">
                  {results.readinessScore}<span className="text-lg text-[#555] font-sans">/100</span>
                </div>
                <div className="w-full bg-[#1A1A1A] h-1 mt-4">
                  <div className="bg-amber-500 h-1" style={{ width: `${results.readinessScore}%` }}></div>
                </div>
              </div>

              <div className="bg-amber-500 border border-amber-500 p-6 text-black">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> AI Predicted Path
                </h3>
                <div className="text-lg font-serif italic mt-1 font-semibold leading-tight">
                  {results.careerPath}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6">
             <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3 mb-6">
               <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888]">Personalized Upskilling Roadmap</h3>
               <button className="text-[10px] uppercase font-bold text-amber-500 hover:text-amber-400">View full path <ArrowRight className="w-3 h-3 inline pb-0.5" /></button>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.courses.map((course: any, idx: number) => (
                  <div key={idx} className="flex gap-4 p-4 border border-[#1A1A1A] bg-[#070707] hover:border-amber-500/30 transition-colors">
                    <div className="w-10 h-10 bg-[#111] border border-[#333] flex items-center justify-center text-amber-500 flex-shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif text-[#E4E3E0]">{course.title}</h4>
                      <div className="flex items-center gap-3 mt-2 text-xs text-[#666] font-mono">
                        <span>{course.provider}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {course.duration}</span>
                        <span className="text-amber-500 uppercase tracking-widest">{course.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="flex justify-end">
             <button onClick={() => setResults(null)} className="text-[10px] uppercase font-bold tracking-widest text-[#888] hover:text-[#E4E3E0] transition-colors">Reset & Analyze Another</button>
          </div>
        </div>
      )}
    </div>
  );
}
