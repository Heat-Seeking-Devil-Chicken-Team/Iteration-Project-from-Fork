import React, { useState } from 'react';
import Login from './Components/login.jsx';
import MainPage from './Components/MainPage.jsx'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (

    <div className="mainPage">
      
      {/* loggedIn ? loginpage:querypage */}
      {loggedIn && (
        <div className="introPage">
          
            {/* <h1 className='loginHeader'>Welcome to Twerp</h1> */}
          <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        </div>
      )}

      {!loggedIn && (
            <MainPage/>
      )}
    </div>
  );
};

export default App;


