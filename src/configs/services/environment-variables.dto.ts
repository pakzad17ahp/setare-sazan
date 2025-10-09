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

  //#region domain

  @IsNotEmpty()
  @IsUrl()
  DOMAIN_FRONTEND_ADMIN: string;

  @IsNotEmpty()
  @IsUrl()
  DOMAIN_FRONTEND_CUSTOMER: string;

  @IsNotEmpty()
  @IsUrl()
  DOMAIN_BACKEND: string;
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

  //#region auth
  @ValidateString()
  AUTH_JWT_SECRET: string;

  @ValidateString()
  AUTH_JWT_TOKEN_EXPIRES_IN: string;

  @ValidateString()
  AUTH_REFRESH_TOKEN_EXPIRES_IN: string;

  @ValidateString()
  AUTH_FORGOT_TOKEN_EXPIRES_IN: string;

  @ValidateString()
  AUTH_GOOGLE_CLIENT_ID: string;

  @ValidateString()
  AUTH_GOOGLE_CLIENT_SECRET: string;
  //#endregion

  //#region redis

  @ValidateString()
  REDIS_HOST: string;

  @ValidateNumber()
  REDIS_PORT: number;

  @ValidateString()
  REDIS_PASSWORD: string;

  //#endregion

  //#region storage
  @ValidateString()
  STORAGE_BASE_URL: string;

  @ValidateString()
  STORAGE_S3_ACCESS_KEY_ID: string;

  @ValidateString()
  STORAGE_S3_SECRET_ACCESS_KEY: string;

  @ValidateString()
  STORAGE_S3_ENDPOINT: string;

  @ValidateNumber()
  STORAGE_S3_PORT: number;

  @ValidateString()
  STORAGE_S3_DEFAULT_PRIVATE_BUCKET: string;

  @ValidateString()
  STORAGE_S3_DEFAULT_PUBLIC_BUCKET: string;

  @ValidateBoolean()
  STORAGE_S3_USE_SSL: boolean;

  //#endregion

  //#region sms

  @ValidateString()
  SMS_KAVE_NEGAR_API_KEY: string;

  @ValidateString()
  SMS_KAVE_NEGAR_BASE_URL: string;

  //#endregion

  //#region mail
  @ValidateString()
  MAIL_SMTP_HOST: string;

  @ValidateNumber()
  MAIL_SMTP_PORT: number;

  @ValidateString()
  MAIL_SMTP_USER: string;

  @ValidateString()
  MAIL_SMTP_PASSWORD: string;

  @ValidateBoolean()
  MAIL_SMTP_SECURE: string;

  @ValidateString()
  MAIL_FROM_NAME: string;

  @ValidateString()
  MAIL_FROM_EMAIL: string;
  //#endregion

  //#region payment

  @ValidateString()
  SEP_TERMINAL_ID: string;

  //#endregion
}
