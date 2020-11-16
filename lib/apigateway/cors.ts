import type { Context } from "aws-lambda";
import { Option, some, map } from "fp-ts/Option";
import { Handler } from "../handler";
import { Request, Response } from "../apigateway/response";

export interface CorsOriginString {
  string: string;
}

export type CorsOrigin = "header" | CorsOriginString;

export interface CorsProps {
  origin: CorsOrigin;
  methods: string[];
  headers: string[];
  credentials: boolean;
  statusCode: number;
}

const corsDefaults: CorsProps = {
  origin: "header",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  headers: [
    "origin",
    "content-type",
    "accept",
    "authorization",
    "cache-control",
    "referrer",
  ],
  credentials: true,
  statusCode: 200,
};

export const cors = <Req extends Request>(props: Partial<CorsProps> = {}) => (
  next: Handler<Req, Response>
): Handler<Req, Response> => async (
  req: Req,
  context: Context
): Promise<Option<Response>> => {
  const propsWithDefaults = { ...corsDefaults, ...props };
  const headers = corsPropsToHeaders(req, propsWithDefaults);
  if (req.httpMethod === "OPTIONS") {
    return some({
      statusCode: propsWithDefaults.statusCode,
      body: "",
      headers,
    });
  }
  const res = await next(req, context);
  return map<Response, Response>((val) => ({
    ...val,
    headers: {
      ...val.headers,
      ...headers,
    },
  }))(res);
};

function corsPropsToHeaders(req: Request, props: CorsProps) {
  const headers: { [name: string]: string } = {};
  headers["Access-Control-Allow-Origin"] =
    props.origin === "header" ? req.headers["origin"] : props.origin.string;
  headers["Access-Control-Allow-Methods"] = props.methods.join(",");
  headers["Access-Control-Allow-Headers"] = props.headers.join(",");
  headers["Access-Control-Allow-Credentials"] = props.credentials
    ? "true"
    : "false";
  return headers;
}
