import { none, some } from 'fp-ts/Option';
import { map } from '../mapper';

export interface AppsyncEvent<A> {
  info: {
    fieldName: string;
  };
  arguments: A;
}

export interface RouteProps {
  fieldName: string;
}

export const route = <Req extends AppsyncEvent<A>, A>(props: RouteProps) =>
  map<any, Req>(async (req: any) => (req && req.info && req.info.fieldName === props.fieldName ? some(req) : none));
