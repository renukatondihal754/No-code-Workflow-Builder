// src/components/Chatinterface.tsx
import { useState } from 'react';
import axios from 'axios';
import { Message } from '../utils/types';

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const send = async () => {
    try {
      const { data } = await axios.post('http://localhost:8000/chat', { query: input });

      setMessages((prev) => [
        ...prev,
        { role: 'user', text: input },
        { role: 'bot', text: data.response },
      ]);

      setInput('');
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  return (
    <div className="fixed bottom-0 left-[16.6%] w-[83.4%] bg-white border-t p-4 z-50 shadow-md">
      <div className="max-h-64 overflow-y-auto mb-3 px-4">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${m.role === 'user' ? 'bg-blue-100' : 'bg-purple-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button
          onClick={send}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
