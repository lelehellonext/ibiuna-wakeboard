export type NavItem = { id: string; label: string; short: string; drawerOnly?: boolean };

export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Início", short: "Início" },
  { id: "sobre", label: "Sobre o Evento", short: "Sobre" },
  { id: "cronograma", label: "Cronograma", short: "Cronograma" },
  { id: "local", label: "Local", short: "Local" },
  { id: "hospedagem", label: "Hospedagem", short: "Hospedagem" },
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

/** Webhook do HelloNext (tenant hn-demo) que grava os cadastros na entidade "WakeSurf Veleiros Cadastro". */
export const VELEIROS_FORM_ENDPOINT =
  "https://backend-core.hellonext.com.br/api/core/tenant/hn-demo/webhook/hndemowakesurfveleiros";

/** Página oficial da inscrição (CBEAW). */
export const ABW_INSCRICAO_URL = "https://www.cbeaw.com.br/ibiuna-2026.html";

export const CONTACT = {
  whatsapp: "5511933165193",
  whatsappLabel: "(11) 93316-5193",
  email: "leandro@hellonext.com.br",
  instagram: "ibiunawakeandsurf",
  instagramUrl: "https://instagram.com/ibiunawakeandsurf",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Nautica+Veleiros+de+Ibiuna",
};
