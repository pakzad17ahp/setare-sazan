import { Inject, NotFoundException } from '@nestjs/common';
import {
  USER_REPOSITORY_TOKEN,
  UserRepositoryInterface,
} from '../../domain/repositories/user-repository.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../../domain/models/user';
import { CreateUserType } from '../types/create-user.type';
import { CryptoUtils } from '../../../../common/utils/services/crypto.utils';
import { UserRoleEnum } from '../enums/user-role.enum';
import { EntityManager, FindOptionsRelations, FindOptionsWhere } from 'typeorm';
import { UserEntity } from '../../infrastructure/entities/user.entity';
import { FindOptionsSelect } from 'typeorm/find-options/FindOptionsSelect';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { UserCannotUpdateVerifiedPhoneException } from '../Exceptions/user-cannot-update-verified-phone.exception';
import { UserNotFoundException } from '../Exceptions/user-not-found.exception';

export class UserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async create(input: CreateUserDto): Promise<User> {
    const payload: CreateUserType = {
      ...input,
      password: input.password ? await CryptoUtils.hash(input.password) : undefined,
      isPhoneVerified: false,
    };
    return await this.userRepository.create(payload);
  }

  async createAdmin(input: CreateUserDto): Promise<User> {
    const payload: CreateUserType = {
      ...input,
      password: input.password ? await CryptoUtils.hash(input.password) : undefined,
      isPhoneVerified: false,
      role: UserRoleEnum.admin,
    };
    return await this.userRepository.create(payload);
  }

  async findOne(
    query: FindOptionsWhere<UserEntity>,
    relations?: FindOptionsRelations<UserEntity>,
    select?: FindOptionsSelect<UserEntity>,
  ): Promise<User> {
    const user = await this.userRepository.findOne(query, relations, select);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async findMany(
    query: FindOptionsWhere<UserEntity>,
    relations?: FindOptionsRelations<UserEntity>,
    select?: FindOptionsSelect<UserEntity>,
  ) {
    return await this.userRepository.findMany(query, relations, select);
  }

  async updateOne(
    where: FindOptionsWhere<UserEntity>,
    data: DeepPartial<UserEntity>,
    entityManager?: EntityManager,
  ): Promise<User> {
    const currentUser = await this.userRepository.findOne(where);
    if (data.password) {
      data.password = await CryptoUtils.hash(data.password);
    }

    if (data.phoneNumber) {
      if (
        currentUser.phoneNumber &&
        currentUser.isPhoneVerified &&
        data.phoneNumber != currentUser.phoneNumber
      ) {
        throw new UserCannotUpdateVerifiedPhoneException();
      }
    }

    const user = await this.userRepository
      .attachToTransaction(entityManager)
      .updateOne(where, data);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async updateMany(where: FindOptionsWhere<UserEntity>, date: DeepPartial<UserEntity>) {
    return await this.userRepository.updateMany(where, date);
  }

  async deleteOne(where: FindOptionsWhere<UserEntity>): Promise<boolean> {
    return await this.userRepository.deleteOne(where);
  }

  async deleteMany(where: FindOptionsWhere<UserEntity>): Promise<number> {
    return await this.userRepository.deleteMany(where);
  }

  async count(where: FindOptionsWhere<UserEntity>): Promise<number> {
    return await this.userRepository.count(where);
  }
}
