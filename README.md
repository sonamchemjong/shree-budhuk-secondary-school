# Backend for Shree Budhuk Secondary School Project

## Setup

1. Install dependencies:
\`\`\`
npm install
\`\`\`

2. Create a `.env` file in the backend directory with the following content:
\`\`\`
MONGODB_URI=your_mongodb_connection_string_here
\`\`\`

3. Start the server:
\`\`\`
npm run dev
\`\`\`

## API

- POST /api/form  
  Accepts form data with optional file upload.  
  Form fields: name, email, subject, message, file (multipart/form-data)

## Deployment

- Deploy this backend on a cloud provider like Heroku, Render, or any Node.js hosting.
- Set the environment variable MONGODB_URI on the hosting platform.
- Ensure the uploads folder is writable or use cloud storage for file uploads.

## Frontend Integration

- Update your frontend forms to submit data to the backend API endpoint `/api/form`.
- Use multipart/form-data encoding for file uploads.
