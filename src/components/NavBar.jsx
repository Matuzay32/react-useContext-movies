import React ,{useContext}from 'react';
import UserContext from '../context/UserContext';

const NavBar = () => {

  const  {user,login,logout} = useContext(UserContext);





    return (
        <nav className='navbar navbar-dark bg-dark mb-4'>
        <div className='container'>
      
          <span className='navbar-brand'>

            { user  ? <h1>Bienvenido {user.name}</h1>  : <h1> Bienvenido @</h1>}

          </span>

        {
            user ?
          <button onClick={logout} className='btn btn-warning'> Cerrar sesion</button>
            
             :
          <button onClick={login} className='btn btn-success'> Iniciar sesion</button>

        }

      
        </div>
      
      
      </nav>
    );
};


export default NavBar;