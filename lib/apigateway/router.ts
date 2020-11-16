import Route from "route-parser";
import { none, some } from "fp-ts/Option";
import { map } from "../mapper";
import { Request } from "./response";
import { apigateway } from "..";

type RouterRequest = {
  routerPath?: string;
};

export interface RouteProps {
  method?: string;
  path: string;
}

export type MatchedRequest<T> = T & {
  match: { [key: string]: string };
};

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
    const routerPath = routerRequest.routerPath ?? "";

    // Add the match to the request
    return some({
      ...req,
      match,
      routerPath: `${routerPath}${path}`,
    });
  });
};

export type MethodRouteProps = Omit<RouteProps, "method" | "path">;

export const get = <Req extends apigateway.Request>(path: string) =>
  route<Req>({
    method: "GET",
    path,
  });

export const post = <Req extends apigateway.Request>(path: string) =>
  route<Req>({
    method: "POST",
    path,
  });
