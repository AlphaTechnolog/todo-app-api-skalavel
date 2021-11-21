import { TodoController } from './todo.controller'
import { IRouteLoaderConfig, IRouteLoaderRoute } from "skalavel/lib/router/interfaces";

export const config: IRouteLoaderConfig = {
  prefix: '/todo',
  controller: TodoController,
}

export const routes: IRouteLoaderRoute[] = [
  {
    address: '/',
    method: 'get',
    endpoint: 'fetchall',
  },
  {
    address: '/:_id',
    method: 'get',
    endpoint: 'fetchById',
  },
  {
    address: '/',
    method: 'post',
    endpoint: 'create',
  },
  {
    address: '/:_id',
    method: 'delete',
    endpoint: 'delete',
  },
  {
    address: '/:_id',
    method: 'put',
    endpoint: 'update',
  }
]
