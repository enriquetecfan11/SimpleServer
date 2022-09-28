import cluster from 'cluster'
import os from 'os'

const CPUS = os.cpus()
if (cluster.isMaster) {
  CPUS.forEach(() => cluster.fork())
  cluster.on('listening', worker => {
    // eslint-disable-next-line
    console.log('Proceso PID:%d conectado', worker.process.pid)
  })
  cluster.on('disconnect', worker => {
    // eslint-disable-next-line
    console.log('Proceso PID:%d desconectado', worker.process.pid)
  })
  cluster.on('exit', worker => {
    // eslint-disable-next-line
    console.log('Proceso PID:%d terminado', worker.process.pid)
    // Inicia un nuevo proceso si un cluster muere
    cluster.fork()
  })
} else {
  require('./server.js')
}
