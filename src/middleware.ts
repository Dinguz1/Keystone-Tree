import { NextRequest, NextResponse } from "next/server";
import { getAuthLevel } from "./lib/utils";

const publicRoutes = ["/auth"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const searchParams = req.nextUrl.searchParams.get('Player-ID')

    // Redirect to Auth page if there is no 'Player-ID' or if the ID doesn't match
    const authLevel = getAuthLevel(searchParams)

    if (!isPublicRoute && authLevel === -1) {
        return NextResponse.redirect(new URL('/auth', req.url))
    }
}

export const config = {
    matcher: [
      // Exclude files with a "." followed by an extension, which are typically static files.
      // Exclude files in the _next directory, which are Next.js internals.
      "/((?!.+\\.[\\w]+$|_next).*)",
      // Re-include any files in the api or trpc folders that might have an extension
      "/(api|trpc)(.*)"
    ]
};