import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { setRequestLocale } from "next-intl/server";

const intlMiddleware = createMiddleware(routing);

// Define protected routes
const protectedPaths = ["/cart", "/CarProducts"];

export default async function middleware(req) {
  // Determine the locale from the URL or fallback to a default locale
  const localeMatch = req.nextUrl.pathname.match(/^\/(ar|en)/);
  const locale = localeMatch ? localeMatch[1] : "en"; // Fallback to "en" if no locale is found

  // Set the request locale for static rendering
  setRequestLocale(locale);

  // Handle internationalization first
  const response = await intlMiddleware(req);

  // Check if the path is protected
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

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
