import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "hello from blogiz" });
};
export const POST = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "hello from blogiz" });
};
export const DELETE = async () => {
  return NextResponse.json({ message: "hello from blogiz" });
};
export const PUT = async () => {
  return NextResponse.json({ message: "hello from blogiz" });
};
export const PATCH = async () => {
  return NextResponse.json({ message: "hello from blogiz" });
};
