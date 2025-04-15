import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    if (url.pathname === "/") {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|logo.jpeg|manifest.json|robots.txt|sitemap.xml).*)",
    ],
};
