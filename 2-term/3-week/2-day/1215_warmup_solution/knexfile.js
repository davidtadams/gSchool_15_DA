module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
