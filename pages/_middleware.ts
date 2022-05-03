import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  // Clone the request url
  const url = req.nextUrl.clone();

  console.log({ url });

  // Get pathname of request (e.g. /blog-slug)
  const { pathname } = req.nextUrl;
  console.log({ pathname });


  // Get hostname of request (e.g. demo.vercel.pub)
  const hostname = req.headers.get("host");
  if (!hostname)
    return new Response(null, {
      status: 400,
      statusText: "No hostname found in request headers",
    });
  console.log({ hostname });


  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1" ?
      hostname
        .replace(`.nextjs-multi-tenant.vercel.app`, "")
      : hostname.replace(`.localhost:3000`, "");


  console.log({ currentHost });

  // if (!pathname.includes(".") && !pathname.startsWith("/api")) {
  //   url.pathname = `/_sites/${currentHost}${pathname}`;
  //   return NextResponse.rewrite(url);

  // }

  return NextResponse.rewrite(url);

}