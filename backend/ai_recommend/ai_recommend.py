from fastapi import FastAPI
from sentence_transformers import SentenceTransformer, util
from pydantic import BaseModel
import uvicorn

app = FastAPI()

model = SentenceTransformer('all-MiniLM-L6-v2')

class SimilarityRequest(BaseModel):
    user_interests: list[str]
    category: list[str]
    tags: list[str]

@app.post("/recommend/club")
async def calculate_similarity(request: SimilarityRequest):
    user_interests = request.user_interests
    club_metadata = request.category + request.tags
    user_embedding = model.encode(" ".join(user_interests), convert_to_tensor=True)
    club_embedding = model.encode(" ".join(club_metadata), convert_to_tensor=True)
    similarity_score = util.cos_sim(user_embedding, club_embedding).item()
    return {"similarity_score": round(similarity_score, 2)}

if __name__ == "__main__":
    uvicorn.run("ai_recommend:app", host="0.0.0.0", port=5001, reload=True)
