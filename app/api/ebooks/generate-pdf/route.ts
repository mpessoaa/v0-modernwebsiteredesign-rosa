import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const ebookId = searchParams.get("id")

  if (!ebookId) {
    return NextResponse.json({ error: "ID do e-book é obrigatório" }, { status: 400 })
  }

  const ebookContent: Record<string, { title: string; content: string; filename: string }> = {
    "violencia-psicologica": {
      title: "Desvendando a Violência Psicológica",
      filename: "Desvendando-Violencia-Psicologica.pdf",
      content: `
DESVENDANDO A VIOLÊNCIA PSICOLÓGICA
=====================================

Um guia completo sobre violência psicológica nas relações afetivas.

CAPÍTULO 1: O que é Violência Psicológica?
-------------------------------------------
A violência psicológica é uma forma de agressão que não deixa marcas físicas visíveis, 
mas causa danos profundos na saúde mental e emocional da vítima.

CAPÍTULO 2: Sinais de Violência Psicológica
--------------------------------------------
- Manipulação constante
- Humilhação e desvalorização
- Controle excessivo
- Isolamento social
- Gaslighting

CAPÍTULO 3: Como Buscar Ajuda
------------------------------
É fundamental reconhecer os sinais e buscar apoio profissional.

Para mais informações e orientação, entre em contato.
      `.trim(),
    },
    "quando-amor-adoece": {
      title: "Quando o Amor Adoece",
      filename: "Quando-Amor-Adoece.pdf",
      content: `
QUANDO O AMOR ADOECE
====================

Compreendendo relacionamentos tóxicos e como se libertar deles.

CAPÍTULO 1: Relacionamentos Tóxicos
------------------------------------
Nem todo relacionamento é saudável. Identificar padrões tóxicos é o primeiro passo.

CAPÍTULO 2: Sinais de Alerta
-----------------------------
- Ciúmes excessivos
- Falta de respeito
- Dependência emocional
- Comunicação destrutiva
- Falta de limites

CAPÍTULO 3: Caminhos para a Cura
---------------------------------
Recuperar-se de um relacionamento tóxico requer tempo, apoio e autocompaixão.

Busque ajuda profissional para iniciar sua jornada de cura.
      `.trim(),
    },
  }

  const ebook = ebookContent[ebookId]

  if (!ebook) {
    return NextResponse.json({ error: "E-book não encontrado" }, { status: 404 })
  }

  const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/Resources <<
/Font <<
/F1 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
/F2 <<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Bold
>>
>>
>>
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj
4 0 obj
<<
/Length ${ebook.content.length + 200}
>>
stream
BT
/F2 18 Tf
50 750 Td
(${ebook.title}) Tj
0 -30 Td
/F1 12 Tf
(${ebook.content.substring(0, 500)}) Tj
ET
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000366 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
${500 + ebook.content.length}
%%EOF`

  const pdfBuffer = Buffer.from(pdfContent, "utf-8")

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${ebook.filename}"`,
      "Content-Length": pdfBuffer.length.toString(),
      "Cache-Control": "no-cache",
    },
  })
}
