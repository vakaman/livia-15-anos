import { buildAssetPath } from "../utils/assets.js";

const imagePath = (fileName) => buildAssetPath(fileName);

export const invitationContent = {
  brandLabel: "LÍVIA 15",
  contactPhone: "51995681257",
  hero: {
    eyebrow: "08 de Maio de 2026",
    title: "Lívia",
    subtitle: "15 Anos",
    description:
      "Uma noite delicada e cheia de carinho para celebrar esse capítulo inesquecível.",
    primaryActionLabel: "Ver detalhes",
    imageSrc: imagePath("de_azul_.jpg"),
    imageAlt: "Retrato da Lívia em vestido azul",
  },
  details: {
    title: "Você é nosso convidado",
    description:
      "Reserve esta data para viver conosco uma celebração leve e preparada com muito amor.",
    dateLabel: "Data e Hora",
    dateText: "Sexta, 08 de maio de 2026, às 20h",
    eventStartIso: "2026-05-08T20:00:00-03:00",
    eventEndIso: "2026-05-09T00:00:00-03:00",
    calendarTitle: "15 Anos da Lívia",
    locationLabel: "Local",
    locationName: "R. Ambrosina Fonseca, 45 - Caça e Pesca",
    address:
      "R. Ambrosina Fonseca, 45 - Caça e Pesca, Gravataí - RS, 94190-310",
    mapsQuery:
      "R. Ambrosina Fonseca, 45 - Caça e Pesca, Gravataí - RS, 94190-310",
    calendarDescription:
      "Celebração dos 15 anos da Lívia em uma noite especial ao lado da família e amigos.",
    confirmLabel: "Confirmar presença",
    routeLabel: "Ver trajeto",
    imageSrc: imagePath("perfil_olhando_pro_lado_.jpg"),
    imageAlt: "Retrato da Lívia olhando para o lado",
  },
  quote:
    '"Cada detalhe desta noite foi pensado para florescer em memória."',
  gallery: {
    featured: {
      src: imagePath("de_lado_com_lago_no_fundo_.jpg"),
      alt: "Lívia ao lado do lago",
    },
    secondary: {
      src: imagePath("de_costas.jpg"),
      alt: "Lívia de costas em ensaio fotográfico",
    },
  },
  dressCode: {
    title: "Vestimenta",
    description:
      "Para tornar nosso momento ainda mais especial, sugerimos o traje esporte fino, uma combinação perfeita de elegância e conforto.",
    badge: "Traje sugerido",
    badgeValue: "Esporte Fino",
  },
  gift: {
    title: "Presentear",
    description:
      "Se desejar presentear, nossas preferências são O Boticário, Renner ou uma contribuição via PIX.",
    actionLabel: "Ver opções",
    modalTitle: "Presentear via PIX",
    modalText:
      "Escaneie o QR code abaixo para presentear via PIX ou use as preferências de lojas indicadas no convite.",
    preferencesLabel: "Sugestões de presente",
    preferencesText: "O Boticário, Renner ou PIX",
    pixKey: "51995681257",
    pixLabel: "Lívia",
    qrCodeDataUrl: imagePath("qrcode.jpg"),
  },
  memories: {
    eyebrow: "Entre flores e lembranças",
    title: "Mais um pedacinho desse sonho",
    description:
      "Não vejo a hora de viver este momento. Eu e minha família estamos preparando tudo com muito carinho para receber vocês, e vou ficar muito feliz em ter você comigo nessa noite tão especial.",
    photos: [
      {
        src: imagePath("de_lado_com_arvore_roxa_.jpg"),
        alt: "Lívia ao lado de uma árvore com flores roxas",
      },
      {
        src: imagePath("de_lado_com_arvore_verde_.jpg"),
        alt: "Lívia em ensaio ao lado de uma árvore verde",
      },
      {
        src: imagePath("perfil_na_ponte.jpg"),
        alt: "Perfil da Lívia em uma ponte durante o ensaio",
      },
    ],
  },
  rsvp: {
    title: "Confirmar presença",
    description:
      "Sua presença vai deixar essa noite ainda mais especial. Pedimos a gentileza de confirmar com antecedência para organizarmos cada detalhe com carinho.",
    deadlineLabel: "Confirmar até",
    deadlineText: "20/04/2026",
    note: "Se puder, envie sua confirmação pelo WhatsApp até essa data.",
    actionLabel: "Confirmar pelo WhatsApp",
    whatsappMessage:
      "Olá! Gostaria de confirmar minha presença nos 15 anos da Lívia.",
  },
  footer: {
    brand: "15 ANOS | LÍVIA",
    line: "Com amor, família",
  },
};
