import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../styles.scss';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const {setLoggedIn} = props;
  const {loggedIn} = props;
  const {signUp} = props;
  const {setSignUp} = props;
  const {welcome, setWelcome} = props

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      try {
        const foundUser = loggedInUser;
        setWelcome(`Welcome back ${loggedInUser}! `);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setWelcome('Please enter a new username and password');
    //setSignUp(true)
    //changePage()
    console.log(welcome);
    console.log(username, password)
    return setSignUp(true)
    //console.log('youre at the signup page')
  }

  
  

  const clickHandler = (event) => {

    if(username == "" || password == ""){
      return window.alert('Please enter a username and password.')
    }
  
    event.preventDefault();
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(data =>  data.json())
    .then(data => {
      console.log('verification result', data);
      return data
    })
    .then(data => { 
          console.log(data.user)
          localStorage.setItem('user', data.user);
          console.log(localStorage);
          setLoggedIn(!loggedIn);
        })

    .catch(err => window.alert('Incorrect username or password'));

    // const name = document.getElementById('userName');
    // console.log(name.value);
    
    
    console.log(username);
    console.log(password);
  }
    return (
      <div className="loginContainer">
        <div className="loginBox">
          <form className="inputForm" onSubmit={clickHandler}>
            <div className="form-group">
            {/* Username: */}
            <input id="userName" placeholder="Username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            />
            {/* Password: */}
            <input id="password" placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" id="submitBtn">Login</button>
            <div>{welcome}<button onClick={handleClick}>Signup</button></div>
            </div>
          </form> 
        </div>
      </div>
    );
}


