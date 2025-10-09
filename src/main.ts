import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDb } from './configs/database/create-db';
import { allConfigs } from './configs/all-configs';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, urlencoded } from 'express';
import helmet from 'helmet';

async function bootstrap() {
  await createDb();
  const appConfig = allConfigs().app
  const app = await NestFactory.create<NestExpressApplication>(AppModule , {rawBody : true});
  app.useBodyParser('json');
  app.use(helmet());
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));
  await app.listen(appConfig.port)
}
void bootstrap();
