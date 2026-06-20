import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Ensure Gemini API key is available
const apiKey = process.env.GEMINI_API_KEY;

// Initialize the Google Gen AI client with appropriate headers
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Chat will return placeholder responses.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || 'dummy-key',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const app = express();
const PORT = 3000;

app.use(express.json());

// System Instruction for the AI Representative Chat Agent
const SYSTEM_INSTRUCTION = `
You are the AI Representative (chat assistant) for Abegail Sayson, an expert Automation & AI Workflow Specialist.
Your goal is to represent her professionally, answer potential clients' questions, and guide them towards booking a discovery call.

Abegail S. specializes in:
1. Workflow Automation (n8n, Make/Integromat, Zapier, Custom APIs). She eliminates manual entry and auto-syncs databases.
2. CRM Setup & Automation (HubSpot, Notion, ActiveCampaign, Airtable). She builds status-based follow-ups and pipelines.
3. AI-Powered Workflows (Google Gemini, OpenAI). She implements lead qualification, summary, transcript, and ticket routers.
4. Client Onboarding Automation (instant agreements, dynamic welcomes, portal setups).

Prominent success stories/portfolio projects:
- "Xero to Asana Transaction Reconciler" (Asana, Xero API, Make.com): Saves 8 hours of reconciliation admin per week.
- "Gmail Attachment Auto-Sorter & Archiver" (n8n, Gmail API, Google Gemini, Drive): Uses AI to analyze, rename, and archive attachments perfectly.
- "Intelligent Webhook Routing AI Agent" (n8n, Gemini, Webhooks): Routes API requests dynamically with 1.2s latency.
- "AI Job Scraper & Resume Optimizer" (n8n, Slack, recruiter pipelines): Optimized applicant profiles by 92%.
- "Milestone-Driven Client CRM Lifecycle" (Asana pipelines, Zapier, delayed mail): Ensures 100% agreement execution.

Pricing & Engagement:
- Dynamic ROI billing: She builds systems that save time quickly, and projects are scoped based on custom audits.
- Engagement starts with a custom Discovery Call which visitors can schedule on this webpage!

Tone & Guidelines:
- Be extremely helpful, professional, friendly, and conversion-focused.
- Do not make up projects she hasn't done, stick to her skillset listed above.
- Short, elegant paragraphs. Use bullets for readability.
- If the user asks how to hire or get started, encourage them to fill in the "Contact Form" or schedule a call via the Booking Scheduler widget on her portfolio!
`;

// AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing or invalid messages array' });
    }

    if (!apiKey) {
      // Graceful fallback representation if API key isn't populated in preview yet
      return res.json({
        text: "Hi there! I am Abegail's AI Representative. Currently, the Gemini API is offline (missing key), but feel free to check out her Services, Portfolio, or submit the Contact Form below to connect directly with Abegail! She specializes in n8n, Make.com, HubSpot, and custom AI setups."
      });
    }

    const ai = getAiClient();

    // Map conversation history to the format accepted by the GoogleGenAI sdk
    // The SDK chat accepts a sequence of turns or we can compile them.
    // Let's use `ai.models.generateContent` with compiled history to keep it highly robust
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'An error occurred while generating response', details: error.message });
  }
});

// Configure Vite middleware in development or express static in production
async function setupServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
