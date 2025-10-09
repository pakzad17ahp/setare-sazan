import { typeOrmOptions } from './type-orm/type-orm.options';

export function postgresConfig() {
  return {
    url: `postgres://${typeOrmOptions().username}:${typeOrmOptions().password}@${typeOrmOptions().host}:${typeOrmOptions().port}/${typeOrmOptions().database}`, //process.env.DB_POSTGRES_URL!,
    typeOrmOptions: typeOrmOptions(),
  };
}
