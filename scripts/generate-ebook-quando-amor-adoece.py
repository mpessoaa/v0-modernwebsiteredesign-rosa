from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT

# Criar o PDF
pdf_filename = "public/ebooks/quando-amor-adoece.pdf"
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
    fontSize=26,
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
    fontName='Helvetica-Oblique'
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
    leading=18,
    alignment=TA_JUSTIFY,
    spaceAfter=15,
    fontName='Helvetica'
)

# Estilo para poesia
poetry_style = ParagraphStyle(
    'Poetry',
    parent=styles['BodyText'],
    fontSize=11,
    leading=16,
    alignment=TA_LEFT,
    textColor=colors.HexColor('#7c3aed'),
    spaceAfter=12,
    fontName='Helvetica-Oblique',
    leftIndent=40
)

# CAPA
elements.append(Spacer(1, 3*cm))
elements.append(Paragraph("QUANDO O", title_style))
elements.append(Paragraph("AMOR ADOECE", title_style))
elements.append(Spacer(1, 1*cm))
elements.append(Paragraph("A Travessia da Mulher que Espera para a Mulher que Escolhe", subtitle_style))
elements.append(Spacer(1, 2*cm))
elements.append(Paragraph("Cristiane Melo", body_style))
elements.append(Paragraph("Psicóloga e Psicoterapeuta – CRP 06/134855", body_style))
elements.append(PageBreak())

# APRESENTAÇÃO
elements.append(Paragraph("Apresentação", heading_style))
elements.append(Spacer(1, 0.5*cm))

presentation = [
    "Você me encontrou porque farejou o perigo. Porque o seu corpo sussurrou: tem algo errado. Mesmo que ninguém tenha te validado. Mesmo que tenham dito que era exagero, drama, loucura. Mas você sentiu. Sua intuição te guiou até aqui.",
    "Este não é um livro comum. É um espelho. Uma trilha. Um chamado à reconstrução. Você não o lê apenas com os olhos. Lê com as cicatrizes. Com a dor latejante. Com a raiva contida. Com o choro engolido.",
    "Este livro é para mulheres que um dia sonharam com um amor que as salvasse — e acabaram se perdendo de si mesmas. Para aquelas que esperaram demais. Que aceitaram migalhas. Que acreditaram que o amor seria suficiente.",
    "É também para quem já está voltando. Mesmo que ainda tremendo. Mesmo que sem saber como. Aqui, você não vai encontrar um manual. Vai encontrar palavras que dão coordenadas.",
    "Que este livro te faça companhia na travessia."
]

for p in presentation:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# PARTE I - A MULHER QUE ESPERA
elements.append(Paragraph("Parte I", subtitle_style))
elements.append(Paragraph("A Mulher que Espera", heading_style))
elements.append(Spacer(1, 0.5*cm))

part1_intro = [
    "Ela foi ensinada a esperar. O amor, o salvador, o momento certo, o final feliz. Prenderam-na no alto da torre, não com correntes — mas com promessas.",
    "Desde cedo ouviu que, se fosse boazinha, alguém a escolheria. Se fosse paciente, seria recompensada. Se fosse feminina o bastante, dócil o bastante — um homem viria. E então tudo faria sentido.",
    "Mas ela cresceu. E continuou esperando. Até que encontrou aquele que parecia ser o homem dos seus sonhos. Continuou se moldando. Esperar virou identidade. Virou prisão.",
    "Foi assim que ele entrou: dizendo tudo que ela queria ouvir. E quando ela caiu, ele começou a transformar o cuidado em controle.",
]

for p in part1_intro:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# O ESPELHO DISTORCIDO
elements.append(Paragraph("O Espelho Distorcido", heading_style))
elements.append(Spacer(1, 0.5*cm))

mirror_text = [
    "Ela cresceu olhando para si como quem se mede com os olhos dos outros. O espelho nunca foi um reflexo fiel — foi um campo de guerra. Foi ensinada a se odiar antes mesmo de se conhecer.",
    "Quando ele apareceu, ela achou que finalmente havia vencido. Achou que agora poderia descansar da busca. Mas o amor dele também vinha com um espelho. E esse espelho dizia o que ela podia vestir, o que devia mudar, quem deveria ser.",
    "Aos poucos, ela foi deixando de se reconhecer. Passou a ter medo de errar — no tom, na roupa, no riso. Passou a se ver apenas pelos olhos dele.",
    "Até que um dia, o espelho quebrou. E no reflexo estilhaçado, ela viu uma mulher cansada. Triste. Vazia. Mas viu também algo novo. Um fragmento. Uma faísca. Um basta."
]

