import {
  applyDecorators,
  ClassSerializerInterceptor,
  Controller,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { pascaleCase } from '../utils/functions/pascale-case';
import { RequestScope } from '../enums/request-scope.enum';

export const AdminsController = (path: string): ClassDecorator =>
  applyDecorators(
    Controller({
      path: `${RequestScope.admins}/${path}`,
      version: '1',
    }),
    UseInterceptors(ClassSerializerInterceptor),
    SerializeOptions({
      groups: [],
    }),
    ApiBearerAuth(),
    ApiTags(`Admins-${pascaleCase(path)}`),
    UseGuards(),
  );
