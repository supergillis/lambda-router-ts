import type * as lambda from 'aws-lambda';
import * as cookie from 'cookie';
import { Option, some } from 'fp-ts/Option';
import * as r from '../../lib';
import { apigateway as apigw } from '../../lib';

export const login = async (req: apigw.Request) => {
  if (!hasValidCredentials(req)) {
    return some(apigw._401('Invalid code'));
  }

  const token = createToken(req);
  return some({
    statusCode: 302,
    body: 'Found',
    headers: {
      'Cache-Control': 'private',
      'Set-Cookie': `X-MyWebsite-Token=${token}; Secure; HttpOnly; Path=/`,
      Location: '/',
    },
  });
};

export type AuthorizedRequest<T> = T & {
  token: string;
};

export const authorize = (
  next: r.Handler<AuthorizedRequest<apigw.Request>, apigw.Response>,
): r.Handler<apigw.Request, apigw.Response> => {
  return async (req: apigw.Request, context: lambda.Context): Promise<Option<apigw.Response>> => {
    const header = req.headers['cookie'] ?? req.headers['Cookie'];
    if (!header) {
      return some(apigw._401('Missing cookie'));
    }

    const parsed = cookie.parse(header);
    const token = parsed['X-MyWebsite-Token'];
    if (!isValidToken(token)) {
      return some(apigw._401('Invalid authorization token'));
    }

    const reqWithAuthorization: AuthorizedRequest<apigw.Request> = {
      ...req,
      token,
    };
    return next(reqWithAuthorization, context);
  };
};

export const getIdentity = async (req: AuthorizedRequest<apigw.Request>) => some(apigw._200(req.token));

export const getFeedLink = async (req: apigw.MatchedRequest<apigw.Request>): Promise<Option<apigw.Response>> => {
  const { index } = req.match;
  if (!index) {
    return some(apigw._404());
  }

  return some({
    statusCode: 302,
    body: 'Moved',
    headers: {
      Location: `http://redirect.com/i=${index}`,
    },
  });
};

export const createMessage = async (req: AuthorizedRequest<apigw.Request>) => {
  // Do something here
  const result = {
    id: 1,
    name: 'Lambda Router',
  };

  return some({
    statusCode: 200,
    body: apigw.json(result),
  });
};

const hasValidCredentials = (req: apigw.Request) => true;

const createToken = (req: apigw.Request) => 'a4b7658e-b7e1-4221-b046-21cb17af9d95';

const isValidToken = (req: apigw.Request) => true;
