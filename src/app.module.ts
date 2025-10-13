import { Module } from '@nestjs/common';
import { AppController } from './modules/app/app.controller';
import { AppService } from './modules/app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { allConfigs } from './configs/all-configs';
import { ConfigModule } from '@nestjs/config';
import { validateConfigs } from './configs/services/validate-configs';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateConfigs,
      isGlobal: true,
      envFilePath: ['.env'],
      load: [allConfigs],
    }),
    TypeOrmModule.forRoot({
      url : allConfigs().database.postgres.url,
      ...allConfigs().database.postgres.typeOrmOptions,
      type: 'postgres',
      subscribers : []
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
