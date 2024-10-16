Book-My-Slot
A web application for managing and booking sports facilities across multiple centres. This project simplifies operations by enabling users and administrators to handle bookings for various sports and courts efficiently.

🚀 Features
Multi-Centre Support: Manage bookings across multiple centres.
Sport & Court Management: Different courts for various sports.
Booking Slots: 60-minute booking slots for customers.
Role-Based Access: Separate dashboards for operations team and customers.
🛠️ Tech Stack
Frontend: React, HTML, CSS
Backend: Node.js, Express
Database: MongoDB
Authentication: JWT-based user login
📂 Project Structure
bash
Copy code
/frontend     # React-based UI
/backend      # Node.js APIs
⚙️ Setup Instructions
Clone the repository:
bash
Copy code
git clone https://github.com/sona-123/Book-My-Slot.git
cd Book-My-Slot
Install dependencies for backend and frontend:
bash
Copy code
cd backend && npm install
cd ../frontend && npm install
Set up environment variables in .env.
Start the development servers:
bash
Copy code
npm run start:backend
npm run start:frontend
🔑 API Endpoints
View Bookings: /api/bookings
Create Booking: /api/bookings/create
