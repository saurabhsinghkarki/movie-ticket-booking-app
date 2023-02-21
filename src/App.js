import './App.css';
import SeatMatrix from './components/SeatMatrix';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import EndPage from './components/EndPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
       <Redirect to="/movies" />
      </Route>
        <Route path="/movies" exact>
          <Movies/>
        </Route>
        <Route path="/seats" exact>
          <SeatMatrix/>
          <MovieDetail/>
        </Route>
        <Route path="/endPage" exact>
          <EndPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
