import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


//pages
import Home from './pages/Home'
import AbotUs from './pages/AboutUs'
import Movies from './pages/Movies'
import SingleMovie from './pages/SingleMovie'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import MainLayout from './pages/MainLayout';

function App() {

  const [movies, setMovies] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/about-us' element={<AbotUs />} />
            <Route path='/movies' element={<Movies movies={movies} setMovies={setMovies} />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/movies/:movieId' element={<SingleMovie />} />
        </Route>
        <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
