import { NotFoundException } from '@nestjs/common';
import { ErrorsEnum } from '../../../../common/enums/errors.enum';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super(ErrorsEnum.user_not_found);
  }
}
