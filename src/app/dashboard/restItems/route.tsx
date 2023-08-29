import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: Request) {
  
  const res = await fetch("http://localhost:3001/apis", {
    cache : "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const restItmes = await res.json();

  
  // Do whatever you want
  return NextResponse.json( restItmes , { status: 200 });
}