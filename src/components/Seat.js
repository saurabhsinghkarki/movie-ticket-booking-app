import "./Seat.css";
import {  useDispatch } from "react-redux";
import { useState } from "react";
import { movieActions } from "../store/store";

const Seat = (props)=>{

const dispatch = useDispatch();


const [selectedSeat , setSelectedSeat] = useState([]);
const [seatStatus , setSeatStatus] = useState("seat-red");
const seatNumber = props.seatNo;
const selectedSeats = selectedSeat.length + 1;
const disSelectSeat =  1;

const seatClickHandler = (event ,seatNumber)=>{
event.stopPropagation();


   if (!selectedSeat.includes(seatNumber)) {
      setSelectedSeat([...selectedSeat, seatNumber]);
      setSeatStatus("seat-green");
     dispatch(movieActions.addSelectedSeats(selectedSeats));
     dispatch(movieActions.seatNos(props.seatNo));

   } else {
      setSelectedSeat(selectedSeat.filter((s) => s !== seatNumber));
      setSeatStatus("seat-red");
     dispatch(movieActions.disSelectSeat(disSelectSeat));
   }

}
return(
   <div className="col-md-2">  
   <div className={`seat seat-${seatNumber} ${seatStatus}`} 
    onClick={(e) => seatClickHandler(e,seatNumber)}>
      {seatNumber}
   </div>
   </div>
)
}

export default Seat;