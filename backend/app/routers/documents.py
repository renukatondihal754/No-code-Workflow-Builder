from fastapi import APIRouter, UploadFile, File
import os
import uuid

from app.services.text_extraction import extract_text_from_pdf
from app.services.embedding_store import split_text, get_openai_embeddings, store_embeddings
from app.models.schemas import UploadResponse

router = APIRouter()

@router.post("/upload", response_model=UploadResponse)
async def upload_document(file: UploadFile = File(...)):
    # Save temp file
    file_id = str(uuid.uuid4())
    file_path = f"temp/{file_id}_{file.filename}"
    os.makedirs("temp", exist_ok=True)
    
    with open(file_path, "wb") as f:
        f.write(await file.read())

    # Extract text
    text = extract_text_from_pdf(file_path)
    chunks = split_text(text)
    embeddings = get_openai_embeddings(chunks)

    # Store in vector DB
    store_embeddings(file_id, chunks, embeddings)

    return {"message": "Document processed successfully"}
