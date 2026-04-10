import fs from "fs"
import path from "path"
import { NextResponse } from "next/server"

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "resume.pdf")

  try {
    const data = await fs.promises.readFile(filePath)

    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="resume.pdf"',
      },
    })
  } catch (err) {
    return new NextResponse("Not Found", { status: 404 })
  }
}
