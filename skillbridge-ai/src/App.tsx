import { Routes, Route } from "react-router-dom";
import { Shell } from "./components/layout/Shell";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { ResumeAnalyzer } from "./pages/ResumeAnalyzer";
import { JobMatcher } from "./pages/JobMatcher";
import { BusinessBuilder } from "./pages/BusinessBuilder";
import { Impact } from "./pages/Impact";

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/jobs" element={<JobMatcher />} />
        <Route path="/business" element={<BusinessBuilder />} />
        <Route path="/impact" element={<Impact />} />
      </Route>
    </Routes>
  );
}
