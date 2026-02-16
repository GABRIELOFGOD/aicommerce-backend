/* eslint-disable prettier/prettier */
import { createZodDto } from "nestjs-zod";
import { UserResponseSchema } from "src/schema/user.schema";

export class UserResponseDto extends createZodDto(UserResponseSchema) {}