import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ExposeOptionsType } from '../types/expose-options.type';
import { EnumAllowedTypes } from '@nestjs/swagger/dist/interfaces/schema-object-metadata.interface';

function createExposeDecorator<T>(type: any) {
  return (options?: ApiPropertyOptions): PropertyDecorator =>
    applyDecorators(
      ApiProperty({
        type,
        ...options,
      }),
      Expose(),
    );
}

export const ExposeString = createExposeDecorator<string>(String);
export const ExposeNumber = createExposeDecorator<number>(Number);
export const ExposeBoolean = createExposeDecorator<boolean>(Boolean);
export const ExposeDate = createExposeDecorator<Date>(Date);

export const ExposeObject = <T>(
  type: new () => T,
  options?: ExposeOptionsType<T>,
): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      type: type,
      ...options,
    }),
    Expose(),
  );

export const ExposeEnum = <T extends EnumAllowedTypes>(
  type: T,
  options?: ExposeOptionsType<T>,
): PropertyDecorator =>
  applyDecorators(
    ApiProperty({
      enum: type,
      ...options,
    }),
    Expose(),
  );
