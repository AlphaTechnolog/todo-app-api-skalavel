import { HomeController } from './home.controller'
import { IRouteLoaderConfig, IRouteLoaderRoute } from 'skalavel/lib/router/interfaces'

export const config: IRouteLoaderConfig = {
  prefix: '/',
  controller: HomeController,
}

export const routes: IRouteLoaderRoute[] = [
  {
    address: '/',
    method: 'get',
    endpoint: 'home',
  }
]
