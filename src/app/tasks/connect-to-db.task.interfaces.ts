import { ITask } from 'skalavel/lib/tasks/interfaces'

export interface IConnectToDBTask extends ITask {
  mongoUri: string
}
