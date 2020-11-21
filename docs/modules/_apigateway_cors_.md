**[lambda-router-ts](../README.md)**

> [Globals](../globals.md) / "apigateway/cors"

# Module: "apigateway/cors"

## Index

### Interfaces

* [CorsOriginString](../interfaces/_apigateway_cors_.corsoriginstring.md)
* [CorsProps](../interfaces/_apigateway_cors_.corsprops.md)

### Type aliases

* [CorsOrigin](_apigateway_cors_.md#corsorigin)

### Functions

* [cors](_apigateway_cors_.md#cors)
* [corsPropsToHeaders](_apigateway_cors_.md#corspropstoheaders)

### Object literals

* [corsDefaults](_apigateway_cors_.md#corsdefaults)

## Type aliases

### CorsOrigin

Ƭ  **CorsOrigin**: \"header\" \| [CorsOriginString](../interfaces/_apigateway_cors_.corsoriginstring.md)

*Defined in [apigateway/cors.ts:10](https://github.com/supergillis/lambda-router-ts/blob/ccb3947/lib/apigateway/cors.ts#L10)*

## Functions

### cors

▸ `Const`**cors**\<Req>(`props?`: Partial\<[CorsProps](../interfaces/_apigateway_cors_.corsprops.md)>): (Anonymous function)

*Defined in [apigateway/cors.ts:31](https://github.com/supergillis/lambda-router-ts/blob/ccb3947/lib/apigateway/cors.ts#L31)*

Basic CORS implementation that wraps a given handler.

#### Type parameters:

Name | Type |
------ | ------ |
`Req` | [Request](_apigateway_response_.md#request) |

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`props` | Partial\<[CorsProps](../interfaces/_apigateway_cors_.corsprops.md)> | {} |

**Returns:** (Anonymous function)

___

### corsPropsToHeaders

▸ **corsPropsToHeaders**(`req`: [Request](_apigateway_response_.md#request), `props`: [CorsProps](../interfaces/_apigateway_cors_.corsprops.md)): object

*Defined in [apigateway/cors.ts:53](https://github.com/supergillis/lambda-router-ts/blob/ccb3947/lib/apigateway/cors.ts#L53)*

#### Parameters:

Name | Type |
------ | ------ |
`req` | [Request](_apigateway_response_.md#request) |
`props` | [CorsProps](../interfaces/_apigateway_cors_.corsprops.md) |

**Returns:** object

## Object literals

### corsDefaults

▪ `Const` **corsDefaults**: object

*Defined in [apigateway/cors.ts:20](https://github.com/supergillis/lambda-router-ts/blob/ccb3947/lib/apigateway/cors.ts#L20)*

#### Properties:

Name | Type | Value |
------ | ------ | ------ |
`credentials` | true | true |
`headers` | string[] | ['origin', 'content-type', 'accept', 'authorization', 'cache-control', 'referrer'] |
`methods` | string[] | ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] |
`origin` | \"header\" | "header" |
`statusCode` | number | 200 |
