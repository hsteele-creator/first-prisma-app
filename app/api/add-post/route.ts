import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const res = await request.json();
  const { title, content } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: { create: { name: "harry" } },
    },
  });

  return NextResponse.json({ result });
}


export async function DELETE(request: Request) {
    
}
