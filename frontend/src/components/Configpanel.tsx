import type { Node } from 'reactflow';


interface ConfigPanelProps {
  selectedNode: Node | null;
}

export default function ConfigPanel({ selectedNode }: ConfigPanelProps) {
  return (
    <div className="w-[300px] border-l p-4 bg-white">
      {selectedNode ? (
        <div>
          <h2 className="text-lg font-bold mb-2">{selectedNode.data.label}</h2>
          {/* Render config UI */}
        </div>
      ) : (
        <p className="text-gray-500">Select a node</p>
      )}
    </div>
  );
}
