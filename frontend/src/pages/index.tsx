import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewStackModal from '../components/NewStackModal';

export default function HomePage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSave = (name: string, description: string) => {
    console.log("Saved stack:", { name, description });
    navigate('/chat'); // Redirect to canvas
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">My Stacks</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
        >
          + New Stack
        </button>
      </div>

      <NewStackModal isOpen={showModal} onClose={() => setShowModal(false)} onSave={handleSave} />

      {/* Below: Dummy Stacks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white border p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Chat with AI</h3>
          <p className="text-sm text-gray-600 mb-4">Run your stack in an AI chat interface</p>
          <button
            onClick={() => navigate('/chat')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
          >
            Edit Stack
          </button>
        </div>

        {/* Add more dummy cards here if needed */}
      </div>
    </div>
  );
}
