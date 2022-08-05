const user = 'postgres'
const host = 'host.docker.internal'
const database = 'postgres'
const password = 'postgrespw'
const port = '49153'

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
  