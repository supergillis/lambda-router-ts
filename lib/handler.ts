import type { Context } from 'aws-lambda';
import { Option } from 'fp-ts/Option';

/**
 * Defines the type that handles a Lambda request.
 * @returns Promise that holds an optional response.
 * @template Req The type of the Lambda request.
 * @template Res The type of the Lambda response.
 */
export type Handler<Req, Res> = (request: Req, context: Context) => Promise<Option<Res>>;
