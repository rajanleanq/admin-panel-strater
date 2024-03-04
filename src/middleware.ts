import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    let token: string | undefined;
    const pathName: string = request.nextUrl.pathname;

    if (request.cookies.has("token")) {
        token = request.cookies.get("token")?.value;
    } else if (request.headers.get("Authorization")?.startsWith("Bearer ")) {
        token = request.headers.get("Authorization")?.substring(7);
    }

    if (!token && (pathName === "/" || pathName.startsWith("/admin"))) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if (token && (pathName.startsWith("/login") || pathName === "/")) {
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    return NextResponse.next()
};

export const matcher = [

]