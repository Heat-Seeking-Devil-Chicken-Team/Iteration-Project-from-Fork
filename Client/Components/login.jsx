import React, {useState} from 'react';
// import styles from '../styles.scss';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setLoggedIn} = props;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const clickHandler = (event) => {
    const user = { username, password };
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
      // !!!! use conditional to check response an then call setLoggedIn
      setLoggedIn(false);
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
            </div>
          </form>
        </div>
      </div>
    );
}

/* 

const user = { username, password}


setUser(data);
localStorage.setItem('user', data)


*/

 // .then(data => { 
      //   setUsername(data);
      //   localStorage.setItem('user', data);
      // })