for p in mirror_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# O ENCANTAMENTO
elements.append(Paragraph("O Encantamento: Quando o Ciclo do Abuso Começa como um Sonho", heading_style))
elements.append(Spacer(1, 0.5*cm))

enchantment = [
    "Ele chegou como um sopro de alívio. Falava de amor, de alma gêmea, fazia planos. Ela, que esperava há tanto, achou que finalmente tinha sido escolhida.",
    "No começo, tudo era encanto. Flores, mensagens, presentes, promessas. Chamava de cuidado o que era controle. Chamava de amor o que era pressa. Chamava de ciúme o que era posse.",
    "E ela, encantada, chamava de destino o que era só estratégia. Ele não chegou gritando. Chegou encantando. E foi assim que começou o ciclo."
]

for p in enchantment:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(Spacer(1, 0.8*cm))
poetry1 = [
    "Ela acreditou na alquimia",
    "Enxergou o brilho",
    "Sem perceber o espelho",
    "Foi se perdendo no encanto",
    "Sem notar o enredo",
    "Achou que era amor",
    "Mas era ilusão perfumada",
    "Era jaula disfarçada de promessas"
]

for line in poetry1:
    elements.append(Paragraph(line, poetry_style))

elements.append(PageBreak())

# PARTE II - A MULHER QUE DESPERTA
elements.append(Paragraph("Parte II", subtitle_style))
elements.append(Paragraph("A Mulher que Desperta", heading_style))
elements.append(Spacer(1, 0.5*cm))

part2_intro = [
    "Quando a raiva começa a descongelar.",
    "Ela sentia o frio há tanto tempo que já achava normal. Frieza nas palavras. Na casa. No olhar dele. Ela ficou ali, congelada — com o medo, a culpa e a esperança empedrados dentro do peito.",
    "Até que um dia, algo acendeu. Não foi um pensamento. Foi uma sensação. Foi o corpo. Foi o calor no ventre. Foi o punho cerrado. Foi a raiva.",
    "E dessa vez, ela não se sentiu errada por senti-la. Ela se sentiu viva. A raiva não a tornou má. A raiva a descongelou."
]

for p in part2_intro:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# O AMOR QUE TE APAGA
elements.append(Paragraph("O Amor que Te Apaga", heading_style))
elements.append(Spacer(1, 0.5*cm))

apaga_text = [
    "Ela acreditava que o amor era luz. Mas ali dentro, tudo foi escurecendo. Aos poucos, sem alarde, ele foi apagando o brilho dela — até ela se tornar só uma sombra da mulher que era.",
    "No começo, ela se sentia vista. Desejada. Mas com o tempo, tudo virou exigência. Ela precisava mudar. Ceder. Calar.",
    "Amar, ali, significava desaparecer. Se apagar para evitar briga. Se moldar para evitar abandono. Se diminuir para caber num espaço onde só ele podia crescer.",
    "Agora, ela começa a enxergar. Não era amor. Era machismo. Era posse. Era consumo. Ela não quer mais um amor que exige sacrifício constante. Ela quer um amor onde ela possa existir inteira."
]

for p in apaga_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# QUANDO O CICLO SE REVELA
elements.append(Paragraph("Quando o Ciclo Se Revela", heading_style))
elements.append(Spacer(1, 0.5*cm))

cycle_text = [
    "Antes, ela achava que estava vivendo algo único. Mas agora, começa a enxergar o padrão. O ciclo do abuso.",
    "A fase do encantamento. O controle disfarçado de cuidado. A manipulação. A confusão. O medo. O arrependimento dele. A reconquista. O recomeço. A repetição.",
    "Ela ouve frases como: 'Eu sou assim porque te amo demais.' 'Você me provoca.' 'Foi só um momento.' 'Você está confundindo as coisas.'",
    "E por amar, ela aceita. Mas a cada volta do ciclo, ela está mais distante de si. Mais perdida. Mais exausta.",
    "E então ela percebe: O amor não machuca. Ninguém fere num dia e cura no outro. O amor não te destrói para depois te oferecer colo.",
    "Ela vê que está num ciclo de violência. Psicológica, invisível, estrutural. E que quanto mais espera, mais difícil se torna sair."
]

