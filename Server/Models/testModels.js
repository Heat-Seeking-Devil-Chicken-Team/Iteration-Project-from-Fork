const { Pool } = require('pg');

const PG_URI =
  'postgres://shdcigcw:0-fTnquhQpoJyqFmM0E70k6i4gqCS5sc@mahmud.db.elephantsql.com/shdcigcw';

/* create a new pool using the connection URI */
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('Executed query', text);
    return pool.query(text, params, callback);
  },
};
