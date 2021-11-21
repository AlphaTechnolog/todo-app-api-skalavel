import { Schema, model } from 'mongoose'
import { Todo as ITodo } from './todo.interfaces'

export const TodoSchema = new Schema<ITodo>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
})

export const Todo = model('todo', TodoSchema)
