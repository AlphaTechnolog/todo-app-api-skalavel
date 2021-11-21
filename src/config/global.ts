import { global, env } from 'skalavel'

global.set<number>('port', Number(
  env.getParsedValue<string>('PORT') ||
    '8000'
))
