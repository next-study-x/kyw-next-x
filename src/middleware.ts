import { NextResponse } from "next/server";
import { auth } from "./auth";
// app router 에서는 페이지 접근 권한 부여가 middleware로 편해졌다.

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
  // 미들웨어를 적용할 route -> 공통점 로그인이 필요한 페이지
};
