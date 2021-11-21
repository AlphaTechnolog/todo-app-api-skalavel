import { Router, RouteLoader } from 'skalavel'
import { config as homeRoutesConfig ,routes as homeRoutes } from './home/home.routes'
import { config as todoRoutesConfig, routes as todoRoutes } from './todo/todo.routes'

const router: Router = new Router()
const routeLoader: RouteLoader = new RouteLoader(router)

routeLoader.load(homeRoutesConfig, homeRoutes)
routeLoader.load(todoRoutesConfig, todoRoutes)

export default router
