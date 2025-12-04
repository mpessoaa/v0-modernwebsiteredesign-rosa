from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Image
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Criar o PDF
pdf_filename = "public/ebooks/desvendando-violencia-psicologica.pdf"
doc = SimpleDocTemplate(pdf_filename, pagesize=A4,
                        rightMargin=2*cm, leftMargin=2*cm,
                        topMargin=2*cm, bottomMargin=2*cm)

# Container para os elementos
elements = []

# Estilos
styles = getSampleStyleSheet()

# Estilo para título
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    textColor=colors.HexColor('#7c3aed'),
    spaceAfter=30,
    alignment=TA_CENTER,
    fontName='Helvetica-Bold'
)

# Estilo para subtítulo
subtitle_style = ParagraphStyle(
    'CustomSubtitle',
    parent=styles['Heading2'],
    fontSize=14,
    textColor=colors.HexColor('#6b7280'),
    spaceAfter=20,
    alignment=TA_CENTER,
    fontName='Helvetica'
)

# Estilo para cabeçalhos
heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontSize=18,
    textColor=colors.HexColor('#7c3aed'),
    spaceAfter=15,
    spaceBefore=20,
    fontName='Helvetica-Bold'
)

# Estilo para corpo de texto
body_style = ParagraphStyle(
    'CustomBody',
    parent=styles['BodyText'],
    fontSize=11,
    leading=16,
    alignment=TA_JUSTIFY,
    spaceAfter=12,
    fontName='Helvetica'
)

# Estilo para citações
quote_style = ParagraphStyle(
    'CustomQuote',
    parent=styles['BodyText'],
    fontSize=12,
    leading=18,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#7c3aed'),
    spaceAfter=20,
    spaceBefore=10,
    fontName='Helvetica-Oblique',
    leftIndent=30,
    rightIndent=30
)

# CAPA
elements.append(Spacer(1, 3*cm))
elements.append(Paragraph("DESVENDANDO A", title_style))
elements.append(Paragraph("VIOLÊNCIA PSICOLÓGICA", title_style))
elements.append(Spacer(1, 1*cm))
elements.append(Paragraph("Um Guia Completo para Identificar, Compreender e Se Libertar do Abuso Emocional", subtitle_style))
elements.append(Spacer(1, 2*cm))
elements.append(Paragraph("Por: Cristiane Melo", body_style))
elements.append(Paragraph("Psicóloga CRP 06/134855", body_style))
elements.append(PageBreak())

# ÍNDICE
elements.append(Paragraph("Índice", heading_style))
elements.append(Spacer(1, 0.5*cm))
index_items = [
    "01 - O que é Violência Psicológica",
    "02 - Sinais de Violência Psicológica: Red Flags",
    "03 - Efeitos da Violência Psicológica: Impactos na Saúde Mental",
    "04 - Os Agentes de Violência Psicológica e o Fator D",
    "05 - Como Lidar com a Violência Psicológica: Passos para Buscar Ajuda",
    "06 - Recursos: Organizações de Apoio à Vítima",
    "07 - O que Fazer para se Recuperar dos Abusos: Resiliência e Recuperação"
]
for item in index_items:
    elements.append(Paragraph(item, body_style))
    elements.append(Spacer(1, 0.3*cm))
elements.append(PageBreak())

# INTRODUÇÃO
elements.append(Paragraph("Introdução", heading_style))
intro_text = """A violência psicológica é tão naturalizada na nossa sociedade que grande parte das pessoas não tem consciência dessa forma de violência e do impacto que ela traz para a saúde mental e emocional."""
elements.append(Paragraph(intro_text, body_style))
elements.append(Spacer(1, 0.5*cm))

intro_text2 = """É comum observar pessoas reproduzindo alguns comportamentos abusivos como se fossem brincadeiras, mas brincar não fere ninguém, o abuso psicológico é grave, nocivo para as vítimas e deve ser extirpado."""
elements.append(Paragraph(intro_text2, body_style))
elements.append(Spacer(1, 0.5*cm))

quote_text = '''"A MELHOR FORMA DE EVITAR QUE UM PRISIONEIRO ESCAPE É GARANTINDO QUE ELE NUNCA DESCUBRA QUE ESTÁ NA PRISÃO."<br/><i>— FYODOR DOSTOEVSKY</i>'''
elements.append(Paragraph(quote_text, quote_style))
elements.append(Spacer(1, 0.5*cm))

