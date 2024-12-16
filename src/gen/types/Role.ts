export const roleEnum = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const

export type RoleEnum = (typeof roleEnum)[keyof typeof roleEnum]

export type Role = RoleEnum