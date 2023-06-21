import { NextResponse } from "next/server";

export async function GET() {
  const random = Math.random();

  return NextResponse.json({ random });
}
