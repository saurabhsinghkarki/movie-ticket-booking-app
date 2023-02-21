import React, { useState } from "react";

function MovieTicketBooking() {
   const [selectedSeats, setSelectedSeats] = useState([]);
   const [userDetails, setUserDetails] = useState({});

   const handleSeatSelection = (seat) => {
      if (!selectedSeats.includes(seat)) {
         setSelectedSeats([...selectedSeats, seat]);
      } else {
         setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      }
   };

   const handleBooking = () => {
      if (selectedSeats.length === 0) {
         alert("Please select a seat");
         return;
      }

      if (!userDetails.name || !userDetails.email) {
         alert("Please enter your name and email");
         return;
      }

      alert(`Thank you ${userDetails.name}! Your booking is confirmed. Seats: ${selectedSeats.join(", ")}`);
   };

   return (
      <div>
         <h1>Movie Ticket Booking</h1>
         <div>
            <h2>Seats:</h2>
            <div>
               <button onClick={() => handleSeatSelection("A1")}>A1</button>
               <button onClick={() => handleSeatSelection("A2")}>A2</button>
               <button onClick={() => handleSeatSelection("A3")}>A3</button>
            </div>
            <div>
               Selected Seats: {selectedSeats.join(", ")}
            </div>
         </div>
         <div>
            <h2>Your Details:</h2>
            <div>
               <input
                  type="text"
                  placeholder="Name"
                  value={userDetails.name || ""}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
               />
            </div>
            <div>
               <input
                  type="email"
                  placeholder="Email"
                  value={userDetails.email || ""}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
               />
            </div>
            <button onClick={handleBooking}>Book</button>
         </div>
      </div>
   );
}

export default MovieTicketBooking;