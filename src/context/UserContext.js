import React,{ createContext, useState } from "react";


const UserContext = createContext();



const initialUser = {
    id:1,
    name:'ezequiel',
    favoritesMovies:[1]

}




const UserProvider  = ({children})=>{

    const login = () => {
			setUser(initialUser);
		};

		const logout = () => {
			
			setUser(null);
		};

		const makeFavorite = (movieId) => {
			const isFavorite = user?.favoritesMovies?.includes(movieId);

			const favoritesMovies = isFavorite
				? //if ternario
				  user.favoritesMovies.filter((arrayId) => arrayId !== movieId)
				: [...user.favoritesMovies, movieId];

			setUser({ ...user, favoritesMovies: favoritesMovies });
		};




    const [user, setUser] = useState(initialUser);
    const data = {user , login, logout ,makeFavorite}

















    return(


        <UserContext.Provider value={data}>
        
        {children}
        
        </UserContext.Provider>
    )

}


export {UserProvider}
export default UserContext;