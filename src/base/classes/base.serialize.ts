import { BaseModel } from './base.model';
import { Exclude } from 'class-transformer';
import { ExposeString } from '../../common/decorators/expose.decorator';

export class BaseSerializer implements BaseModel {
  constructor(model?: BaseModel) {
    if (model) {
      this.id = model.id;
      this.updatedAt = model.updatedAt;
      this.createdAt = model.createdAt;
      this.deletedAt = model.deletedAt;
    }
  }

  static async serialize(model: BaseModel): Promise<BaseSerializer> {
    return new BaseSerializer(model);
  }

  static async serializeMany(models: BaseModel[]): Promise<BaseSerializer[]> {
    return await Promise.all(models.map(async (model) => await BaseSerializer.serialize(model)));
  }

  @ExposeString({ nullable: true })
  id: string;

  @ExposeString({ nullable: true })
  createdAt?: Date;

  @ExposeString({ nullable: true })
  updatedAt?: Date;

  @Exclude()
  deletedAt?: Date;
}
