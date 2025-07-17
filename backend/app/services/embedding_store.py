import chromadb
from openai import OpenAI
import random
import os

chroma_client = chromadb.Client()
collection = chroma_client.get_or_create_collection("documents")

# Simulate splitting text
def split_text(text: str, chunk_size: int = 300) -> list[str]:
    return [text[i:i+chunk_size] for i in range(0, len(text), chunk_size)]

# Simulate OpenAI embeddings
def get_openai_embeddings(text_chunks: list[str]) -> list[list[float]]:
    # Fake embeddings for demo (just use index)
    return [[i] * 10 for i in range(len(text_chunks))]

# Store chunks in memory (mock vector DB)
collection = []

def store_embeddings(doc_id: str, chunks: list[str], embeddings: list[list[float]]):
    global collection
    collection = [{"chunk": chunk, "embedding": embedding} for chunk, embedding in zip(chunks, embeddings)]

# Simulate query search
def query_vectorstore(query: str, top_k: int = 3) -> list[str]:
    # Just return top K chunks from stored collection
    return [doc["chunk"] for doc in collection[:top_k]]
