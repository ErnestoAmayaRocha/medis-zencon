`use client`;
import User from "@/models/user.model";
import { NextApiRequest } from "next";
import { useParams, useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: any, res: any) {
  try {
    const { userId } = res.params;
    const usuario = await User.findById(userId);
    
    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
    });
  }
}
