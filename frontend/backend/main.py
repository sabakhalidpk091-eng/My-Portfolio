import os
import uuid
from typing import List, Optional, Union
from fastapi import FastAPI, Header, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

app = FastAPI(
    title="Portfolio Backend API",
    description="Secure FastAPI backend supporting user contact responses and administrative project tracking via Supabase."
)

# Setup CORS to allow React frontend (default http://localhost:5173, but we allow all origins for local ease)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB Schema validation models
class ProjectSchema(BaseModel):
    title: str
    description: str
    image_url: str
    github_link: Optional[str] = ""
    demo_link: Optional[str] = ""
    tech_stack: Union[List[str], str]

class ContactSchema(BaseModel):
    name: str
    email: str
    message: str

class LoginRequest(BaseModel):
    password: str

# Config loaded from ENVIRONMENT
SUPABASE_URL = os.environ.get("SUPABASE_URL", "your_url_here")
SUPABASE_PUBLISHABLE_KEY = os.environ.get("SUPABASE_PUBLISHABLE_KEY", "your_publishable_key_here")
SUPABASE_SECRET_KEY = os.environ.get("SUPABASE_SECRET_KEY", "your_secret_key_here")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")

# Simple, reliable administrative token format
ADMIN_TOKEN = f"admin-token-{ADMIN_PASSWORD}"

is_mock_mode = False
supabase_client = None

# Safety check for placeholder URL configurations to avoid standard HTTP exceptions
if SUPABASE_URL == "your_url_here" or not SUPABASE_URL.startswith("http"):
    print("Warning: SUPABASE_URL is unconfigured. Launching Backend in fallback Mock Mode.")
    is_mock_mode = True
else:
    try:
        # Secret Key (Service Role) is ideal for secure backend database alterations bypassing standard RLS policies
        key = SUPABASE_SECRET_KEY if SUPABASE_SECRET_KEY != "your_secret_key_here" else SUPABASE_PUBLISHABLE_KEY
        if key == "your_publishable_key_here" or not key:
            print("Warning: Supabase keys are missing. Lauching Backend in fallback Mock Mode.")
            is_mock_mode = True
        else:
            supabase_client = create_client(SUPABASE_URL, key)
            print("Supabase client successfully initialized.")
    except Exception as e:
        print(f"Error initializing Supabase client: {e}. Defaulting to Mock Mode.")
        is_mock_mode = True

# In-memory datasets if database service is unavailable/unconfigured
mock_projects = [
    {
        "id": "1",
        "title": "Creative Portfolio",
        "description": "A high-performance modern developer portfolio with fluid layout and 3D interactions.",
        "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "github_link": "https://github.com",
        "demo_link": "https://example.com",
        "tech_stack": ["React", "Vite", "Tailwind CSS", "FastAPI", "Supabase"],
        "created_at": "2026-07-01T08:00:00Z"
    },
    {
        "id": "2",
        "title": "Decentralized Finance Portal",
        "description": "Real-time cryptocurrency tracking dashboard with Web3 transaction flow visualization.",
        "image_url": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
        "github_link": "https://github.com",
        "demo_link": "https://example.com",
        "tech_stack": ["Next.js", "Tailwind CSS", "Ethers.js", "Solidity"],
        "created_at": "2026-06-30T10:00:00Z"
    },
    {
        "id": "3",
        "title": "AI Code Companion",
        "description": "VS Code AI extension providing smart code autocompletions and live testing tools.",
        "image_url": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
        "github_link": "https://github.com",
        "demo_link": "https://example.com",
        "tech_stack": ["TypeScript", "Node.js", "OpenAI API", "Docker"],
        "created_at": "2026-06-29T15:00:00Z"
    }
]

mock_contacts = []

