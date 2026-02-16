/* eslint-disable prettier/prettier */
import { User } from 'src/schema/user.schema';

export const Users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    createdAt: new Date().getDate().toString(),
    isBlocked: false,
    isDeleted: false,
    role: 'customer',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    createdAt: new Date().getDate().toString(),
    isBlocked: false,
    isDeleted: false,
    role: 'customer',
  },
];
