export const unauthorizedResponseStatusCodeEnum = {
  '100': 100,
  '101': 101,
  '102': 102,
  '103': 103,
  '200': 200,
  '201': 201,
  '202': 202,
  '203': 203,
  '204': 204,
  '205': 205,
  '206': 206,
  '300': 300,
  '301': 301,
  '302': 302,
  '303': 303,
  '304': 304,
  '307': 307,
  '308': 308,
  '400': 400,
  '401': 401,
  '402': 402,
  '403': 403,
  '404': 404,
  '405': 405,
  '406': 406,
  '407': 407,
  '408': 408,
  '409': 409,
  '410': 410,
  '411': 411,
  '412': 412,
  '413': 413,
  '414': 414,
  '415': 415,
  '416': 416,
  '417': 417,
  '418': 418,
  '421': 421,
  '422': 422,
  '424': 424,
  '428': 428,
  '429': 429,
  '500': 500,
  '501': 501,
  '502': 502,
  '503': 503,
  '504': 504,
  '505': 505,
} as const

export type UnauthorizedResponseStatusCodeEnum = (typeof unauthorizedResponseStatusCodeEnum)[keyof typeof unauthorizedResponseStatusCodeEnum]

export type UnauthorizedResponse = {
  /**
   * @type string
   */
  message: string
  /**
   * @type number
   */
  statusCode: UnauthorizedResponseStatusCodeEnum
}