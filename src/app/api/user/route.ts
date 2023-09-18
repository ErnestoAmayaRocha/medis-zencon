import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

interface User {
  name: String;
  lastName: String;
  addressLine1: String;
  addressLine2: String;
  zipCode: Number;
  city: String;
  country: String;
  phoneNumber: String;
  email: String;
  password: String;
  wallet: String;
  role: String;
  status: String;
  lat: String;
  lng: String;
}

export async function POST({
  name,
  lastName,
  addressLine1,
  addressLine2,
  zipCode,
  city,
  country,
  phoneNumber,
  email,
  password,
  wallet,
  role,
  status,
  lat,
  lng,
}: User) {
  await connectMongoDB();
  try {
    await User.create({
      name,
      lastName,
      addressLine1,
      addressLine2,
      zipCode,
      city,
      country,
      phoneNumber,
      email,
      password,
      wallet,
      role,
      status,
      lat,
      lng,
    });
    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      msg: "Error al agregar registro",
    });
  }
}

export function PUT() {
  return NextResponse.json({
    response: "PUT",
  });
}

export function DELETE() {
  return NextResponse.json({
    response: "DELETE",
  });
}
