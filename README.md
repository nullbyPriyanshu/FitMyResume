# SnapLink - Backend Starter (prepared)

This repository was prepared using the files you uploaded and augmented with controllers,
routes, services, Dockerfile, and examples so you can run it immediately.

Quick start:
1. Copy `.env.example` -> `.env` and set DATABASE_URL (or use docker-compose).
2. Install dependencies: `npm install`
3. Start DB & Adminer (optional): `npm run docker:up`
4. Run dev: `npm run dev` (per your package.json using `node --watch app`)

Endpoints:
- POST /api/users       -> create user
- GET  /api/users       -> list users
- GET  /api/users/:id   -> get user by id

Notes:
- Passwords are hashed with bcrypt.
- Drizzle ORM is used (your drizzle config kept).
- If you use drizzle-kit, run `npm run db:generate` as in package.json.
# project_start
