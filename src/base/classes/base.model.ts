import { BaseModelInterface } from '../interfaces/base-model.interface';
import { BaseModelEntity } from './base-model.entity';
import { MaybeType } from '../../common/types/maybe.type';

export abstract class BaseModel implements BaseModelInterface {
  id: string;
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;

  protected constructor(entity?: BaseModelEntity) {
    if (entity) {
      this.id = entity.id;
      this.createdAt = entity.createdAt;
      this.updatedAt = entity.updatedAt;
      this.deletedAt = entity.deletedAt;
    }
  }

  static constructMany(entities: BaseModelEntity[]): BaseModel[] {
    return entities.map((entity) => this.constructor(entity));
  }

  static constructNullable(entity: MaybeType<BaseModelEntity>): MaybeType<BaseModel> {
    return entity ? this.constructor(entity) : null;
  }
}
