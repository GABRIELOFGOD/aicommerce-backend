/* eslint-disable prettier/prettier */
import { CreateUserSchema } from "src/schema/user.schema";
import { createZodDto } from "nestjs-zod";

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
