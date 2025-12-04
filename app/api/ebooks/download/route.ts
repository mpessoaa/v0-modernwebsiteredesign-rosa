import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const ebookId = searchParams.get("id")

    console.log("[v0] GET Download request received for:", ebookId)

    if (!ebookId) {
      return NextResponse.json({ error: "ID do e-book é obrigatório" }, { status: 400 })
    }

    const ebookFiles: Record<string, { filename: string; path: string }> = {
      "violencia-psicologica": {
        filename: "Desvendando-Violencia-Psicologica.pdf",
        path: "/ebooks/desvendando-violencia-psicologica.pdf",
      },
      "quando-amor-adoece": {
        filename: "Quando-Amor-Adoece.pdf",
        path: "/ebooks/quando-amor-adoece.pdf",
      },
    }

    const ebookInfo = ebookFiles[ebookId]

    if (!ebookInfo) {
      console.error("[v0] Invalid ebook ID:", ebookId)
      return NextResponse.json({ error: "E-book não encontrado" }, { status: 404 })
    }

    const pdfUrl = `${request.nextUrl.origin}${ebookInfo.path}`
    console.log("[v0] Fetching PDF from:", pdfUrl)

    const pdfResponse = await fetch(pdfUrl)

    if (!pdfResponse.ok) {
      console.error("[v0] PDF fetch failed:", pdfResponse.status)
      return NextResponse.json({ error: "PDF não encontrado no servidor" }, { status: 404 })
    }

    const pdfBlob = await pdfResponse.blob()
    console.log("[v0] PDF blob size:", pdfBlob.size)

    if (pdfBlob.size === 0) {
      console.error("[v0] PDF file is empty")
      return NextResponse.json({ error: "O arquivo PDF está vazio" }, { status: 500 })
    }

    return new NextResponse(pdfBlob, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${ebookInfo.filename}"`,
        "Content-Length": pdfBlob.size.toString(),
      },
    })
  } catch (error) {
    console.error("[v0] Unexpected error in download route:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, ebookId } = await request.json()

    console.log("[v0] Download request received for:", { email, ebookId })

    if (!email || !ebookId) {
      return NextResponse.json({ error: "Email e ID do e-book são obrigatórios" }, { status: 400 })
    }

    const ebookFiles: Record<string, { filename: string; path: string }> = {
      "violencia-psicologica": {
        filename: "Desvendando-Violencia-Psicologica.pdf",
        path: "/ebooks/desvendando-violencia-psicologica.pdf",
      },
      "quando-amor-adoece": {
        filename: "Quando-Amor-Adoece.pdf",
        path: "/ebooks/quando-amor-adoece.pdf",
      },
    }

    const ebookInfo = ebookFiles[ebookId]

    if (!ebookInfo) {
      console.error("[v0] Invalid ebook ID:", ebookId)
      return NextResponse.json({ error: "E-book não encontrado" }, { status: 404 })
    }

    console.log("[v0] Returning PDF path for download:", ebookInfo.path)

    return NextResponse.json({
      success: true,
      pdfPath: ebookInfo.path,
      filename: ebookInfo.filename,
    })
  } catch (error) {
    console.error("[v0] Unexpected error in download route:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