for p in cycle_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# A PRISÃO QUE PARECE AFETO
elements.append(Paragraph("A Prisão que Parece Afeto", heading_style))
elements.append(Spacer(1, 0.5*cm))

prison_text = [
    "Ela ainda o defende. Mesmo depois de tudo. Ela diz: 'Ele não é assim o tempo todo.' 'No fundo, ele é uma boa pessoa.' 'Ele já passou por muita coisa.'",
    "Mas isso não é amor. É ligação traumática. Quando o corpo não pode fugir, lutar ou congelar... ele agrada. Ele se adapta. Ele tenta conquistar o agressor — para sobreviver.",
    "É uma criança dentro dela que aprendeu cedo: Se eu agradar, talvez não me machuquem. Se eu for perfeita, talvez me amem.",
    "Mas essa esperança é uma armadilha. É o mesmo ciclo de violência, revestido de afeto. E ela começa a perceber que essa relação se parece demais com a infância.",
    "Ela não está apenas com medo. Está reencenando. Tentando refazer o passado esperando um final diferente. Mas ele não vem.",
    "Porque não é amor que a prende. É a repetição de um trauma. E ela não quer mais viver no passado. Quer seguir em frente."
]

for p in prison_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# QUANDO O AMOR VICIA
elements.append(Paragraph("Quando o Amor Vicia", heading_style))
elements.append(Spacer(1, 0.5*cm))

vicia_text = [
    "Você não está apaixonada. Está viciada. Viciada no 'morde e assopra', na adrenalina da dúvida. No frio na barriga que vem do medo, não da excitação.",
    "É uma química. Uma oscilação. Uma droga emocional. O corpo se acostuma com os picos e as quedas. E quanto mais ele te dá pequenas doses de afeto, entre grandes abismos de silêncios, mais você se agarra às migalhas.",
    "Ele te dá um pouco — e você volta. Ele te ignora — e você se curva. Ele te beija — e você esquece. Ele te humilha — e você justifica.",
    "Mas agora você começa a perceber. O 'fogo' que você sentia não era paixão. Era familiaridade com o desespero. Era o sistema nervoso em alerta. Era um ciclo de abuso — fantasiado de amor.",
    "Você não é fraca. Você está viciada. E vícios se tratam com ruptura, consciência, resiliência e amor próprio."
]

for p in vicia_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# A INFÂNCIA MOLDA O AMOR
elements.append(Paragraph("A Infância Molda o Amor", heading_style))
elements.append(Spacer(1, 0.5*cm))

infancia_text = [
    "Ela achava que estava apaixonada. Achava que o amava de verdade. Mas agora entende: Não era só ele. Era o que ele ativava.",
    "Era o pai ausente. Eram os abusos familiares. Era o olhar que nunca veio. Era a espera pela validação que nunca chegou.",
    "Ela percebe que não está apenas tentando amar um homem. Está tentando ser amada por uma figura que lembra o que faltou.",
    "Ela escolhe, inconscientemente, o homem que pode reencenar o trauma original. Porque, lá no fundo, ainda acredita que se conseguir ser amada dessa vez, a ferida se fecha.",
    "Mas a ferida não fecha com repetição. Ela só cicatriza com verdade. Com ruptura. Com presença. Com cuidado adequado.",
    "E ela começa a ver que não é culpa dela. Foi condicionada. Programada para agradar, esperar, se anular, servir.",
    "Mas agora, o roteiro está exposto. E com os olhos da adulta, ela começa a dizer: Eu não quero mais amar para me curar. Eu quero me curar para poder amar."
]

for p in infancia_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# POESIA INTERMEDIÁRIA
elements.append(Spacer(1, 1*cm))
poetry2 = [
    "Me ensinaram",
    "A me culpar até por ter sido ferida",
    "Como se a dor fosse castigo",
    "Como se o silêncio fosse escolha",
    "Como se a violência fosse um erro meu",
    "",
    "Carreguei a culpa como quem carrega herança",
    "Sem saber que podia recusar o peso",
    "",
    "Mas hoje",
    "Eu coloco essa caixa de culpa no chão",
    "E a liberto para que possa voar",
    "",
    "Não sou a causa do que me feriu",
    "Sou o fim do que me calou",
    "Àquela capaz de transformar"
]

