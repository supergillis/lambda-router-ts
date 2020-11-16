import type { Context } from "aws-lambda";
import { Option, isNone } from "fp-ts/Option";
import { Handler } from "./handler";

export const map = <A, B>(fn: Handler<A, B>) => <R>(
  next: Handler<B, R>
): Handler<A, R> => async (req: A, context: Context): Promise<Option<R>> => {
  const match = await fn(req, context);
  if (isNone(match)) {
    return match;
  }
  return next(match.value, context);
};
