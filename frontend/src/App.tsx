// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Node } from 'reactflow';

import HomePage from './pages/index';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ConfigPanel from './components/Configpanel';
import ChatInterface from './components/Chatinterface';

export default function App() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/chat"
          element={
            <div className="flex h-screen overflow-hidden">
              {/* Sidebar */}
              <div className="w-1/6 bg-gray-100 border-r">
                <Sidebar />
              </div>

              {/* Canvas */}
              <div className="flex-1 relative">
                <Canvas setSelectedNode={setSelectedNode} />
              </div>

              {/* Config Panel */}
              <div className="w-1/4 bg-white border-l">
                <ConfigPanel selectedNode={selectedNode} />
              </div>

              {/* Chat Interface */}
              <ChatInterface />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
