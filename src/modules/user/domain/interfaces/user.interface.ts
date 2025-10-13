import { BaseModelInterface } from '../../../../base/interfaces/base-model.interface';
import { UserRoleEnum } from '../../application/enums/user-role.enum';

export interface UserInterface extends BaseModelInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userName: string;
  password: string;
  role: UserRoleEnum;
}