import * as env from 'dotenv';
import { postgresConfig } from './database/postgres.config';
import { appConfig } from './app.config';
env.config()


export function allConfigs() {
  return {
    app : appConfig(),
    domain : '',
    database : {
      postgres : postgresConfig()
    },
    auth : '' ,
    redis : '' ,
    storage : {},
    sms : '',
    email : '' ,
    payment : ''
  }
}