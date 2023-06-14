import React, { useState } from 'react';
import Login from './Components/login.jsx';
import MainPage from './Components/MainPage.jsx'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (

    <div className="mainPage">
      {/* loggedIn ? loginpage:querypage */}
      {loggedIn && (
        <div className="introPage">
          <div className='navBar'></div>
            {/* <h1 className='loginHeader'>Welcome to Twerp</h1> */}
          <Login setLoggedIn={setLoggedIn}/>
        </div>
      )}

      {!loggedIn && (
          <MainPage/>
      )}
    </div>
  );
};

export default App;
