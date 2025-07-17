export default function Sidebar() {
  const nodes = ['Query', 'KnowledgeBase', 'LLM', 'Output'];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-2">Toolbox</h2>
      {nodes.map((label) => (
        <div
          key={label}
          className="cursor-pointer px-4 py-2 bg-gray-100 rounded-md border hover:bg-gray-200 transition"
          draggable
          onDragStart={(e) => e.dataTransfer.setData('application/reactflow', label)}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
