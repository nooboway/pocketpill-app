import type { Request, Response, NextFunction } from "express";

const ADMIN_SECRET =
  process.env.ADMIN_SECRET ?? "pocketpill2025";

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const token = auth.slice(7);
  if (token !== ADMIN_SECRET) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}
