import { ArrowRight, Briefcase, TrendingUp, Award, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from "react";

const data = [
  { name: 'Jan', skills: 2, income: 12000 },
  { name: 'Feb', skills: 3, income: 12000 },
  { name: 'Mar', skills: 3, income: 15400 },
  { name: 'Apr', skills: 5, income: 15400 },
  { name: 'May', skills: 6, income: 18500 },
  { name: 'Jun', skills: 8, income: 24000 },
];

export function Dashboard() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("/api/users/profile")
      .then(r => r.json())
      .then(data => setProfile(data))
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-serif italic text-2xl mb-1 text-[#E4E3E0]">Welcome back, {profile ? profile.name.split(' ')[0] : '...'}</h2>
          <p className="text-xs text-[#666] leading-relaxed">Real-time analysis of your career trajectory and local market demand.</p>
        </div>
        <div className="inline-flex items-center gap-2 border border-amber-500/30 text-amber-500 px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest bg-[#0A0A0A]">
          <TrendingUp className="w-3 h-3" />
          Growth Trajectory: High
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Job Readiness" value={`${profile ? profile.readinessScore : '--'}%`} icon={Briefcase} trend="+12% from last month" />
        <MetricCard title="Verified Skills" value={profile ? profile.skills.length : '--'} icon={Award} trend="Blockchain verified" />
        <MetricCard title="Est. Monthly Income" value="₹24,000" icon={DollarSign} trend="Gig & Freelance" />
        <MetricCard title="Credit Readiness" value="Good" icon={TrendingUp} trend="Eligible for Mudra Loan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#0A0A0A] border border-[#1A1A1A] p-6">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-6">Skill vs. Income Trajectory</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 11}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 11}} />
                <Tooltip contentStyle={{ border: '1px solid #1A1A1A', backgroundColor: '#070707', color: '#E4E3E0' }} itemStyle={{ color: '#f59e0b' }} />
                <Area type="monotone" dataKey="income" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-6 flex flex-col">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-6">AI Recommendations</h3>
          <div className="space-y-4 flex-1">
            <ActionItem 
              title="New hyper-local job match" 
              desc="Delivery Partner at local MSME. 2km away."
              link="/jobs"
            />
            <ActionItem 
              title="Missing Skill Detected" 
              desc="Learn 'Inventory Management' to increase matching by 40%."
              link="/resume"
            />
             <ActionItem 
              title="Business Opportunity" 
              desc="High demand for 'Tiffin Services' in your area."
              link="/business"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, trend }: any) {
  return (
    <div className="bg-[#0A0A0A] border border-[#1A1A1A] p-5 flex flex-col hover:border-amber-500/30 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 border border-[#1A1A1A] bg-[#070707]">
          <Icon className="w-4 h-4 text-amber-500" />
        </div>
        <h3 className="text-[10px] uppercase tracking-widest font-semibold text-[#888]">{title}</h3>
      </div>
      <div className="text-2xl font-serif italic text-white">{value}</div>
      <p className="text-xs text-[#555] mt-2 font-mono">{trend}</p>
    </div>
  )
}

function ActionItem({ title, desc, link }: any) {
  return (
    <div className="group block relative p-4 border border-[#1A1A1A] bg-[#070707] hover:border-amber-500/50 hover:bg-[#1A1A1A]/30 transition-colors">
      <h4 className="text-sm font-semibold text-[#E4E3E0] group-hover:text-amber-500 transition-colors">{title}</h4>
      <p className="text-xs text-[#888] mt-1 mb-3 leading-relaxed">{desc}</p>
      <Link to={link} className="inline-flex items-center text-[10px] uppercase font-bold text-amber-500 hover:text-amber-400">
        Review Module <ArrowRight className="w-3 h-3 ml-1" />
      </Link>
    </div>
  )
}
