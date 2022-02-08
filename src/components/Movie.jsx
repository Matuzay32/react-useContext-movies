import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Movie = ({movie}) => {

const {user,makeFavorite} = useContext(UserContext);

    const imgStyle = {
        height: '260px',
        objectFit: 'cover'
    }
    const isFavorite = user.favoritesMovies.includes(movie.id);


    return (
        <div className='card'>

        <img style={imgStyle} className='card-img-top'  src={movie.imageUrl}  alt={movie.title} />

        <div className='card-body'>

            <h4> {movie.title} </h4>
                {user?.id && <button  onClick={()=>makeFavorite(movie.id)} className={`btn ${isFavorite ? 'btn-success' :'btn-outline-primary'}`}> Favorito</button>}
            

        </div>
            
        </div>
    );
};


export default Movie;