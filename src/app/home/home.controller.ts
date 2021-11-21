import { Controller, renderer } from 'skalavel'
import { IHomeController } from './home.interfaces'
import path from 'path'

export class HomeController
  extends Controller
  implements IHomeController
{
  constructor (...data: [any]) {
    super(...data)
    renderer.setViewPrefix(path.join(__dirname, 'views'))
  }

  home(): void {
    this.htmlRes(renderer.getRendered('index.hammer.html', {
      title: 'Welcome',
      text: 'To my skalavel mongodb todo api, make request to /todo/.* to start',
    }))
  }
}
