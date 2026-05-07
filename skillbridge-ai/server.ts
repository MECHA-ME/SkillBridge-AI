import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON
  app.use(express.json());

  // === Core API Services ===

  // 1. User Service
  app.get("/api/users/profile", (req, res) => {
    // Mock user profile as it would come from Postgres
    res.json({
      id: "usr_1",
      name: "Aisha K.",
      role: "Job Seeker",
      readinessScore: 85,
      skills: ["Retail Sales", "Customer Service", "Basic Math"],
      blockChainId: "0x7a2...fE92"
    });
  });

  // 2. Resume Parser (NLP via Gemini)
  app.post("/api/resume/parse", async (req, res) => {
    try {
      const { resumeText } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
      
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Extract skills, career readiness score (1-100), missing skills in the local market, and a suggested career path from the following resume text:\n\n${resumeText}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              extractedSkills: { type: Type.ARRAY, items: { type: Type.STRING } },
              missingSkills: { type: Type.ARRAY, items: { type: Type.STRING } },
              readinessScore: { type: Type.INTEGER },
              careerPath: { type: Type.STRING },
              recommendedCourses: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    provider: { type: Type.STRING },
                    duration: { type: Type.STRING },
                    type: { type: Type.STRING }
                  }
                }
              }
            },
            required: ["extractedSkills", "missingSkills", "readinessScore", "careerPath", "recommendedCourses"]
          }
        }
      });
      
      const text = response.text();
      res.json(JSON.parse(text));
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });

  // 3. Job Engine
  app.get("/api/jobs/match", (req, res) => {
    // Simulated matches from PostgreSQL
    res.json([
      { id: 1, title: "Store Operations Assistant", company: "Local Mart", location: "Andheri East, 1.2km", matchScore: 92, type: "Full-time", salary: "₹18k-22k", verified: true },
      { id: 2, title: "Inventory Clerk", company: "Sharma Logistics", location: "Marol, 3km", matchScore: 85, type: "Contract", salary: "₹15k-18k", verified: false },
      { id: 3, title: "Customer Support (Voice)", company: "TechServe BPO", location: "Powai, 4.5km", matchScore: 78, type: "Full-time", salary: "₹20k-25k", verified: true },
    ]);
  });

  // 4. Business Engine (AI Generator)
  app.post("/api/business/generate", async (req, res) => {
    try {
      const { budget, skills, location } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
      
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Create a micro-business plan for someone with skills: ${skills.join(", ")} in ${location} with a max budget of ₹${budget}. Focus on quick break-even and zero-to-low cost marketing. Demand must be 'High', 'Medium', or 'Low'.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Name of the business idea" },
              demand: { type: Type.STRING, description: "Demand level, e.g., 'High (Local Area)'" },
              cost: { type: Type.STRING, description: "Estimated cost, e.g., '₹X,000'" },
              breakeven: { type: Type.STRING, description: "Time to break even, e.g., '1-2 months'" },
              marketing: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Zero-cost marketing steps" },
              schemes: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Relevant Govt/MSME schemes" }
            },
            required: ["title", "demand", "cost", "breakeven", "marketing", "schemes"]
          }
        }
      });
      
      const text = response.text();
      res.json(JSON.parse(text));
    } catch (e: any) {
      console.error(e);
      res.status(500).json({ error: e.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
