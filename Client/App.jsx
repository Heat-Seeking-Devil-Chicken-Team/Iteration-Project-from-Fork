import React, { useState } from 'react';
import Login from './Components/login.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  
  return (
    <div>
      
      {loggedIn && (
      <div>
      <p>WE GOT THIS!</p>
      <Login setLoggedIn={setLoggedIn}/>
      </div>
      )}
      
    </div>
  );
};

export default App;


