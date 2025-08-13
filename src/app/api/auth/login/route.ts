import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST (req: NextRequest) {
    const { playerId } = await req.json()
    console.log('playerId', playerId)
    const cookieStore = await cookies()

    // // Create a cookie storing the playerId that expires in 1 week
    cookieStore.set('playerId', playerId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        secure: true
    })

    // console.log('playerId: ', cookieStore.get('playerId'))

    return NextResponse.json({ message: `User with id ${playerId} authenticated`}, { status: 200 })
}