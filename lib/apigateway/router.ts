import Route from 'route-parser';
import { none, some } from 'fp-ts/Option';
import { map } from '../mapper';
import { Request } from './response';
import { apigateway } from '..';

type RouterRequest = {
  routerPath?: string;
};

export interface RouteProps {
  method?: string;
  path: string;
}

export type MatchedRequest<T> = T & {
  /**
   * Record that contains mapping from matched key to matched value.
   *
   * e.g. for a path `/api/hello/:name` and request `/api/hello/elon` the match will equal
   * ```json
   * {
   *   "name": "elon"
   * }
   * ```
   */
  match: { [key: string]: string };
};

/**
 * Routes a handler for the given method and path.
 *
 * ```typescript
 * import { pipe } from 'fp-ts/function';
 * import { apigateway as apigw } from 'lambda-router-ts';
 *
 * const helloWorld = async (req: MatchedRequest<apigw.Request>) =>
 *   some({ statusCode: 200, body: `Hello ${req.match.name}!`});
 *
 * route({
 *   method: 'GET',
 *   path: '/api/hello/:name'
 * })(helloWorld);
 *
 * get('/api/hello/:name')(helloWorld);
 *
 * pipe(helloWorld, get('/api/hello/:name'));
 * ```
 *
 * @param fn Handler that implements the mapping from the request type A to request type B.
 * @template A The source request type.
 * @template B The destination request type.
 */
export const route = <Req extends Request>(props: RouteProps) => {
  const { method, path } = props;
  const route = new Route(path);

  return map<Req, MatchedRequest<Req>>(async (req: Req) => {
    if (method && req.httpMethod !== method) {
      return none;
    }
    const match = route.match(req.path);
    if (match === false) {
      return none;
    }

    const routerRequest = req as RouterRequest;
    const routerPath = routerRequest.routerPath ?? '';

    // Add the match to the request
    return some({
      ...req,
      match,
      routerPath: `${routerPath}${path}`,
    });
  });
};

export type MethodRouteProps = Omit<RouteProps, 'method' | 'path'>;

/**
 * Auxiliary method that matches a GET request for the given path.
 *
 * @param path The path to match.
 */
export const get = <Req extends apigateway.Request>(path: string) =>
  route<Req>({
    method: 'GET',
    path,
  });

/**
 * Auxiliary method that matches a POST request for the given path.
 *
 * @param path The path to match.
 */
export const post = <Req extends apigateway.Request>(path: string) =>
  route<Req>({
    method: 'POST',
    path,
  });
