# startup-benefits-platform
startup-benefits-platform for saas frontend,backend 

A full-stack web application that provides exclusive SaaS deals for early-stage startups, founders, and indie hackers.
Some deals are public, while others are restricted and require authentication and verification.

This project focuses on clarity of flow, authentication correctness, clean architecture, and frontend–backend integration, as required in the assignment.
Tech Stack
Frontend
Next.js (App Router)

TypeScript

Tailwind CSS

Axios

Client-side state using React hooks

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication
Password is hashed using bcrypt
application flow user land on home page choose option login or register  
On registration:

User data is stored in MongoDB (users collection)

Password is hashed using bcrypt

On login:

Credentials are verified

JWT token is generated and returned

Token is stored in browser localStorage

User browses available deals

Logged-in users can:

Claim unlocked deals

Attempting to claim locked deals is restricted

Claimed deals appear in the Dashboard

Dashboard shows:

User name and email

List of claimed deals with status

Authentication is implemented using JWT

Verification status

Token is stored on the frontend in localStorage
 
