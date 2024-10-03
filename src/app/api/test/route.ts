import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
    // GET /api/users リクエストの処理
    console.log(request);
    let res: NextResponse = new NextResponse('{"name":"John Doe"}');
    return res;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    // POST /api/users リクエストの処理
    console.log("----------------------");
    const string = await new Response(request.body).text();
    console.log(string);
    console.log("----------------------");
    let res: NextResponse = new NextResponse('{"name":"John Doe"}');
    return res;
}

//export default function handler(req, res) {
//    res.status(200).json({ name: 'John Doe' })
//}