export const invalidTokenResponseEnumEnum = {
  EXPIRED: 'EXPIRED',
  INVALID: 'INVALID',
} as const

export type InvalidTokenResponseEnumEnum = (typeof invalidTokenResponseEnumEnum)[keyof typeof invalidTokenResponseEnumEnum]

export type InvalidTokenResponseEnum = InvalidTokenResponseEnumEnum