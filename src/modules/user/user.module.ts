import { Module } from '@nestjs/common';
import { UserService } from './application/services/user.service';
import { UserController } from './presentation/controllers/user.controller';
import { USER_REPOSITORY_TOKEN } from './domain/repositories/user-repository.interface';
import { UserEntityRepository } from './infrastructure/repositories/user.entity.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infrastructure/entities/user.entity';

const userRepositoryProvider = {
  provide: USER_REPOSITORY_TOKEN,
  useClass: UserEntityRepository,
};

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, userRepositoryProvider, UserService],
  exports: [UserService],
})
export class UserModule {}
