import { allConfigs } from '../../all-configs';
import { DataSource } from 'typeorm';

const config = allConfigs().database.postgres.typeOrmOptions;


export const connectionSource = new DataSource({
  ...config,
  type: 'postgres',
})

