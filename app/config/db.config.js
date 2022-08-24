const user = 'admin'
const host = '192.168.1.100'
const database = 'postgres'
const password = 'mondejar'
const port = '5432'

module.exports = {
    HOST: host,
    USER: user,
    PASSWORD: password,
    DB: database,
    port: port,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