intro_text3 = """A falta de informação impede a identificação da violência, a interrupção dos abusos e também o tratamento das sequelas deixadas, isso leva ao adoecimento e coloca as vítimas em risco."""
elements.append(Paragraph(intro_text3, body_style))
elements.append(Spacer(1, 0.5*cm))

intro_text4 = """O objetivo desse guia é facilitar a conscientização, o acesso a informação e oferecer apoio as vítimas."""
elements.append(Paragraph(intro_text4, body_style))
elements.append(PageBreak())

# CAPÍTULO 01
elements.append(Paragraph("01", title_style))
elements.append(Paragraph("O que é Violência Psicológica", heading_style))
elements.append(Spacer(1, 0.5*cm))

cap1_text = """Envolve o uso de comportamentos e táticas não físicas para controlar, manipular, diminuir, intimidar ou humilhar uma pessoa, causando danos à sua saúde mental e emocional."""
elements.append(Paragraph(cap1_text, body_style))
elements.append(Spacer(1, 0.5*cm))

cap1_text2 = """Esse tipo de violência pode ocorrer em diversos contextos, como relacionamentos íntimos, amizades, relações familiares, no ambiente de trabalho, na escola, entre outros."""
elements.append(Paragraph(cap1_text2, body_style))
elements.append(Spacer(1, 0.8*cm))

elements.append(Paragraph("Exemplos de Comportamentos Abusivos:", ParagraphStyle('BoldBody', parent=body_style, fontName='Helvetica-Bold')))
elements.append(Spacer(1, 0.3*cm))

behaviors = [
    ("<b>Humilhação e Desvalorização:</b>", "Fazer comentários depreciativos, zombar do peso, da aparência, das habilidades ou das opiniões da vítima."),
    ("<b>Ameaças Verbais:</b>", "Gritar, fazer chantagem, ameaças de violência física, de abandono ou de expor e prejudicar a vítima."),
    ("<b>Isolamento Social:</b>", "Afastar e isolar a vítima de amigos, familiares e sistemas de apoio."),
    ("<b>Controle Excessivo:</b>", "Monitorar atividades da vítima, suas comunicações, aonde vai e com quem interage."),
    ("<b>Manipulação:</b>", "Usar táticas para fazer a vítima acreditar que está errada, louca ou culpada (gaslighting)."),
    ("<b>Intimidação:</b>", "Usar o medo, ameaça ou demonstração de raiva para controlar a vítima."),
    ("<b>Negligência Emocional:</b>", "Ignorar necessidades emocionais da vítima, como carinho, atenção e afeto."),
]

