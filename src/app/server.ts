import { Server, global, log } from 'skalavel'
import tasks from './tasks'
import router from './router'

const server: Server = new Server()

server.setTasks(tasks)
server.setRouter(router)

server.listen(global.fetch<number>('port'), (): void => {
  log.success('Server is listening successfully')
})
