/* eslint-disable prettier/prettier */
import { USER_ROLES } from 'src/types/enum';
import z from 'zod';

// export const UserRoleSchema = z.enum(['admin', 'customer', 'moderator']);
// export type UserRole = z.infer<typeof UserRoleSchema>;

export const UserSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  isDeleted: z.boolean().default(false),
  isBlocked: z.boolean().default(false),
  isVerified: z.boolean().default(false),
  role: z.enum(USER_ROLES).default('customer'),
  createdAt: z.iso.datetime()
}).meta({
  id: 'User'
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({ id: true, createdAt: true, role: true, isDeleted: true, isBlocked: true, isVerified: true, }).meta({
  id: 'CreateUser'
});
export type CreateUser = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial().meta({
  id: 'UpdateUser'
});
export type UpdateUser = z.infer<typeof UpdateUserSchema>;

export const UserResponseSchema = UserSchema.meta({
  id: 'UserResponse'
});
export type UserResponse = z.infer<typeof UserResponseSchema>;
