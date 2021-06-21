import { ErrorRequestHandler, Response, Request, NextFunction } from "express";

interface ExpressErrorInterface extends ErrorRequestHandler {
  message?: string
  status?: number
  stack?: unknown
}

export function errorHandler(err: ExpressErrorInterface, req: Request, res: Response, next: NextFunction): void {
  const status = err?.status || 500;

  const error = {
    message: err?.message,
    status,
  };

  // Would only expose this level of detail if development
  // no need to expose this detail in production
  res.status(status).send({
    ...error,
    stackHighlighted: err.stack,
  });
}