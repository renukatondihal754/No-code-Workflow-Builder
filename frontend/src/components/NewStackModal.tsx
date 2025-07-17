import React from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, description: string) => void;
}

export default function NewStackModal({ isOpen, onClose, onSave }: Props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Create New Stack</h2>

        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter stack name"
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a short description"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-600">Cancel</button>
          <button
            onClick={() => {
              onSave(name, description);
              setName('');
              setDescription('');
              onClose();
            }}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
