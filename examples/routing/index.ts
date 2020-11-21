import type * as lambda from 'aws-lambda';
import { getOrElse } from 'fp-ts/Option';
import { apigateway as apigw } from '../../lib';

const getOr404 = getOrElse<apigw.Response>(() => apigw._404());

export const handler: lambda.Handler<apigw.Request> = async (event: apigw.Request, context, callback) => {
  console.log(`Handling event...`);
  console.log(JSON.stringify(event, null, 2));

  try {
    const option = await router(event, context);
    const result = getOr404(option);

    console.log(`Sending response...`);
    console.log(JSON.stringify(result, null, 2));

    callback(null, result);
  } catch (e) {
    console.error(e);

    callback(e, null);
  }
};
