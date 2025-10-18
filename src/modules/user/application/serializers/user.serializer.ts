import { User } from '../../domain/models/user';
import { BaseSerializer } from '../../../../base/classes/base.serialize';
import { UserRoleEnum } from '../enums/user-role.enum';
import { Exclude } from 'class-transformer';
import { ExposeString, ExposeEnum } from '../../../../common/decorators/expose.decorator';

export class UserSerializer extends BaseSerializer implements User {
  constructor(model?: User) {
    super(model);
  }

  static async serialize(model: User): Promise<UserSerializer> {
    const instance = new UserSerializer(model);
    instance.firstName = model.firstName;
    instance.lastName = model.lastName;
    instance.phoneNumber = model.phoneNumber;
    instance.password = model.password;
    instance.isPhoneVerified = model.isPhoneVerified;
    instance.role = model.role;
    return instance;
  }

  static async serializeMany(models: User[]): Promise<UserSerializer[]> {
    return await Promise.all(models.map(async (model) => await UserSerializer.serialize(model)));
  }

  @ExposeString()
  firstName: string;

  @ExposeString()
  lastName: string;

  @ExposeString()
  phoneNumber: string;

  @Exclude()
  password: string;

  @Exclude()
  isPhoneVerified: boolean;

  @ExposeEnum(UserRoleEnum)
  role: UserRoleEnum;
}
