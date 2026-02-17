// user-role.enum.ts
export const USER_ROLES = ['admin', 'customer', 'moderator'] as const;
export type UserRole = typeof USER_ROLES[number];
