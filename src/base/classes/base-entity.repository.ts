import { EntityManager } from 'typeorm';

export abstract class BaseEntityRepository<T> {
  abstract attachToTransaction(entityManager?: EntityManager): T;
}
