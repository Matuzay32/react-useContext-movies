import React from 'react';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { MoviesProvider } from './context/MoviesContext';
import { UserProvider } from './context/UserContext';

const initialUser = {
  id: 1,
  name: 'ezequiel',
  favoriteMovies:[1,2,3]
};


const App = () => {








  return (
    <div>

    <UserProvider>
    <MoviesProvider>

    <NavBar/>
    <MovieList/>

    
  </MoviesProvider>
    </UserProvider>
   
    
    
    </div>
  );
};


export default App;