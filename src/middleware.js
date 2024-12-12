import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Define protected routes
const protectedPaths = ["/cart", "/CarProducts"];

export default async function middleware(req) {
  // Check if the path is protected
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  // Handle internationalization first
  const response = await intlMiddleware(req);

  // Apply Clerk middleware for protected routes
  if (isProtected) {
    return clerkMiddleware()(req, response);
  }

  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - /api, /_next, /_vercel, /images, /favicon.ico, etc.
    "/((?!api|_next|_vercel|images|favicon.ico).*)",
    // Match all localized pathnames
    "/(ar|en)/:path*",
  ],
};
