import { BaseModel } from '../classes/base.model';

export type CreateBaseModelType = Omit<BaseModel, 'id'>;
