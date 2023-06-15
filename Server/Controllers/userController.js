const bcrypt = require('bcrypt');
const db = require('../Models/testModels');
const userController = {};
const workFactor = 10;

// get the hash value for 1234,

/* controller for verifying user login */
userController.verifyUser = async (req, res, next) => {
  // deconstruct the req body to get user and password
  //console.log('req.body', req.body);
  const { username, password } = req.body;
console.log(req.body)
  const query = `select password from user_info where user_name = '${username}';`;
  // get hashed password and make query to db and see if it matches. If it does then redirect
  // the user to homepage
  // not working when trying to use db.query with promise chain
  db.query(query, (err, result) => {
    if (err) {
      return next(err);
    }
    console.log('The result is:',result)
    bcrypt.compare(password, result.rows[0]['password']).then((result) => {
      //console.log('result in bcrypt', result);
      
      if (result == true) {
        res.locals.result = {verified: true, user: username, pass: password}
      
        return next();
      } else {
        return res.redirect('/login');
      }
    });
  });
};

userController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (username !== '' && password !== '') {
    bcrypt
      .hash(password, 10)
      .then((hash) => {
        User.create({ username, password: hash }).then((err, user) => {
          res.locals.user = user;
          console.log(user);
          next();
        });
      });
    // console.log('Created User', user);
  } else {
    next({ log: 'Failed to generate new user' });
  }
};


userController.makeUser = (req, res, next) => {
  const {username, password} = req.body;
  console.log('reqbody', req.body)
  // A SELECT query is required after the INSERT query to actually return the new user
  const newUser = `INSERT INTO user_info (_id, user_name, password) VALUES (nextval(\'user_info_sequence\'),'${username}' ,'${password}');
  SELECT * FROM user_info WHERE username = '${username}';`
  db.query(newUser)
    .then(data => {
      // console.log('data in makeUser', data)
      const { rows } = data[1]
      // console.log('From Database: ', rows)
      res.locals.data = rows
      return next()
    })
}

module.exports = userController;



// userController.createUser = (req, res, next) => {
//   const { username, password } = req.body;
//   if (username !== '' && password !== '') {
//     bcrypt
//       .hash(password, 10)
//       .then((hash) => {
//         User.create({ username, password: hash }).then((err, user) => {
//           res.locals.user = user;
//           console.log(user);
//           next();
//         });
//       });
//     // console.log('Created User', user);
//   } else {
//     next({ log: 'Failed to generate new user' });
//   }
// };