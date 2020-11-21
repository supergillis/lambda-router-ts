import * as r from '../../lib';
import { apigateway as apigw } from '../../lib';
import { pipe } from 'fp-ts/function';
import { authorize, createMessage, getFeedLink, getIdentity, login } from './controller';

// prettier-ignore
const pub = r.chain([
  pipe(login, apigw.post('/api/login')),
  pipe(getFeedLink, apigw.get('/api/feed/:index/link')),
]);

// prettier-ignore
const priv = r.chain([
  pipe(getIdentity, apigw.get('/api/identity')),
  pipe(createMessage, apigw.post('/api/messages')),
]);

// prettier-ignore
export const router = pipe(
  r.chain([
    pub,
    authorize(priv),
  ]),
  apigw.cors()
);
