import { Task, log, global } from 'skalavel'

export class PrintPortTask extends Task {
  run(): void {
    log.info(`The configured port is ${global.fetch<number>('port')}`)
  }
}
