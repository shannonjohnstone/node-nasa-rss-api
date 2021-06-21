import { Request, Response, NextFunction } from "express";

// Async util for catching and passing errors to error handler
function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) {
  return function (req: Request, res: Response, next: NextFunction): Promise<unknown> {
    return fn(req, res, next).catch(next);
  };
}

export {
  asyncHandler
};