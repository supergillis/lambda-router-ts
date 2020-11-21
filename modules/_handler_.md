**[lambda-router-ts](../README.md)**

> [Globals](../globals.md) / "handler"

# Module: "handler"

## Index

### Type aliases

* [Handler](_handler_.md#handler)

## Type aliases

### Handler

Ƭ  **Handler**\<Req, Res>: (request: Req, context: Context) => Promise\<Option\<Res>>

*Defined in [handler.ts:10](https://github.com/supergillis/lambda-router-ts/blob/43899f9/lib/handler.ts#L10)*

Defines the type that handles a Lambda request.

**`returns`** Promise that holds an optional response.

#### Type parameters:

Name | Description |
------ | ------ |
`Req` | The type of the Lambda request. |
`Res` | The type of the Lambda response.  |
