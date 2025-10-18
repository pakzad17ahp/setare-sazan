import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../../application/services/user.service';
import { CreateUserDto } from '../../application/dtos/create-user.dto';
import { User } from '../../domain/models/user';
import { AdminsController } from '../../../../common/controllers/admin-controller.decoretor';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserSerializer } from '../../application/serializers/user.serializer';
import { GetByIdDto } from '../../../../common/dtos/get-by-id.dto';
import { UpdateUserDto } from '../../application/dtos/update-user.dto';

@AdminsController('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ type: UserSerializer })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserSerializer> {
    const user = await this.userService.create(createUserDto);
    return UserSerializer.serialize(user);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserSerializer })
  async findAll(): Promise<UserSerializer[]> {
    const users = await this.userService.findMany({});
    return UserSerializer.serializeMany(users);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserSerializer })
  async findOne(@Param() param: GetByIdDto): Promise<UserSerializer> {
    const user = await this.userService.findOne({ id: param.id });
    return UserSerializer.serialize(user);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: UserSerializer })
  async updateOne(
    @Param() param: GetByIdDto,
    @Body() body: UpdateUserDto,
  ): Promise<UserSerializer> {
    const user = await this.userService.updateOne({ id: param.id }, body);
    return UserSerializer.serialize(user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param() param: GetByIdDto): Promise<boolean> {
    return await this.userService.deleteOne({ id: param.id });
  }
}
