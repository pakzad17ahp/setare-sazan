import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsOptional } from 'class-validator';

export const ValidatePhone = (): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: String,
      required: true,
      example: '09123456789',
    }),
    IsNotEmpty(),
    IsNumberString(),
  );

export const ValidatePhoneOptional = (): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: String,
      required: false,
      example: '09123456789',
    }),
    IsNumberString(),
    IsOptional(),
  );
