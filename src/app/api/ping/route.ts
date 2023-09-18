import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    response: 'GET'
  }) 
}

export function POST() {
  return NextResponse.json({
    response: 'POST'
  })
}

export function PUT() {
  return NextResponse.json({
    response: 'PUT'
  })
}

export function DELETE() {
  return NextResponse.json({
    response: 'DELETE'
  })
}