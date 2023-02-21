import Seat from "./Seat";
import "./Seat.css";

const GenerateSeats = (seatNumbers) =>{
return(
   <div className="row">
   {
      seatNumbers.map((seatNumbers)=>{
         return <Seat seatNo = {seatNumbers} 
         key={seatNumbers} />
      })
   }
   </div>
)
}


const SeatMatrix = ()=>{
return(
   <div className="main-container">
      <p className="screen"></p>
      <div className = "container movie-layout">
       <div className = "movie-column-1">
       {GenerateSeats([1,2,3,4])}
					{GenerateSeats([5,6,7,8])}
					{GenerateSeats([9,10,11,12])}
       </div>
       <div className = "movie-column-2">
       {GenerateSeats([13, 14, 15, 16])}
					{GenerateSeats([17,18, 19, 20,])}
					{GenerateSeats([ 21, 22,23, 24,])}
       </div>
       <div className = "movie-column-3">
       {GenerateSeats([25, 26, 27, 28,])}
					{GenerateSeats([ 29, 30, 31, 32])}
					{GenerateSeats([33,34,35,36])}
       </div>
       <div className = "movie-column-4">
       {GenerateSeats([37,38,39,40])}
				  {GenerateSeats([41,42,43,44])}
				  {GenerateSeats([45,46,47,48])}
       </div>
       <div className = "movie-column-5">
       {GenerateSeats([49,50,51,52])}
					{GenerateSeats([53,54,55,56])}
				  {GenerateSeats([57,58,59,60])}
       </div>
       <div className = "movie-column-6">
       {GenerateSeats([61,62,63,64])}
					{GenerateSeats([65,66,67,68])}
				  {GenerateSeats([69,70,71,72])}
       </div>
      </div>
   </div>
)
}

export default SeatMatrix;