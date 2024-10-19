import React, { createContext, useContext, useState } from 'react';
const UserContext = createContext([])
function UseContext(props) {
    const [user, setUser] = useState({id: 1, name: 'Peter', power: 'SpiderMan'});
    const [movies] = useState({id: 1,year: 2020 ,movie: 'Spider Home coming'})
    const [theme, setTheme] = useState('white');
    const changeTheme = () => {
        setTheme((theme) => theme === 'white'? 'dark': 'white');
    }
    return (
        <div>
            <UserContext.Provider value = {{user, movies, theme,onClick: changeTheme }}>
             <UserName  />
             <UserPower   />
             <Movies  />
            <Theme  />
            </UserContext.Provider>
        </div>
    );
}

function Theme () {
    const {theme, onClick} = useContext(UserContext);
    console.log(theme)
    return (
        <>
        Theme: {theme} 
       <button className="ml-2" onClick={onClick}> Click Here </button>
        
        </>
    )
}

function UserName () {
    const {user} = useContext(UserContext);
    return (
        <>
        <p> Name:  {user.name } </p>
        
        </>
    )
}

function Movies () {
    const {user, movies} = useContext(UserContext);
    return (
        <>
        <p>  year:  {movies.year } Release: {movies.movie} Hero: {user.name} </p>
        
        </>
    )
}

function UserPower() {
    const {user} = useContext(UserContext)
    return (
        <>
        <p className='text-red-600'>  Power: {user.power} </p>       
        </>
    )
}

export default UseContext;