for title, desc in behaviors:
    elements.append(Paragraph(f"{title} {desc}", body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# DIFERENÇAS DA VIOLÊNCIA FÍSICA
elements.append(Paragraph("Diferenças da Violência Física", ParagraphStyle('SubHeading', parent=heading_style, fontSize=14)))
elements.append(Spacer(1, 0.5*cm))

diff_text = """A violência psicológica difere da violência física em termos de métodos, efeitos e visibilidade. Aqui estão algumas das principais diferenças:"""
elements.append(Paragraph(diff_text, body_style))
elements.append(Spacer(1, 0.5*cm))

differences = [
    ("<b>1. Natureza não física:</b>", "A violência psicológica não envolve agressões físicas diretas. É baseada em comportamentos verbais, emocionais e psicológicos."),
    ("<b>2. Invisibilidade:</b>", "É mais difícil de identificar. As cicatrizes físicas são visíveis, enquanto os danos da violência psicológica são internos."),
    ("<b>3. Traumas emocionais:</b>", "A principal consequência é o dano à saúde mental e emocional da vítima, podendo causar traumatização."),
    ("<b>4. Duração e Persistência:</b>", "Caracterizada por sua persistência ao longo do tempo, de forma contínua e sutil."),
    ("<b>5. Efeitos na autopercepção:</b>", "Tem como alvo a autoestima e autopercepção da vítima, levando-a a duvidar de si mesma."),
]

for title, desc in differences:
    elements.append(Paragraph(f"{title} {desc}", body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# ESTATÍSTICAS
elements.append(Paragraph("Estatísticas e Prevalência", heading_style))
elements.append(Spacer(1, 0.5*cm))

stat_text = """<b>Violência Psicológica em Relacionamentos Íntimos:</b><br/>Estima-se que uma em cada três mulheres tenha experimentado algum tipo de violência psicológica em um relacionamento íntimo ao longo de suas vidas. O Brasil é o 5º país no mundo com maior índice de feminicídio."""
elements.append(Paragraph(stat_text, body_style))
elements.append(Spacer(1, 0.5*cm))

elements.append(Paragraph("<b>Importante:</b> A violência psicológica é frequentemente subnotificada devido ao seu caráter não físico e ao estigma. Muitas vítimas hesitam em denunciar por medo de julgamento.", body_style))
elements.append(PageBreak())

# CAPÍTULO 02 - RED FLAGS
elements.append(Paragraph("02", title_style))
elements.append(Paragraph("Sinais de Violência Psicológica: Red Flags", heading_style))
elements.append(Spacer(1, 0.5*cm))

red_flags_intro = """Comportamentos abusivos são ações prejudiciais e controladoras que uma pessoa usa para exercer poder sobre outra. Aqui estão os sinais de alerta mais importantes:"""
elements.append(Paragraph(red_flags_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

red_flags = [
    "Te humilha, menospreza e expõe propositalmente ao constrangimento",
    "Te controla, restringe contatos sociais e impede interações com amigos e familiares",
    "Nunca se responsabiliza ou admite culpa - sempre te culpa",
    "Te manipula e faz você se sentir insegura sobre o que está acontecendo",
    "Faz você sentir medo dele, de suas reações ou ameaças",
    "Não atende suas necessidades emocionais, te ignora e não dá afeto",
    "Bombardeia de amor alternando com fases de abuso",
    "Dá o tratamento do silêncio (stonewalling)",
    "Demonstra comportamentos obsessivos ou possessivos",
    "Usa gaslighting para fazer você duvidar da própria sanidade"
]

for i, flag in enumerate(red_flags, 1):
    elements.append(Paragraph(f"{i}. {flag}", body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# COMO A VÍTIMA SE SENTE
elements.append(Paragraph("Como a Vítima Costuma Se Sentir", ParagraphStyle('SubHeading', parent=heading_style, fontSize=14)))
elements.append(Spacer(1, 0.5*cm))

victim_feelings = [
    "Se sente confusa sobre o que está acontecendo",
    "Tem medo de contrariar a pessoa",
    "Se sente presa, indefesa e condenada a aceitar os abusos",
    "Tem pesadelos e sono agitado",
    "Dificuldade em focar e se concentrar",
    "Tensão muscular e enxaqueca",
    "Ansiedade, pânico e mudanças de humor",
    "Flashbacks e memórias negativas intrusivas",
    "Vergonha de admitir o abuso",
    "Desregulação emocional",
    "Pensamentos suicidas"
]

for feeling in victim_feelings:
    elements.append(Paragraph(f"• {feeling}", body_style))
    elements.append(Spacer(1, 0.2*cm))

elements.append(PageBreak())

# CAPÍTULO 03 - IMPACTOS
elements.append(Paragraph("03", title_style))
elements.append(Paragraph("Efeitos da Violência Psicológica: Impactos na Saúde Mental", heading_style))
elements.append(Spacer(1, 0.5*cm))

impact_intro = """Sofrer violência psicológica afeta profundamente a saúde mental das vítimas. Aqui estão alguns dos impactos mais comuns:"""
elements.append(Paragraph(impact_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

impacts = [
    ("<b>Depressão:</b>", "A vítima pode sentir-se desesperançada, triste e sem energia. Em casos severos, pode perder o sentido de vida."),
    ("<b>Ansiedade:</b>", "Estado constante de ansiedade, preocupação com o próximo ataque verbal ou emocional."),
    ("<b>Baixa Autoestima:</b>", "A vítima começa a acreditar nas mensagens negativas do agressor, levando a autocrítica intensa."),
    ("<b>TEPT:</b>", "Pode desenvolver sintomas como flashbacks emocionais, pesadelos e hipervigilância."),
    ("<b>Isolamento Social:</b>", "Pode levar à solidão e falta de apoio emocional."),
    ("<b>Problemas Físicos:</b>", "Dores pelo corpo, cansaço, dores de cabeça crônicas, distúrbios gastrointestinais, insônia."),
    ("<b>Dependência de Substâncias:</b>", "Pode recorrer ao uso de substâncias como forma de anestesia emocional."),
    ("<b>Transtornos Alimentares:</b>", "Compulsão alimentar, bulimia."),
    ("<b>Culpa e Vergonha:</b>", "A vítima pode se culpar pelo abuso sofrido."),
]

for title, desc in impacts:
    elements.append(Paragraph(f"{title} {desc}", body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# CICLO DA VIOLÊNCIA
elements.append(Paragraph("Ciclo da Violência e Seus Efeitos", heading_style))
elements.append(Spacer(1, 0.5*cm))

cycle_intro = """O ciclo da violência envolve uma série de fases que tendem a se repetir:"""
elements.append(Paragraph(cycle_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

phases = [
    ("<b>Fase 1: Acumulação de Tensão</b>", "A tensão começa a se acumular. O abusador introduz os abusos lenta e progressivamente."),
    ("<b>Fase 2: Incidente Violento</b>", "A tensão atinge um ponto crítico com gritos, explosões de raiva, xingamentos, humilhação."),
    ("<b>Fase 3: Lua de Mel</b>", "O agressor demonstra remorso, faz promessas, dá presentes, pede desculpas. Volta a ser encantador."),
]

for title, desc in phases:
    elements.append(Paragraph(f"{title}<br/>{desc}", body_style))
    elements.append(Spacer(1, 0.4*cm))

important_note = """<b>Importante:</b> Este ciclo tende a se repetir, com as fases de acúmulo de tensão, incidente violento e lua de mel ocorrendo repetidamente. O intervalo entre as fases diminui com o tempo."""
elements.append(Paragraph(important_note, body_style))
elements.append(PageBreak())

# CAPÍTULO 04 - FATOR D
elements.append(Paragraph("04", title_style))
elements.append(Paragraph("Os Agentes de Violência Psicológica e o Fator D", heading_style))
elements.append(Spacer(1, 0.5*cm))

factor_d_intro = """O Fator D é um modelo da psicologia que explica os 9 traços sombrios que estão por trás de comportamentos ética, moral e socialmente questionáveis:"""
elements.append(Paragraph(factor_d_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

dark_traits = [
    "<b>Psicopatia:</b> Falta de empatia, impulsividade, emoções superficiais",
    "<b>Desengajamento Moral:</b> Mentir, enganar, explorar sem culpa",
    "<b>Egoísmo:</b> Preocupação excessiva apenas com o próprio prazer",
    "<b>Narcisismo:</b> Sentimento de superioridade e grandiosidade",
    "<b>Privilégio Psicológico:</b> Crença de merecer mais que os outros",
    "<b>Sadismo:</b> Infligir dor física ou psicológica por prazer",
    "<b>Maquiavelismo:</b> Enganar e manipular estrategicamente",
    "<b>Egocentrismo:</b> Foco obsessivo em ascensão social e poder",
    "<b>Perversidade:</b> Prejudicar outros por vingança"
]

for trait in dark_traits:
    elements.append(Paragraph(trait, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(Spacer(1, 0.5*cm))
factor_note = """<b>Importante:</b> Quanto mais evidente qualquer um desses traços, mais alto é o Fator D e mais tóxica se torna a pessoa. Os traços de personalidade sombrios são resistentes a mudança."""
elements.append(Paragraph(factor_note, body_style))
elements.append(PageBreak())

# CAPÍTULO 05 - COMO LIDAR
elements.append(Paragraph("05", title_style))
elements.append(Paragraph("Como Lidar com a Violência Psicológica", heading_style))
elements.append(Spacer(1, 0.5*cm))

steps_intro = """Lidar com a violência psicológica é desafiador, mas buscar ajuda são passos fundamentais. Aqui estão os passos:"""
elements.append(Paragraph(steps_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

steps = [
    "1. Reconheça a Violência Psicológica",
    "2. Estabeleça Limites Pessoais",
    "3. Converse com Alguém de Confiança",
    "4. Busque Ajuda Profissional",
    "5. Crie um Plano de Segurança",
    "6. Conheça Seus Direitos e Recursos Legais",
    "7. Apoie-se na Rede de Apoio",
    "8. Documente o Abuso",
    "9. Considere um Distanciamento Seguro",
    "10. Entre em Contato com Organizações de Apoio",
    "11. Denuncie o Abuso, se Apropriado",
    "12. Priorize Sua Segurança"
]

for step in steps:
    elements.append(Paragraph(step, body_style))
    elements.append(Spacer(1, 0.2*cm))

elements.append(PageBreak())

# CAPÍTULO 06 - RECURSOS
elements.append(Paragraph("06", title_style))
elements.append(Paragraph("Recursos: Organizações de Apoio à Vítima", heading_style))
elements.append(Spacer(1, 0.5*cm))

resources_intro = """No Brasil, algumas organizações oferecem apoio a vítimas de violência psicológica e doméstica:"""
elements.append(Paragraph(resources_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

resources = [
    ("<b>Central de Atendimento à Mulher - Disque 180:</b>", "Disponível 24h por dia, 7 dias por semana. WhatsApp: (61) 9610-0180. E-mail: central180@mulheres.gov.br"),
    ("<b>Casa da Mulher Brasileira:</b>", "Espaços que oferecem apoio jurídico, psicológico e assistencial em várias cidades."),
    ("<b>Instituto Maria da Penha:</b>", "Trabalha na prevenção e combate à violência doméstica."),
    ("<b>Delegacia da Mulher:</b>", "Para denúncias e medidas protetivas."),
]

for title, desc in resources:
    elements.append(Paragraph(f"{title} {desc}", body_style))
    elements.append(Spacer(1, 0.4*cm))

elements.append(PageBreak())

# CAPÍTULO 07 - RECUPERAÇÃO
elements.append(Paragraph("07", title_style))
elements.append(Paragraph("O que Fazer para se Recuperar dos Abusos", heading_style))
elements.append(Spacer(1, 0.5*cm))

recovery_intro = """A resiliência e a recuperação após sofrer violência psicológica são possíveis. Princípios-chave para sua recuperação:"""
elements.append(Paragraph(recovery_intro, body_style))
elements.append(Spacer(1, 0.5*cm))

recovery_steps = [
    "1. Autoconhecimento e Aceitação",
    "2. Saia do Isolamento",
    "3. Pratique o Autocuidado",
    "4. Estabeleça Limites Pessoais",
    "5. Elabore o Luto",
    "6. Reconstrua Sua Autoestima",
    "7. Aprenda com suas Experiências",
    "8. Pratique a Autocompaixão",
    "9. Mantenha o Foco no Presente",
    "10. Ressignifique suas Crenças"
]

for step in recovery_steps:
    elements.append(Paragraph(step, body_style))
    elements.append(Spacer(1, 0.2*cm))

elements.append(Spacer(1, 0.5*cm))
recovery_note = """<b>O processo de recuperação é único para cada pessoa e leva tempo. A recuperação é possível, e você merece viver uma vida saudável e feliz.</b>"""
elements.append(Paragraph(recovery_note, body_style))
elements.append(PageBreak())

# MENSAGEM FINAL
elements.append(Paragraph("Mensagem Final", heading_style))
elements.append(Spacer(1, 0.5*cm))

final_message = """<b>Não é Coisa da Sua Cabeça!<br/>A Culpa Não é Sua!<br/>Você Não Está Louca!<br/>Amor não machuca!</b>"""
elements.append(Paragraph(final_message, quote_style))
elements.append(Spacer(1, 1*cm))

closing = """Se você está enfrentando os efeitos da violência psicológica, saiba: existe saída — e você não está sozinha. Você é valiosa. Merece respeito, amor e segurança. A culpa nunca foi sua."""
elements.append(Paragraph(closing, body_style))
elements.append(Spacer(1, 0.5*cm))

contact = """<b>Cristiane Abreu Melo</b><br/>Psicóloga CRP 06/134855<br/>Especialista em violências contra a mulher<br/>@psicrismelo · crismelopsico@gmail.com<br/>(19) 99614-4687"""
elements.append(Paragraph(contact, body_style))

# Gerar o PDF
doc.build(elements)
print(f"PDF gerado com sucesso: {pdf_filename}")
