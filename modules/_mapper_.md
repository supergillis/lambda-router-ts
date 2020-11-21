**[lambda-router-ts](../README.md)**

> [Globals](../globals.md) / "mapper"

# Module: "mapper"

## Index

### Functions

* [map](_mapper_.md#map)

## Functions

### map

▸ `Const`**map**\<A, B>(`fn`: [Handler](_handler_.md#handler)\<A, B>): (Anonymous function)

*Defined in [mapper.ts:12](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/mapper.ts#L12)*

Uses a handler to map another handler's request type from one type to another. See [route](_apigateway_router_.md#route) for example usage.

#### Type parameters:

Name | Description |
------ | ------ |
`A` | The source request type. |
`B` | The destination request type.  |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fn` | [Handler](_handler_.md#handler)\<A, B> | Handler that implements the mapping from the request type A to request type B. |

**Returns:** (Anonymous function)
