module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mcfarms'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
