import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, ValidationOptions } from 'class-validator';
import { Type } from 'class-transformer';

export const ValidateBoolean = (validationOption?: ValidationOptions): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: Boolean,
      required: true,
      example: true,
      isArray: validationOption?.each,
    }),
    IsBoolean(validationOption),
    IsNotEmpty(),
    Type(() => Boolean),
  );

export const ValidateBooleanOptional = (validationOption?: ValidationOptions): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: Boolean,
      required: false,
      example: true,
      isArray: validationOption?.each,
    }),
    IsBoolean(validationOption),
    IsOptional(),
    Type(() => Boolean),
  );

