import React, { useContext } from 'react';
import MoviesContext from '../context/MoviesContext';
import UserContext from '../context/UserContext';
import Movie from './Movie';

const MovieList = () => {

  const  {user,login,logout} = useContext(UserContext);
  const {movies} = useContext(MoviesContext);



    return (
        <div className='container'>

        <div className='row'>

           { user&& movies.map((movie)=>{
      
          return <div key={movie.id} className='col-md-4'>
          
            <Movie movie={movie} />
            
          </div>
      
          })}
      
      
      
        </div>
      
      </div>
    );
};


export default MovieList;