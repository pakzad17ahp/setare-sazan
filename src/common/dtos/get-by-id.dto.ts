import { ValidateId } from '../validators/validate-id';

export class GetByIdDto {
  @ValidateId()
  id: string;
}
