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
    const responseBody = createResponse(string);
    console.log(responseBody);
    console.log("----------------------");
    let res: NextResponse = new NextResponse(JSON.stringify(responseBody));
    return res;
}

function createResponse(input: string) {
    let result = {
        status: 200,
        contents: {}
    };
    let validatedResult = validateURL(input);

    if ( validatedResult.status === 400 ) {
        result.status = 400;
        Object.assign(result.contents, {message: validatedResult.contents.message});
    }
    if ( validatedResult.status === 200 ) {
        let assetInfo = getAssetInfo( validatedResult.contents.id );
        if( assetInfo.status === 400 ) {
            result.status = 400;
            Object.assign(result.contents, {message: assetInfo.contents.message});
        } else {
            Object.assign(result.contents), {assetInfo: assetInfo.contents};
        }
    }
    return result;
}

function validateURL(input: string) {
    const pattern = 'https://jpholic-card-moc.vercel.app/assets/';
    let result = {
        status: 200,
        contents: {
            message: '',
            url: input,
            id: ''
        }
    }
    if(input.indexOf(pattern) === 0) {
        let scannedAssetsId = input.replace(pattern, "");
        result.contents.id = scannedAssetsId;
    } else {
        result.status = 400;
        result.contents.message = 'Error: Input URL is invalid.';
    }
    return result;
}

function getAssetInfo(input: string) {
    let result = {
        status: 200,
        contents: {
            message: '',
            cardId: input,
            title: '',
            sambneil: '',
            url: 'https://jpholic-card-moc.vercel.app/assets/' + input,
        }
    }
    if( input === '1' ) {
        result.contents.title = '一つ目の作品（画像）';
    } else if ( input === '2' ) {
        result.contents.title = '二つ目の作品（動画）';
    } else if( input === '3' ) {
        result.contents.title = '三つ目の作品（ボイスメッセージ）';
    } else {
        result.status = 400;
        result.contents.message = 'Not Found Specified Assets ID';
    }
    return result
}

//export default function handler(req, res) {
//    res.status(200).json({ name: 'John Doe' })
//}