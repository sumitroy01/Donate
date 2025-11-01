// lib/jwttoken.js
import jwt from "jsonwebtoken";

/**
 * generateToken(userId, res?, opts?)
 *
 * - userId: user._id or string id
 * - res: optional Express response object. If provided, a cookie "jwt" will be set.
 * - opts: optional object { expiresInSec, cookieOptions }
 *
 * Returns the signed token string.
 */
export function generateToken(userId, res = null, opts = {}) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET not set in env");

  const expiresInSec = opts.expiresInSec || Number(process.env.JWT_EXPIRES_IN_SEC) || 60 * 60 * 24 * 7; // default 7 days
  const token = jwt.sign({ userID: String(userId) }, secret, { expiresIn: expiresInSec });

  // If response provided, set cookie as well for cookie-based auth
  if (res) {
    const defaultCookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // set secure in prod (requires HTTPS)
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: expiresInSec * 1000,
      path: "/", // cookie valid site-wide
    };

    const cookieOptions = { ...defaultCookieOptions, ...(opts.cookieOptions || {}) };
    res.cookie("jwt", token, cookieOptions);
  }

  return token;
}
