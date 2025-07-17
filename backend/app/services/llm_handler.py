

import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def call_llm(prompt: str) -> str:
    return f"🤖 Mock LLM response based on prompt:\n{prompt}"