for line in poetry2:
    if line == "":
        elements.append(Spacer(1, 0.3*cm))
    else:
        elements.append(Paragraph(line, poetry_style))

elements.append(PageBreak())

# PARTE III - A MULHER QUE ESCOLHE
elements.append(Paragraph("Parte III", subtitle_style))
elements.append(Paragraph("A Mulher que Escolhe", heading_style))
elements.append(Spacer(1, 0.5*cm))

part3_intro = [
    "Ela não é mais a que espera. Nem apenas a que desperta. Ela agora escolhe. Mesmo com medo. Mesmo com dúvidas.",
    "Ela começa a dizer 'sim' para o que a nutre e 'não' para tudo que a diminui. Não é uma revolução barulhenta. É uma reconquista silenciosa. Uma alquimia de dentro para fora.",
    "Ela não quer mais mendigar afeto. Quer caminhar ao lado. Quer tocar o mundo com a inteireza de quem voltou para si.",
    "Ela voltou para si. Depois de tanto se perder nos outros, de se dobrar, se apagar, se moldar, ela agora olha no espelho com os próprios olhos.",
    "Ela já não quer mais ser salva. Quer ser livre. Quer ser inteira. Quer ser."
]

for p in part3_intro:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# A MULHER QUE AMA SEM SE ABANDONAR
elements.append(Paragraph("A Mulher que Ama Sem Se Abandonar", heading_style))
elements.append(Spacer(1, 0.5*cm))

love_text = [
    "Ela já se calou demais para manter a paz. Já se curvou para ser aceita. Já se perdeu para ser escolhida.",
    "Hoje, ela sabe: Amor não invade. Amor não machuca. Amor que exige silêncio não é cuidado. Amor que exige sacrifício constante não é parceria.",
    "Ela pode amar. E ainda assim manter limites. Ela pode se entregar. E ainda assim se ouvir. Ela pode cuidar. E ainda assim se proteger.",
    "Porque agora ela não se dissolve mais dentro de ninguém. Não é anexo, é edifício inteiro. Agora ela caminha ao lado — não atrás. Não abaixo.",
    "Ela não precisa mais provar o que sente. Nem aceitar o que a diminui. Ela quer o que cresce junto, não o que consome.",
    "E se não houver esse amor, ela fica com o dela. Porque agora ela sabe: estar com alguém não pode custar estar com ela mesma."
]

for p in love_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# A MULHER QUE SE BASTA
elements.append(Paragraph("A Mulher que Se Basta, Mas Escolhe Compartilhar", heading_style))
elements.append(Spacer(1, 0.5*cm))

basta_text = [
    "Ela não precisa mais de alguém para existir. Não busca mais amor como salvação, como escudo, como casa. Porque agora, a casa é ela.",
    "Ela aprendeu a ficar só. E no silêncio, se ouviu. Na solidão, se abraçou. Na ausência, se reconstruiu.",
    "Ela não espera mais ser completada. Não sonha com metades. Ela é abundante, transborda.",
    "E por isso, agora pode escolher a vida que quer. Escolher amar sem medo de perder. Escolher alguém que não precise dela — mas a veja e a admire. Que não a salve — mas a respeite.",
    "Ela não busca mais companhia para fugir do vazio. Ela tem o próprio universo pulsando por dentro.",
    "Ela se basta. Mas se quiser, compartilha."
]

for p in basta_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# POESIA FINAL
elements.append(Spacer(1, 1*cm))
poetry3 = [
    "Ela não espera mais",
    "Não implora, não empurra porta fechada",
    "Ela semeia e espera florescer",
    "",
    "Ela não mendiga amor",
    "Ela cuida do próprio jardim",
    "E se alguém quiser chegar",
    "Que chegue inteiro",
    "",
    "Porque agora",
    "Ela não planta mais em terra seca",
    "E não aceita mais colher dor",
    "",
    "Ela aprendeu",
    "A escolher quem também rega",
    "Quem também floresce",
    "Acolhe borboletas",
    "E compartilha frutos doces"
]

