import mongoose from 'mongoose'
import { Controller, Validator } from 'skalavel'
import { ITodoController } from './todo.interfaces'
import { Todo } from './todo.schema'

export class TodoController
  extends Controller
  implements ITodoController {
  public async fetchall(): Promise<void> {
    const todo = await Todo.find({})
    this.jsonRes({ todo })
  }

  public async fetchById(): Promise<void> {
    const validator = new Validator(this.req.params, {
      _id: 'required|string',
    })
    if (!validator.ok()) {
      return this.jsonRes(validator.getErrors())
    }

    const todo = await Todo.findOne({ _id: this.req.params._id })

    this.jsonRes({ todo })
  }

  public async create(): Promise<void> {
    const validator = new Validator(this.req.body, {
      name: 'required|string',
      description: 'required|string',
      completed: 'required|boolean',
    })
    if (!validator.ok()) {
      return this.jsonRes(validator.getErrors())
    }

    const _id = new mongoose.Types.ObjectId()

    await new Todo({
      _id,
      ...this.req.body
    }).save()

    this.jsonRes({ todo: {
      _id,
      ...this.req.body
    }})
  }

  public async delete(): Promise<void> {
    const validator = new Validator(this.req.params, {
      _id: 'required|string',
    })
    if (!validator.ok()) {
      return this.jsonRes(validator.getErrors())
    }

    await Todo.deleteMany({ _id: this.req.params })

    this.jsonRes({ ok: true })
  }

  public async update(): Promise<void> {
    let validator = new Validator(this.req.params, {
      _id: 'required|string',
    })
    if (!validator.ok()) {
      return this.jsonRes(validator.getErrors())
    }
    validator = new Validator(this.req.body, {
      name: 'required|string',
      description: 'required|string',
      completed: 'required|boolean',
    })
    if (!validator.ok()) {
      return this.jsonRes(validator.getErrors())
    }

    await Todo.updateMany(
      { _id: this.req.params._id },
      { $set: this.req.body },
    )

    this.jsonRes({ todo: await Todo.findOne({ _id: this.req.params._id }) })
  }
}
