import { useSelector } from "react-redux";
import "./MovieDetails.css";
import { Link } from "react-router-dom";

const MovieDetail = ()=>{
const movies = useSelector((state)=>state.movie.items);
const movieDetails = movies.map((items)=>{
return ( items={
   movie : items.movie,
   price : items.price,
   seats : items.seats,
   seatNo: items.seatNo
})
})
console.log(movieDetails[0]);

return(
   <div className="container">
   <div>
<p>You have booked Ticket for : {movieDetails[0].movie}</p>
   </div>
   <div>
      <p>
         Ticket price is : {movieDetails[0].price}
      </p>
   </div>
   <div>
      <p>
        Booking {movieDetails[0].seats} seats , seat No's are {movieDetails[0].seatNo.join(", ")}
      </p>
   </div>
   <div>
      <p>
         Total Bill is : {movieDetails[0].price * movieDetails[0].seats}
      </p>
   </div>
   <div>
      <Link to="/endPage"><button>Book Ticket</button></Link>
   </div>
   </div>
)
}

export default MovieDetail;