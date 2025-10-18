import { UnprocessableEntityException } from '@nestjs/common';
import { ErrorsEnum } from '../../../../common/enums/errors.enum';

export class UserCannotUpdateVerifiedPhoneException extends UnprocessableEntityException {
  constructor() {
    super(ErrorsEnum.cannot_update_verified_phone);
  }
}
