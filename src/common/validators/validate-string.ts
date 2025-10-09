import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, ValidationOptions } from 'class-validator';

export const ValidateString = (
  example?: string,
  validationOption?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: String,
      required: true,
      example: example ?? 'some string',
      isArray: validationOption?.each,
    }),
    IsString(validationOption),
    IsNotEmpty(),
  );

export const ValidateStringOptional = (
  example?: string,
  validationOption?: ValidationOptions,
): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: String,
      required: false,
      example: example ?? 'some optional string',
      isArray: validationOption?.each,
    }),
    IsString(validationOption),
    IsOptional(),
  );