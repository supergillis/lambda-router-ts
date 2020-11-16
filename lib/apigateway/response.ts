import type { APIGatewayProxyResult as Response } from 'aws-lambda';

export type { APIGatewayProxyEvent as Request } from 'aws-lambda';
export type { APIGatewayProxyResult as Response } from 'aws-lambda';

export const json = <T>(body: T): Response => ({
  statusCode: 200,
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const _200 = (body: string): Response => ({
  statusCode: 200,
  body,
  headers: {
    'Content-Type': 'text/plain',
  },
});

export const _302 = (location: string, message: string = 'Moved'): Response => ({
  body: message,
  statusCode: 302,
  headers: {
    'Content-Type': 'text/plain',
    Location: location,
  },
});

export const _400 = (message: string = 'Bad Request'): Response => ({
  body: message,
  statusCode: 400,
  headers: {
    'Content-Type': 'text/plain',
  },
});

export const _401 = (message: string = 'Unauthorized'): Response => ({
  body: message,
  statusCode: 401,
  headers: {
    'Content-Type': 'text/plain',
  },
});

export const _404 = (message: string = 'Not Found'): Response => ({
  body: message,
  statusCode: 404,
  headers: {
    'Content-Type': 'text/plain',
  },
});
