from fastapi import APIRouter
from pydantic import BaseModel
from app.services.llm_handler import call_llm
from app.services.embedding_store import query_vectorstore

router = APIRouter()

class ChatRequest(BaseModel):
    query: str
    use_context: bool = True
    custom_prompt: str | None = None

@router.post("/chat")
async def chat_with_stack(req: ChatRequest):
    context = ""
    if req.use_context:
        chunks = query_vectorstore(req.query)
        context = "\n".join(chunks)

    final_prompt = req.custom_prompt or f"Answer the question:\n{req.query}"
    if context:
        final_prompt = f"{context}\n\n{final_prompt}"

    llm_response = call_llm(final_prompt)
    return {"response": llm_response}
