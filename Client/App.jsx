import React, { useState } from 'react';
import Login from './Components/login.jsx';
import MainPage from './Components/MainPage.jsx'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [welcome, setWelcome] = useState('Dont have an account? ');
  
  return (

    <div className="mainPage">
      
      {/* loggedIn ? loginpage:querypage */}
      {loggedIn && !signUp && (
        <div className="introPage">
          <div className='navBar'></div>
            {/* <h1 className='loginHeader'>Welcome to Twerp</h1> */}
          <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} signUp={signUp} setSignUp={setSignUp} welcome = {welcome} setWelcome = {setWelcome}/>
        </div>
      )}

      {signUp && (
        <div className="introPage">
          <div className='navBar'></div>
            {/* <h1 className='loginHeader'>Welcome to Twerp</h1> */}
          <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} signUp={signUp} setSignUp={setSignUp} welcome = {welcome} setWelcome = {setWelcome}/>
          <div>sign up page</div>
        </div>
      )}

      

      {!loggedIn && (
            <MainPage/>
      )}
    </div>
  );
};

export default App;