for line in poetry3:
    if line == "":
        elements.append(Spacer(1, 0.3*cm))
    else:
        elements.append(Paragraph(line, poetry_style))

elements.append(PageBreak())

# SER DOCE ERA A ARMADILHA
elements.append(Paragraph("Ser Doce Era a Armadilha", heading_style))
elements.append(Spacer(1, 0.5*cm))

doce_text = [
    "Ela foi elogiada por ser boazinha. Por ceder. Por não levantar a voz. Por compreender até o que a machucava. Por saber seu lugar. Mas esse lugar era sempre abaixo.",
    "Era o mundo ensinando ela a aceitar o abuso como se fosse afeto. Ela não foi criada pra se proteger. Foi criada pra agradar. Pra apaziguar. Pra sobreviver.",
    "Ela viu a mãe fazer o mesmo. Aprendeu no corpo o que não disseram em palavras. Que mulher que bate de frente assusta. Que mulher que desobedece é difícil.",
    "E ela queria pertencer. Queria ser aceita. Queria ser amada. Mas ninguém contou que açúcar em excesso amarga.",
    "Agora ela sabe: ela só estava acordando. Desobedecer é o primeiro passo da liberdade. Sentir raiva é um sinal de vida. Colocar limite é ato de amor-próprio.",
    "Ela ainda pode ser flor — mas também espinho. Ela ainda pode ser rio — mas também tempestade. Ser doce não é sua única face. Ela é mulher inteira. E inteira, ela não cabe mais em pote de açúcar."
]

for p in doce_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# DESPEDIDA
elements.append(Paragraph("Despedida", heading_style))
elements.append(Spacer(1, 0.5*cm))

despedida = [
    "Você chegou até aqui. Não por acaso. Não porque era leve. Mas porque algo dentro de você sabia: era hora de voltar pra casa. Pra dentro.",
    "Você atravessou sombras, silêncios, ilusões e camadas de dor. Reconheceu feridas. Deu nome aos fantasmas. Olhou no espelho com coragem. Desfez encantamentos.",
    "E se libertou — não de uma vez, mas em partes. Esse livro não foi um manual. Foi espelho, trilha, ritual. Foi um fio estendido entre a mulher que esperava e a mulher que agora escolhe.",
    "E agora, é tempo de seguir. Com as palavras que te tocaram, com os rituais que te despertaram, e com tudo aquilo que você não vai mais aceitar.",
    "Você não é a mesma. E mesmo que o mundo tente te moldar de novo, agora você sabe voltar.",
    "Se este livro foi semente, que você seja terra fértil. Se foi espelho, que você agora se veja com os próprios olhos. Se foi fogo, que você siga queimando o que não é seu. E se foi casa, que você nunca mais se abandone."
]

for p in despedida:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(PageBreak())

# SE VOCÊ QUISER SEGUIR
elements.append(Paragraph("Se Você Quiser Seguir...", heading_style))
elements.append(Spacer(1, 0.5*cm))

seguir_text = [
    "Essa travessia não termina aqui. Ela só muda de forma. Se este livro te tocou, te despertou ou te deixou com mais perguntas do que respostas... saiba que há caminhos possíveis.",
    "E você não precisa fazer isso sozinha."
]

for p in seguir_text:
    elements.append(Paragraph(p, body_style))
    elements.append(Spacer(1, 0.3*cm))

elements.append(Spacer(1, 0.5*cm))
contact_final = """<b>Você pode continuar essa jornada comigo através de:</b><br/><br/>• Sessões individuais de psicoterapia<br/>• Rodas de conversa para mulheres<br/>• Vivências temáticas/rituais em grupo<br/><br/><b>Contato:</b><br/>crismelopsico@gmail.com<br/>@psicrismelo<br/>(19) 99614-4687<br/><br/><b>Cristiane Melo</b><br/>Psicóloga e Psicoterapeuta – CRP 06/134855<br/>Especializanda em violências contra a mulher e traumas emocionais."""
elements.append(Paragraph(contact_final, body_style))

# Gerar o PDF
doc.build(elements)
print(f"PDF gerado com sucesso: {pdf_filename}")
