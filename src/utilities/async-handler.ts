import { Request, Response, NextFunction } from "express";

// TODO: come back to this <any>
function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>) {
  return function (req: Request, res: Response, next: NextFunction): Promise<unknown> {
    return fn(req, res, next).catch(next);
  };
}

export {
  asyncHandler
};