//middleware to check if user is authenticated, checks what api routes are available to user
/**
 * check if token
 * if token, decode, grab userRole
 * put it in request user
 * if user has access (allowedRoles)
 * then move on to the next
 */

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
interface DecodedToken extends JwtPayload {
  sub: string;
  "custom:role"?: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: string;
      }
    }
  }
}

//grabbing authorization token from api.ts frontend
export const authMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({message: "Unauthorized"});
      return;
    }

    try {
      const decoded = jwt.decode(token) as DecodedToken
      const userRole = decoded["custom:role"] || "";
      req.user = {
        id: decoded.sub,
        role: userRole
      }

      const hasAccess = allowedRoles.includes(userRole.toLowerCase());
      if (!hasAccess) {
        res.status(403).json({ message: "Access Denied"});
        return;
      }
    } catch (error) {
      console.error("Failed to decode token", error);
      res.status(401).json({message: "Invalid token"});
      return;
    }

    next();
  };
};