import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const response = await fetch(
    `https://api.rajaongkir.com/starter/city?id=${``}&province=${params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        key: "fb5fb8d5084dc4227bea565c62e63638",
      },
    }
  );

  const requestData = await response.json();
  return NextResponse.json({ requestData });
}
