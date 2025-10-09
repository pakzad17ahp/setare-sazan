import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

export const ValidateNumber = (
  example?: number,
  min?: number,
  max?: number,
  maxDecimalPlaces?: number,
): PropertyDecorator => {
  const decorators = [
    ApiProperty({
      type: () => Number,
      required: true,
      example: example ?? 2,
      minimum: min,
      maximum: max,
    }),
    IsNumber({ maxDecimalPlaces }),
    IsNotEmpty(),
  ];

  if (min !== undefined) decorators.push(Min(min));
  if (max !== undefined) decorators.push(Max(max));

  return applyDecorators(...decorators);
};

export const ValidateNumberOptional = (
  example?: number,
  min?: number,
  max?: number,
  maxDecimalPlaces?: number,
): PropertyDecorator => {
  const decorators = [
    ApiProperty({
      type: () => Number,
      required: false,
      example: example ?? 1,
      minimum: min,
      maximum: max,
    }),
    IsNumber({ maxDecimalPlaces }),
    IsOptional(),
  ];

  if (min !== undefined) decorators.push(Min(min));
  if (max !== undefined) decorators.push(Max(max));

  return applyDecorators(...decorators);
};
