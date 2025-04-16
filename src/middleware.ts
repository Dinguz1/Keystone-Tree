import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/Auth"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const searchParams = req.nextUrl.searchParams.get('Player-ID')
    const idList = ["Guest1597!$", "692338DM","1235"]
    const isAuthed = idList.includes(searchParams!)

    // Redirect to Auth page if there is no 'Player-ID' or if the ID doesn't match
    if (!isPublicRoute && !isAuthed) {
        return NextResponse.redirect(new URL('/Auth', req.url))
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