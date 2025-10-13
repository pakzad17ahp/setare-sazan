import { UserRepositoryInterface } from '../../domain/repositories/user-repository.interface';
import { Injectable } from '@nestjs/common';
import { BaseEntityRepository } from '../../../../base/classes/base-entity.repository';
import { EntityManager, FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { User } from '../../domain/models/user';
import { FindOptionsSelect } from 'typeorm/find-options/FindOptionsSelect';
import { MaybeType } from '../../../../common/types/maybe.type';
import { CreateUserType } from '../../application/types/create-user.type';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { DeepPartial } from 'typeorm/common/DeepPartial';

@Injectable()
export class UserEntityRepository
  extends BaseEntityRepository<UserEntityRepository>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super();
  }

  attachToTransaction(entityManager?: EntityManager): UserEntityRepository {
    return entityManager
      ? new UserEntityRepository(entityManager.withRepository(this.userRepository))
      : this;
  }

  async findOne(
    where: FindOptionsWhere<User>,
    relations?: FindOptionsRelations<User>,
    select?: FindOptionsSelect<User>,
  ): Promise<MaybeType<User>> {
    const object = await this.userRepository.findOne({ where, select, relations });
    return User.constructNullable(object);
  }

  async findMany(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
    relations?: FindOptionsRelations<User>,
    select?: FindOptionsSelect<User>,
  ): Promise<User[]> {
    const objects = await this.userRepository.find({ where, select, relations });
    return User.constructMany(objects);
  }

  async create(input: CreateUserType): Promise<User> {
    const object = await this.userRepository.save(input);
    return new User(object);
  }

  async updateOne(
    query: FindOptionsWhere<User>,
    data: DeepPartial<User>,
  ): Promise<MaybeType<User>> {
    const currentEntity = await this.userRepository.findOne({ where: query });
    if (!currentEntity) {
      return null;
    }
    const mergedResult = this.userRepository.merge(currentEntity, data);
    const updatedResult = await this.userRepository.save(mergedResult);
    return new User(updatedResult);
  }

  async updateMany(
    query: FindOptionsWhere<User>,
    data: QueryDeepPartialEntity<User>,
  ): Promise<number> {
    const updateResult = await this.userRepository.update(query, data);
    return updateResult.affected ?? 0;
  }

  async deleteOne(query: FindOptionsWhere<User>): Promise<boolean> {
    const deletedResult = await this.userRepository.delete(query);
    return (deletedResult.affected ?? 0) > 0;
  }

  async deleteMany(query: FindOptionsWhere<User>): Promise<number> {
    const deletedResult = await this.userRepository.delete(query);
    return deletedResult.affected ?? 0;
  }

  count(query: FindOptionsWhere<User>): Promise<number> {
    return this.userRepository.count({ where: query });
  }
}
