import { USER_ROLES, UserRole } from 'src/types/enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isDeleted: boolean;

  @Column({ default: false })
  isBlocked: boolean;

  @Column({ default: false })
  isVerified: boolean;

  @Column({
    type: 'enum',
    enum: USER_ROLES,
    default: 'customer',
  })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;
}
