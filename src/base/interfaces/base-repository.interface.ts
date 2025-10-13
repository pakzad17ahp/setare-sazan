import { EntityManager, FindOptionsRelations, FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { FindOptionsSelect } from 'typeorm/find-options/FindOptionsSelect';
import { FindOptionsOrder } from 'typeorm/find-options/FindOptionsOrder';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { MaybeType } from '../../common/types/maybe.type';

export interface BaseRepositoryInterface<T1, T2, T3> {
  attachToTransaction(entityManager?: EntityManager): T3;

  create(input: T1): Promise<T2>;

  createMany?(inputs: T1[]): Promise<T2[]>;

  findOne(
    where: FindOptionsWhere<T2>,
    relations?: FindOptionsRelations<T2>,
    select?: FindOptionsSelect<T2>,
  ): Promise<MaybeType<T2>>;

  findMany(
    where: FindOptionsWhere<T2> | FindOptionsWhere<T2>[],
    relations?: FindOptionsRelations<T2>,
    select?: FindOptionsSelect<T2>,
    sort?: FindOptionsOrder<T2>,
  ): Promise<T2[]>;

  updateOne(query: FindOptionsWhere<T2>, data: DeepPartial<T2>): Promise<MaybeType<T2>>;

  updateMany(query: FindOptionsWhere<T2>, data: QueryDeepPartialEntity<T2>): Promise<number>;

  deleteOne(query: FindOptionsWhere<T2>): Promise<boolean>;

  deleteMany(query: FindOptionsWhere<T2>): Promise<number>;

  count(query: FindOptionsWhere<T2>): Promise<number>;
}
