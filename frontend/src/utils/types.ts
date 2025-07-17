// React Flow Node Types
import { Node } from 'reactflow';

export type ComponentType = 'User Query' | 'KnowledgeBase' | 'LLM Engine' | 'Output';

export interface CustomNodeData {
  label: string;
  type: ComponentType;
  config?: Record<string, any>;
}

// Used for passing into ConfigPanel
export interface CustomNode extends Node<CustomNodeData> {}

// Chat Message Type
export interface Message {
  role: 'user' | 'bot';
  text: string;
}
