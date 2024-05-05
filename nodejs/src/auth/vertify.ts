import { NextFunction, Request, Response } from "express";

const whiteList = ["/public/"];
// 权限校验
export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.token;

  const { path } = req;
  const target = whiteList.find((e) => {
    if (path.toLowerCase().startsWith(e)) {
      return e;
    } else {
      return null;
    }
  });
  if (token || target) {
    next();
  } else {
    res.status(403).send("No permission, please log in");
  }
};
