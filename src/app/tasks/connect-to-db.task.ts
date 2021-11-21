import mongoose from 'mongoose'
import { Task, env, log } from 'skalavel'
import { IConnectToDBTask } from './connect-to-db.task.interfaces'

export class ConnectToDBTask
  extends Task
  implements IConnectToDBTask {
  mongoUri!: string

  meta(): void {
    const mongoUri: string = env.getParsedValue('MONGO_URI')
    if (!mongoUri) {
      log.error('Cannot get the `MONGO_URI` from your environment')
    }

    this.mongoUri = mongoUri
  }

  async run(): Promise<void> {
    await mongoose.connect(this.mongoUri)
      .then((): void => log.success('Connected to Database succesfully'))
      .catch((error: any): void => log.error(`Cannot connect to database: ${error.message}`))
  }
}
