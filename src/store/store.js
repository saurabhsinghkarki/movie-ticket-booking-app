import { configureStore , createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
name:"movie",
initialState:{items:[{
	id: "",
	movie: "",
	price: 0,
	seats: 0,
	seatNo: []}
]},
reducers:{
	addedMovie(state , action){
		state.items.unshift(action.payload)
	},
	addSelectedSeats(state , action){
		state.items.map((items)=>{
      return (items.seats += action.payload)
		})
	},
	disSelectSeat(state , action){
      state.items.map((items)=>{
			return (items.seats -= action.payload)
			})
	},
	seatNos(state , action){
		state.items.map((items)=>{
			return (items.seatNo.push(action.payload))
			})
	}
}
})


const store = configureStore({
	reducer:{
		movie:movieSlice.reducer
	}
});

export const movieActions = movieSlice.actions
export default store;