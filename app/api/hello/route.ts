import { NextResponse } from "next/server";

export async function GET() {
	const data = { hello: "This is test!" };
	return NextResponse.json(data);
}
