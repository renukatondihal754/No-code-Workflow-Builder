// src/pages/chat.tsx
import Sidebar from '../components/Sidebar';
import ChatInterface from '../components/Chatinterface';

export default function ChatPage() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-100 border-r p-4">
        <Sidebar />
      </div>

      {/* Chat Interface Only */}
      <div className="flex-1 flex flex-col justify-start relative">
        <ChatInterface />
      </div>
    </div>
  );
}
