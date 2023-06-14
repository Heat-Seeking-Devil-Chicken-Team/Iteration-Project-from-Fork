import React, {useState} from 'react';

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
    .then(data => { data.json() 
       })
    .then(data => {
      console.log('verification result', data)
      
  })
    .catch(err => console.log('Error verifying user'));
    setLoggedIn(false)
    // const name = document.getElementById('userName');
    // console.log(name.value);
    event.preventDefault();
    console.log(username);
    console.log(password);
  }
    return (
        <form onSubmit={clickHandler}>
          <div className="form-group">
          <label htmlFor="name"></label>
          Username:
          <input id="userName"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          />
          Password:
          <input id="password"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Submit</button>
          </div>
        </form>
    );
}

