// src/utils/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

export const uploadDocument = (formData: FormData) =>
  API.post('/upload', formData);

export const runWorkflow = (workflowConfig: any) =>
  API.post('/workflow/run', workflowConfig);

export const chatWithStack = (query: string) =>
  API.post('/chat', { query });
