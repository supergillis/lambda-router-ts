import type { Context } from 'aws-lambda';
import { Option } from 'fp-ts/Option';

export type Handler<Req, Res> = (request: Req, context: Context) => Promise<Option<Res>>;
