**[lambda-router-ts](../README.md)**

> [Globals](../globals.md) / "chain"

# Module: "chain"

## Index

### Functions

* [chain](_chain_.md#chain)

## Functions

### chain

▸ `Const`**chain**\<Req, Res>(`chain`: [Handler](_handler_.md#handler)\<Req, Res>[]): [Handler](_handler_.md#handler)\<Req, Res>

*Defined in [chain.ts:10](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/chain.ts#L10)*

Chain multiple handlers.

Array of handlers to be executed.

#### Type parameters:

Name |
------ |
`Req` |
`Res` |

#### Parameters:

Name | Type |
------ | ------ |
`chain` | [Handler](_handler_.md#handler)\<Req, Res>[] |

**Returns:** [Handler](_handler_.md#handler)\<Req, Res>

The response from the first handler that returns some response.
