import { Home, Briefcase, FileText, Lightbulb, Menu, X, ArrowUpRight, TrendingUp } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: TrendingUp },
  { name: 'Resume AI', href: '/resume', icon: FileText },
  { name: 'Job Matcher', href: '/jobs', icon: Briefcase },
  { name: 'Micro-Business', href: '/business', icon: Lightbulb },
  { name: 'Impact (SDG 8)', href: '/impact', icon: TrendingUp },
];

export function Shell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    fetch("/api/users/profile")
      .then(r => r.json())
      .then(data => setProfile(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#E4E3E0] font-sans flex">
      {/* Mobile sidebar */}
      <div className={cn("fixed inset-0 z-50 flex lg:hidden", sidebarOpen ? "visible" : "invisible")}>
        <div className={cn("fixed inset-0 bg-[#050505]/80 transition-opacity", sidebarOpen ? "opacity-100" : "opacity-0")} onClick={() => setSidebarOpen(false)} />
        <div className={cn("relative flex w-full max-w-xs flex-1 flex-col bg-[#070707] border-r border-[#1A1A1A] pt-5 pb-4 transition duration-300 transform", sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-shrink-0 items-center px-6 gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-sm rotate-45 flex items-center justify-center flex-shrink-0">
              <div className="w-4 h-4 bg-[#050505] -rotate-45"></div>
            </div>
            <span className="font-serif text-xl italic tracking-tight font-light text-[#E4E3E0]">SkillBridge AI</span>
          </div>
          <div className="mt-6 h-0 flex-1 overflow-y-auto">
            <nav className="space-y-2 px-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      isActive ? 'text-white border-l-2 border-amber-500 bg-[#0A0A0A]' : 'text-[#888] hover:text-[#E4E3E0]',
                      'group flex items-center rounded-r-md px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors'
                    )}
                  >
                    <item.icon
                      className={cn(isActive ? 'text-amber-500' : 'text-[#444] group-hover:text-amber-500', 'mr-3 h-4 w-4 flex-shrink-0')}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-[#1A1A1A] lg:bg-[#070707] lg:pt-5 lg:pb-4">
        <div className="flex flex-shrink-0 items-center px-6 gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded-sm rotate-45 flex items-center justify-center flex-shrink-0">
            <div className="w-4 h-4 bg-[#050505] -rotate-45"></div>
          </div>
          <span className="font-serif text-xl italic tracking-tight font-light text-[#E4E3E0]">SkillBridge AI</span>
        </div>
        <div className="mt-6 flex h-0 flex-1 flex-col overflow-y-auto px-4">
          <nav className="flex-1 space-y-2 bg-[#070707]">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    isActive ? 'text-white border-l-2 border-amber-500 bg-[#0A0A0A]' : 'text-[#888] hover:text-[#E4E3E0]',
                    'group flex items-center rounded-r-md px-3 py-2 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors'
                  )}
                >
                  <item.icon
                    className={cn(isActive ? 'text-amber-500' : 'text-[#444] group-hover:text-amber-500', 'mr-3 h-4 w-4 flex-shrink-0')}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto px-4 pb-4">
             <div className="bg-amber-500 border border-amber-500 p-4 text-black hover:scale-[1.02] transition-transform cursor-pointer">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mb-2 flex items-center justify-between">Blockchain ID <ArrowUpRight className="w-3 h-3" /></h4>
                <div className="w-full h-10 bg-black/10 border border-black/20 flex flex-col items-center justify-center mb-4 text-center">
                   <div className="text-[9px] uppercase font-bold opacity-60 tracking-wider">Receipt</div>
                   <div className="text-black font-mono text-xs opacity-80 mt-0.5">{profile ? profile.blockChainId : '...'}</div>
                </div>
                <button className="w-full py-2 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold shadow-sm hover:bg-black/90 transition-colors">
                  Generate Passport
                </button>
             </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-[#080808] border-b border-[#1A1A1A]">
          <button
            type="button"
            className="border-r border-[#1A1A1A] px-4 text-[#888] hover:text-white focus:outline-none lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-8">
            <div className="flex flex-1 items-center">
               <h1 className="text-[11px] uppercase tracking-[0.2em] font-bold text-amber-500 ml-2 hidden sm:block">Economic Mobility Engine</h1>
            </div>
            <div className="flex items-center gap-4">
               <div className="text-right hidden sm:block">
                  <div className="text-xs font-semibold text-[#E4E3E0]">{profile ? profile.name : '...'}</div>
                  <div className="text-[10px] text-amber-500/80 uppercase tracking-widest mt-0.5">Job Readiness: {profile ? profile.readinessScore : '--'}%</div>
               </div>
               <div className="w-10 h-10 rounded-full border border-[#333] bg-[#111] flex items-center justify-center text-[#888] font-bold text-xs shadow-sm uppercase">
                 {profile ? profile.name.substring(0,2) : '..'}
               </div>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