# Dependency to check custom API authentication token
def verify_token(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header is required.")
    
    token = authorization
    if authorization.startswith("Bearer "):
        token = authorization.split(" ")[1]
        
    if token != ADMIN_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid administrative access token.")
    return token

@app.get("/api/projects")
def get_projects():
    if is_mock_mode:
        return mock_projects
    try:
        response = supabase_client.table("projects").select("*").execute()
        # Parse arrays/strings consistently for consumption by Frontend
        return response.data
    except Exception as e:
        print(f"Supabase Database fetch command failed: {e}. Providing Mock Data details.")
        return mock_projects

@app.post("/api/contact")
def save_contact(data: ContactSchema):
    if is_mock_mode:
        new_msg = {
            "id": str(uuid.uuid4()),
            "name": data.name,
            "email": data.email,
            "message": data.message,
            "created_at": "now"
        }
        mock_contacts.append(new_msg)
        return {"status": "success", "message": "Response cached inside local memory (Mock Mode)."}
    try:
        response = supabase_client.table("contact_messages").insert({
            "name": data.name,
            "email": data.email,
            "message": data.message
        }).execute()
        return {"status": "success", "data": response.data}
    except Exception as e:
        print(f"Supabase Contact storage command failed: {e}.")
        fallback_msg = {
            "id": str(uuid.uuid4()),
            "name": data.name,
            "email": data.email,
            "message": data.message,
            "created_at": "now"
        }
        mock_contacts.append(fallback_msg)
        return {"status": "success", "message": "Saved to fallback memory (DB connection unavailable)", "error": str(e)}

@app.post("/api/admin/login")
def admin_login(req: LoginRequest):
    if req.password == ADMIN_PASSWORD:
        return {"token": ADMIN_TOKEN}
    else:
        raise HTTPException(status_code=401, detail="Incorrect administration password setup.")

@app.get("/api/admin/projects")
def admin_get_projects(token: str = Depends(verify_token)):
    if is_mock_mode:
        return mock_projects
    try:
        response = supabase_client.table("projects").select("*").execute()
        return response.data
    except Exception as e:
        print(f"Supabase Admin Fetch failed: {e}.")
        return mock_projects

@app.post("/api/admin/projects")
def admin_create_project(project: ProjectSchema, token: str = Depends(verify_token)):
    tech_stack_val = project.tech_stack
    
    if is_mock_mode:
        new_proj = {
            "id": str(uuid.uuid4()),
            "title": project.title,
            "description": project.description,
            "image_url": project.image_url,
            "github_link": project.github_link or "",
            "demo_link": project.demo_link or "",
            "tech_stack": tech_stack_val,
            "created_at": "now"
        }
        mock_projects.insert(0, new_proj)
        return new_proj
        
    try:
        payload = {
            "title": project.title,
            "description": project.description,
            "image_url": project.image_url,
            "github_link": project.github_link or "",
            "demo_link": project.demo_link or "",
            "tech_stack": tech_stack_val
        }
        response = supabase_client.table("projects").insert(payload).execute()
        if response.data and len(response.data) > 0:
            return response.data[0]
        return response.data
    except Exception as e:
        print(f"Supabase DB insert error: {e}. Retrying with stringified tech_stack representation...")
        try:
            if isinstance(tech_stack_val, list):
                tech_stack_str = ", ".join(tech_stack_val)
            else:
                tech_stack_str = str(tech_stack_val)
            payload = {
                "title": project.title,
                "description": project.description,
                "image_url": project.image_url,
                "github_link": project.github_link or "",
                "demo_link": project.demo_link or "",
                "tech_stack": tech_stack_str
            }
            response = supabase_client.table("projects").insert(payload).execute()
            if response.data and len(response.data) > 0:
                return response.data[0]
            return response.data
        except Exception as inner_e:
            print(f"Fallback insert failed: {inner_e}. Caching in memory.")
            fallback_proj = {
                "id": str(uuid.uuid4()),
                "title": project.title,
                "description": project.description,
                "image_url": project.image_url,
                "github_link": project.github_link or "",
                "demo_link": project.demo_link or "",
                "tech_stack": tech_stack_val,
                "created_at": "now"
            }
            mock_projects.insert(0, fallback_proj)
            return fallback_proj

@app.put("/api/admin/projects/{id}")
def admin_update_project(id: str, project: ProjectSchema, token: str = Depends(verify_token)):
    tech_stack_val = project.tech_stack
    
    if is_mock_mode or (not id.isdigit() and len(id) > 5):
        for index, proj in enumerate(mock_projects):
            if str(proj["id"]) == str(id):
                mock_projects[index] = {
                    "id": id,
                    "title": project.title,
                    "description": project.description,
                    "image_url": project.image_url,
                    "github_link": project.github_link or "",
                    "demo_link": project.demo_link or "",
                    "tech_stack": tech_stack_val,
                    "created_at": proj.get("created_at", "now")
                }
                return mock_projects[index]
        raise HTTPException(status_code=404, detail="Specified project reference not found in Mock dataset.")

    try:
        query_id = int(id) if id.isdigit() else id
        payload = {
            "title": project.title,
            "description": project.description,
            "image_url": project.image_url,
            "github_link": project.github_link or "",
            "demo_link": project.demo_link or "",
            "tech_stack": tech_stack_val
        }
        response = supabase_client.table("projects").update(payload).eq("id", query_id).execute()
        if response.data and len(response.data) > 0:
            return response.data[0]
        return response.data
    except Exception as e:
        print(f"Supabase DB edit error: {e}. Retrying with stringified tech_stack representation...")
        try:
            if isinstance(tech_stack_val, list):
                tech_stack_str = ", ".join(tech_stack_val)
            else:
                tech_stack_str = str(tech_stack_val)
            payload = {
                "title": project.title,
                "description": project.description,
                "image_url": project.image_url,
                "github_link": project.github_link or "",
                "demo_link": project.demo_link or "",
                "tech_stack": tech_stack_str
            }
            query_id = int(id) if id.isdigit() else id
            response = supabase_client.table("projects").update(payload).eq("id", query_id).execute()
            if response.data and len(response.data) > 0:
                return response.data[0]
            return response.data
        except Exception as inner_e:
            print(f"Fallback update failed: {inner_e}.")
            # Search memory fallback
            for index, proj in enumerate(mock_projects):
                if str(proj["id"]) == str(id):
                    mock_projects[index] = {
                        "id": id,
                        "title": project.title,
                        "description": project.description,
                        "image_url": project.image_url,
                        "github_link": project.github_link or "",
                        "demo_link": project.demo_link or "",
                        "tech_stack": tech_stack_val,
                        "created_at": proj.get("created_at", "now")
                    }
                    return mock_projects[index]
            raise HTTPException(status_code=404, detail=f"Database update failed: {inner_e}")

@app.delete("/api/admin/projects/{id}")
def admin_delete_project(id: str, token: str = Depends(verify_token)):
    if is_mock_mode or (not id.isdigit() and len(id) > 5):
        for index, proj in enumerate(mock_projects):
            if str(proj["id"]) == str(id):
                mock_projects.pop(index)
                return {"status": "success", "message": "Project removed from memory storage (Mock Mode)"}
        raise HTTPException(status_code=404, detail="Specified project reference not found in Mock dataset.")
        
    try:
        query_id = int(id) if id.isdigit() else id
        response = supabase_client.table("projects").delete().eq("id", query_id).execute()
        return {"status": "success", "data": response.data}
    except Exception as e:
        print(f"Supabase DB delete error: {e}. Searching fallback memory...")
        for index, proj in enumerate(mock_projects):
            if str(proj["id"]) == str(id):
                mock_projects.pop(index)
                return {"status": "success", "message": "Project removed from memory fallback."}
        raise HTTPException(status_code=404, detail=f"Database delete operation failed: {e}")
