import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, ValidationOptions } from 'class-validator';

export const ValidateId = (validationOption?: ValidationOptions): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: String,
      required: true,
      example: '672b3e2dd374fe3871ebe020',
      isArray: validationOption?.each,
    }),
    IsString(validationOption),
    IsNotEmpty(),
  );

export const ValidateIdOptional = (validationOption?: ValidationOptions): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: String,
      required: false,
      example: '672b3e2dd374fe3871ebe020',
      isArray: validationOption?.each,
    }),
    IsString(validationOption),
    IsOptional(),
  );
