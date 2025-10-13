import { BaseRepositoryInterface } from '../../../../base/interfaces/base-repository.interface';
import { User } from '../models/user';
import { CreateUserType } from '../../application/types/create-user.type';

export interface UserRepositoryInterface
  extends BaseRepositoryInterface<CreateUserType, User, UserRepositoryInterface> {}
