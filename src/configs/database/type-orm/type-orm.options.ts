export function typeOrmOptions() {
  return {
    migrationsTableName: 'migration',
    database: process.env.DB_POSTGRES_NAME!,
    host: process.env.DB_POSTGRES_HOST!,
    port: +process.env.DB_POSTGRES_PORT!,
    username: process.env.DB_POSTGRES_USER!,
    password: process.env.DB_POSTGRES_PASSWORD!,
    migrationsRun: false,
    logging: false,
    synchronize: false,
    entities: [
      'dist/modules/**/infrastructure/entities/*.entity.js',
      'dist/common/entities/*.entity.js',
    ],
    migrations: ['dist/migrations/*.js'],
    subscribers: [],
    autoLoadEntities: true,
  };
}
