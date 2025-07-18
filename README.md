# No-code-Workflow-Builder
A full-stack visual tool that lets users create intelligent workflows by dragging components like Query, KnowledgeBase, LLM, and Output onto a canvas. The app integrates LLMs (GPT/Gemini), vector DB (ChromaDB), and FastAPI backend with a clean React + Tailwind UI.

🧰 Technologies Used

Frontend:

1.React.js + TypeScript

2.TailwindCSS for styling

3.ReactFlow (for canvas and nodes)

4.React Router DOM v7

Backend:

FastAPI

1.PyMuPDF for PDF text extraction

2.ChromaDB as vector DB

3.OpenAI / Gemini embeddings



⚙️ Setup Instructions

1. Clone Repository

git clone https://github.com/YOUR_USERNAME/No-code-Workflow-Builder.git
cd No-code-Workflow-Builder

2. Frontend Setup

cd frontend
npm install
npm run dev

Visit: http://localhost:5173

3. Backend Setup
 **cd backend**
**pip install -r requirements.txt**
**uvicorn main:app --reload**


🧪 Workflow Description

a.On visiting the home page (/):

b.Shows "My Stacks"

c.Button: + New Stack (opens popup to name and describe)

d.On clicking + New Stack:

e.Modal opens with Name, Description inputs, and Save button

f.On Save ➝ Navigates to /chat

**In the Chat page:**

a.Sidebar (Toolbox) with 4 draggable nodes

b. Chat box fixed at bottom


