import { IsIn, IsNotEmpty, IsUrl } from 'class-validator';
import { ValidateNumber } from '../../common/validators/validate-number';
import { ValidateString } from '../../common/validators/validate-string';
import { ValidateBoolean } from '../../common/validators/validate-boolean';

export class EnvironmentVariablesDto {
  //#region app
  @ValidateNumber()
  APP_PORT: number;

  @ValidateString()
  APP_NAME: string;

  @ValidateString()
  APP_API_PREFIX: string;

  @ValidateString()
  @IsIn(['development', 'production', 'staging'])
  APP_NODE_ENV: 'development' | 'production' | 'staging';

  @ValidateString()
  APP_LOGO: string;
  //#endregion

  //#region db
  @ValidateString()
  DB_POSTGRES_HOST: string;

  @ValidateNumber()
  DB_POSTGRES_PORT: number;

  @ValidateString()
  DB_POSTGRES_USER: string;

  @ValidateString()
  DB_POSTGRES_PASSWORD: string;
  //#endregion
}
