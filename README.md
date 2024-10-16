
# Book-My-Slot

A web application to efficiently manage sports bookings across multiple centres. It offers an intuitive platform for operations teams and customers to schedule court bookings, ensuring seamless management of facilities.

## 🚀 Features
- **Multi-Centre Support**: Manage bookings across multiple locations.
- **Sports & Courts**: Handle multiple sports and courts per centre.
- **Booking Slots**: 60-minute slots for customer reservations.
- **Role-Based Access**: Separate views for operations teams and customers.
- **User-Friendly Interface**: Responsive design with easy navigation.

## 🛠️ Tech Stack
- **Frontend**: React, HTML, CSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Authentication**: JWT-based user login

## 📂 Project Structure
```
Book-My-Slot/
│
├── frontend/       # React-based UI  
├── backend/        # Node.js APIs  
└── README.md       # Project documentation
```

## ⚙️ Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/sona-123/Book-My-Slot.git
   cd Book-My-Slot
   ```

2. **Install dependencies**:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Set up environment variables**:  
   Create a `.env` file in the `backend` folder with the following variables:
   ```
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. **Start the servers**:
   - Backend:
     ```bash
     cd backend
     npm start
     ```
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```

5. **Access the app**:  
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 API Endpoints
- **View Bookings**  
  `GET /api/bookings` – Retrieve bookings by centre, sport, and date.

- **Create Booking**  
  `POST /api/bookings/create` – Add a new booking (ensuring no conflicts).

## 📝 Usage Instructions
1. **Operations Team**:
   - Log in to view and manage bookings for all courts in a centre.
   - Create new bookings by selecting sport, court, and time slots.

2. **Customers**:
   - Register or sign in to book available courts.
   - View booking status and upcoming reservations.

## 🛡️ Error Handling
- **Double Booking Prevention**: No overlapping bookings allowed for the same court and time slot.
- **Validation**: All fields are validated before submission.

## 📋 Future Enhancements
- Add **notifications** for confirmed bookings.
- Implement **payment gateway integration** for customer bookings.
- Enhance **analytics** for booking trends.

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🤝 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## 📧 Contact
For inquiries, reach out via [email@example.com](mailto:email@example.com).
