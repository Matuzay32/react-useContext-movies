import React, { createContext } from 'react';
import initialMovies from '../consts/initialMovies';



const MoviesContext= createContext(); 


const data = {movies : initialMovies};




const MoviesProvider = ({children}) => {
    return (
        <MoviesContext.Provider value={data}>
            {children}
        </MoviesContext.Provider>
    );
};








export default MoviesContext;

export {MoviesProvider}