import { oauth2 } from "@/lib/config";
import { set } from "@/server/actions/auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // Access query parameters using the URL object
  const code = url.searchParams.get("code");

  if (!code) {
    // Send a 400 status with a message if 'code' is not provided
    return NextResponse.json({ message: "Code parameter is required." }, { status: 500 });
  }

  //get token

  const token = await oauth2.requestToken(code);
  if (!token) {
    return NextResponse.json({ message: "Token unable to request." }, { status: 500 });
  }

  const { access_token } = token;
  await set({ key: "token", value: access_token });

  redirect("/");
}
