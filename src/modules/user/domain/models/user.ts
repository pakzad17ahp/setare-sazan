import { BaseModel } from '../../../../base/classes/base.model';
import { UserInterface } from '../interfaces/user.interface';
import { UserRoleEnum } from '../../application/enums/user-role.enum';
import { UserEntity } from '../../infrastructure/entities/user.entity';
import { MaybeType } from '../../../../common/types/maybe.type';

export class User extends BaseModel implements UserInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userName: string;
  password: string;
  role: UserRoleEnum;

  constructor(entity: UserEntity) {
    super(entity);
    if (entity) {
      this.firstName = entity.firstName;
      this.lastName = entity.lastName;
      this.phoneNumber = entity.phoneNumber;
      this.userName = entity.userName;
      this.password = entity.password;
      this.role = entity.role;
    }
  }
  static constructMany(entities: UserEntity[]): User[] {
    return entities.map((entity) => new User(entity));
  }

  static constructNullable(entity: UserEntity | null): MaybeType<User> {
    return entity ? new User(entity) : null;
  }
}
