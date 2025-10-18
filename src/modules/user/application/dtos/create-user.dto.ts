import { IsEnum, IsNotEmpty, IsNumberString, IsOptional, IsString } from 'class-validator';
import { UserRoleEnum } from '../enums/user-role.enum';

export class CreateUserDto {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsNumberString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  password?: string;

  @IsEnum(UserRoleEnum)
  @IsOptional()
  role: UserRoleEnum;
}
