import { Request, Response, NextFunction } from "express";

export function routeNotFound(req: Request, res: Response, next: NextFunction): void {
  const err = new Error("Not Found") as { status?: number };
  err.status = 404;
  next(err); // pass error onto error handler
}