/* eslint-disable prettier/prettier */

import { createZodDto } from 'nestjs-zod';
import { UpdateUserSchema } from '../../schema/user.schema';

export class UpdateUserDto extends createZodDto(UpdateUserSchema) {}
