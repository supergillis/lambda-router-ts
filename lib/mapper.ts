import type { Context } from 'aws-lambda';
import { Option, isNone } from 'fp-ts/Option';
import { Handler } from './handler';

/**
 * Uses a handler to map another handler's request type from one type to another. See {@link route} for example usage.
 *
 * @param fn Handler that implements the mapping from the request type A to request type B.
 * @template A The source request type.
 * @template B The destination request type.
 */
export const map = <A, B>(fn: Handler<A, B>) => <R>(next: Handler<B, R>): Handler<A, R> => async (
  req: A,
  context: Context,
): Promise<Option<R>> => {
  const match = await fn(req, context);
  if (isNone(match)) {
    return match;
  }
  return next(match.value, context);
};
