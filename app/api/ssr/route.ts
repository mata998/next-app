import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  const random = Math.random();

  return NextResponse.json({ random });
}
