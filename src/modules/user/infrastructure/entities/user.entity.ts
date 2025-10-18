import { Column, Entity } from 'typeorm';
import { UserInterface } from '../../domain/interfaces/user.interface';
import { UserRoleEnum } from '../../application/enums/user-role.enum';
import { BaseModelEntity } from '../../../../base/classes/base-model.entity';

@Entity('users')
export class UserEntity extends BaseModelEntity implements UserInterface {
  @Column({ type: 'varchar', nullable: true })
  firstName?: string;

  @Column({ type: 'varchar', nullable: true })
  lastName?: string;

  @Column({ type: 'varchar', length: 11, unique: true })
  phoneNumber: string;

  @Column({ type: 'varchar' })
  password?: string;

  @Column({ type: 'enum', enum: UserRoleEnum, default: UserRoleEnum.customer })
  role: UserRoleEnum;

  @Column({ type: 'boolean', default: false })
  isPhoneVerified: boolean;
}
