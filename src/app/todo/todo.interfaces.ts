import { IController } from 'skalavel/lib/controller/interfaces'

export interface Todo {
  name: string
  description: string
  completed: boolean
}

export interface ITodoController extends IController {
  fetchall(): Promise<void>
  fetchById(): Promise<void>
  create(): Promise<void>
  delete(): Promise<void>
  update(): Promise<void>
}
