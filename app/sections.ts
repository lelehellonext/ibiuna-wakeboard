export type NavItem = { id: string; label: string; short: string; drawerOnly?: boolean };

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Início", short: "Início" },
  { id: "sobre", label: "Sobre o Evento", short: "Sobre" },
  { id: "cronograma", label: "Cronograma", short: "Cronograma" },
  { id: "local", label: "Local", short: "Local" },
  { id: "wakeboard", label: "Wakeboard", short: "Wakeboard" },
  { id: "wakesurf", label: "WakeSurf", short: "WakeSurf" },
  { id: "barco", label: "Barco Oficial", short: "Barco" },
  { id: "abw", label: "ABW", short: "ABW" },
  { id: "galeria", label: "Galeria", short: "Galeria" },
  { id: "apoiadores", label: "Apoiadores", short: "Apoio" },
  { id: "video", label: "Vídeos", short: "Vídeos" },
  { id: "inscricoes", label: "Inscrições", short: "Inscrições" },
  { id: "veleiros", label: "Condôminos Veleiros", short: "Veleiros" },
  { id: "faq", label: "Perguntas Frequentes", short: "FAQ", drawerOnly: true },
  { id: "contato", label: "Contato", short: "Contato", drawerOnly: true },
];

/** URL do Web App do Google Apps Script que grava os cadastros na planilha. */
export const VELEIROS_FORM_ENDPOINT = "";

/** Link de inscrição da ABW (não condôminos). Vazio = botão "disponível em 15/10". */
export const ABW_INSCRICAO_URL = "";

export const CONTACT = {
  whatsapp: "5511933165193",
  whatsappLabel: "(11) 93316-5193",
  email: "leandro@hellonext.com.br",
  instagram: "ibiunawakeandsurf",
  instagramUrl: "https://instagram.com/ibiunawakeandsurf",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Nautica+Veleiros+de+Ibiuna",
};
