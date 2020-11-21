**[lambda-router-ts](../README.md)**

> [Globals](../globals.md) / "apigateway/response"

# Module: "apigateway/response"

## Index

### References

* [Request](_apigateway_response_.md#request)
* [Response](_apigateway_response_.md#response)

### Functions

* [\_200](_apigateway_response_.md#_200)
* [\_302](_apigateway_response_.md#_302)
* [\_400](_apigateway_response_.md#_400)
* [\_401](_apigateway_response_.md#_401)
* [\_404](_apigateway_response_.md#_404)
* [json](_apigateway_response_.md#json)

## References

### Request

Re-exports: Request

___

### Response

Re-exports: Response

## Functions

### \_200

▸ `Const`**_200**(`body`: string): [Response](_apigateway_response_.md#response)

*Defined in [apigateway/response.ts:14](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/apigateway/response.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`body` | string |

**Returns:** [Response](_apigateway_response_.md#response)

___

### \_302

▸ `Const`**_302**(`location`: string, `message?`: string): [Response](_apigateway_response_.md#response)

*Defined in [apigateway/response.ts:22](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/apigateway/response.ts#L22)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`location` | string | - |
`message` | string | "Moved" |

**Returns:** [Response](_apigateway_response_.md#response)

___

### \_400

▸ `Const`**_400**(`message?`: string): [Response](_apigateway_response_.md#response)

*Defined in [apigateway/response.ts:31](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/apigateway/response.ts#L31)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | "Bad Request" |

**Returns:** [Response](_apigateway_response_.md#response)

___

### \_401

▸ `Const`**_401**(`message?`: string): [Response](_apigateway_response_.md#response)

*Defined in [apigateway/response.ts:39](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/apigateway/response.ts#L39)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | "Unauthorized" |

**Returns:** [Response](_apigateway_response_.md#response)

___

### \_404

▸ `Const`**_404**(`message?`: string): [Response](_apigateway_response_.md#response)

*Defined in [apigateway/response.ts:47](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/apigateway/response.ts#L47)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`message` | string | "Not Found" |

**Returns:** [Response](_apigateway_response_.md#response)

___

### json

▸ `Const`**json**\<T>(`body`: T): [Response](_apigateway_response_.md#response)

*Defined in [apigateway/response.ts:6](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/apigateway/response.ts#L6)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`body` | T |

**Returns:** [Response](_apigateway_response_.md#response)
