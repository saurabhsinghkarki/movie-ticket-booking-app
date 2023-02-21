import { useDispatch } from "react-redux";
import { movieActions } from "../store/store";
import { Link } from "react-router-dom";
import "./Movies.css";


const Movies = () => {
   const dispatch = useDispatch();

   const MovieOneHandler = () => {
      const movie = {
         id: "m1",
         movie: "PIRATES OF THE CARIBBEAN",
         price: 200,
         seats: 0,
         seatNo: []
      }
      dispatch(movieActions.addedMovie(movie));
   }
   const MovieTwoHandler = () => {
      const movie = {
         id: "m2",
         movie: "AVATAR",
         price: 300,
         seats: 0,
         seatNo: []

      }
      dispatch(movieActions.addedMovie(movie));

   }
   const MovieThreeHandler = () => {
      const movie = {
         id: "m3",
         movie: "BLACK PANTHER",
         price: 250,
         seats: 0,
         seatNo: []


      }
      dispatch(movieActions.addedMovie(movie));

   }
   const MovieFourHandler = () => {
      const movie = {
         id: "m4",
         movie: "THOR",
         price: 280,
         seats: 0,
         seatNo: []
      }
      dispatch(movieActions.addedMovie(movie));
   }

   const MovieFiveHandler = () => {
      const movie = {
         id: "m5",
         movie: "Matrix",
         price: 280,
         seats: 0,
         seatNo: []
      }
      dispatch(movieActions.addedMovie(movie));
   }

   return (
      <div className="main">
         <div>
            <img src="https://rukminim1.flixcart.com/image/416/416/jn3hocw0/poster/j/s/q/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uv7zzgp6wvg.jpeg?q=70" alt="movie" />
            <p>PIRATES OF THE CARIBBEAN</p>
            <Link to="/seats"><button onClick={MovieOneHandler}>Select</button></Link>
         </div>
         <div>
            <img src="https://www.joblo.com/wp-content/uploads/2022/01/avatar-2-poster-1-400x600.jpg" alt="movie" />
            <p>AVATAR</p>
            <Link to="/seats"><button onClick={MovieTwoHandler}>Select</button></Link>
         </div>
         <div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/99790a53131197.596c4c8d36869.jpg" alt="movie" />
            <p>BLACK PANTHER</p>
            <Link to="/seats"><button onClick={MovieThreeHandler}>Select</button></Link>
         </div>
         <div>
            <img src="https://w0.peakpx.com/wallpaper/902/32/HD-wallpaper-heimdall-thor-comics-holi-hollywood-idris-elba-marvel-marvel-cinematic-universe-marvel-comics-marvel-movies-movie-movie-poster-orange-poster-thor-ragnarok.jpg" alt="movie" />
            <p>THOR</p>
            <Link to="/seats"><button onClick={MovieFourHandler}>Select</button></Link>
         </div>
         <div>
         <img src="https://hippy.in/wp-content/uploads/2012/11/custom-made-hollywood-movie-posters-2.jpg" alt="movie" />
            <p>Matrix</p>
            <Link to="/seats"><button onClick={MovieFiveHandler}>Select</button></Link>
         </div>
      </div>
   )
}

export default Movies;