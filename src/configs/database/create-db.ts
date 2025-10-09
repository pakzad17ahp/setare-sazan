import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { allConfigs } from '../all-configs';
import { Logger } from '@nestjs/common';

export const createDb = async (): Promise<void> => {
  const typeOrmOptions = allConfigs().database.postgres.typeOrmOptions;
  const options: TypeOrmModuleOptions = {
    type: 'postgres',
    host: typeOrmOptions.host,
    port: typeOrmOptions.port,
    username: typeOrmOptions.username,
    password: typeOrmOptions.password,
    entities: [],
    synchronize: false,
  };
  const dataSource = new DataSource({
    type: 'postgres',
    ...options,
  });
  await dataSource.initialize();
  const result = await dataSource.query(
    `SELECT 1
     FROM pg_database
     WHERE datname = '${typeOrmOptions.database}'`,
  );
  if (!result.length) {
    const logger = new Logger('createDb');
    logger.verbose(`Creating database with name "${typeOrmOptions.database}"`);
    await dataSource.query(`CREATE DATABASE "${typeOrmOptions.database}"`);
  }
  await dataSource.destroy();
};
