import { IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRoleEnum } from '../enums/user-role.enum';
import { ValidatePhoneOptional } from '../../../../common/validators/validate-phone';

export class UpdateUserDto {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @ValidatePhoneOptional()
  phoneNumber?: string;

  @IsString()
  password?: string;

  @IsEnum(UserRoleEnum)
  @IsOptional()
  role?: UserRoleEnum;
}
