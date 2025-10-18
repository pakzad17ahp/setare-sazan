import { CreateBaseModelType } from '../../../../base/types/create-base-model.type';
import { User } from '../../domain/models/user';

export type CreateUserType = CreateBaseModelType &
  Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;
