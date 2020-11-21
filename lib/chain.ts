import type { Context } from 'aws-lambda';
import { Option, none, isSome } from 'fp-ts/Option';
import { Handler } from './handler';

/**
 * Chain multiple handlers.
 * @returns The response from the first handler that returns some response.
 * @param chain Array of handlers to be executed.
 */
export const chain = <Req, Res>(chain: Handler<Req, Res>[]): Handler<Req, Res> => async (
  req: Req,
  context: Context,
): Promise<Option<Res>> => {
  for (const handler of chain) {
    const res = await handler(req, context);
    if (isSome(res)) {
      return res;
    }
  }
  return none;
};
