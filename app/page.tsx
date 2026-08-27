import SiteChrome from "./SiteChrome";
import ScrollReveal from "./ScrollReveal";
import MediaLightbox from "./MediaLightbox";
import LocalMapClient from "./LocalMapClient";
import { CONTACT } from "./sections";

const wakeboardCats = [
  { title: "Adaptado", desc: "Categoria adaptada." },
  { title: "Mirim Masculino", desc: "Até 12 anos." },
  { title: "Mirim Feminino", desc: "Até 12 anos." },
  { title: "Estreantes Masculino", desc: "Primeira experiência em competição oficial." },
  { title: "Iniciante Masculino", desc: "Evolução técnica na pista." },
  { title: "Iniciante Feminino", desc: "Evolução técnica na pista." },
  { title: "Intermediário Masculino", desc: "Ritmo de disputa e manobras consistentes." },
  { title: "Intermediário Feminino", desc: "Ritmo de disputa e manobras consistentes." },
  { title: "Avançado Masculino", desc: "Alto nível técnico na represa." },
  { title: "Open", desc: "Categoria aberta em busca do pódio." },
  { title: "Profissional", desc: "O topo do Brasileiro de Wakeboard.", highlight: true },
  { title: "Veterano Masculino", desc: "40+." },
  { title: "Seniors", desc: "Masculino · 50+." },
];

const PersonIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden>
    <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M7 26.5c2.2-6.2 15.8-6.2 18 0"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const wakesurfCats = [
  { title: "Mirim Feminino", desc: "Até 12 anos." },
  { title: "Mirim Masculino", desc: "Até 12 anos." },
  { title: "Iniciante Masculino", desc: "Entrada no wakesurf competitivo." },
  { title: "Iniciante Feminino", desc: "Entrada no wakesurf competitivo." },
  { title: "Intermediário Masculino", desc: "Ritmo de disputa e performance." },
  { title: "Intermediário Feminino", desc: "Ritmo de disputa e performance." },
  { title: "Avançado Masculino", desc: "Alto nível técnico nas ondas." },
  { title: "Pro Masculino", desc: "A elite do Brasileiro de WakeSurf.", highlight: true },
  { title: "Open Feminino", desc: "Categoria aberta feminina." },
  { title: "Veteranos", desc: "40+." },
];

export default function Home() {
  return (
    <>
      <SiteChrome />
      <ScrollReveal />
      <MediaLightbox />

      <main className="page">
        {/* ============ CAPA ============ */}
        <section id="inicio" className="section capa">
          <div className="capa-media">
            <img src="/img/capa.jpg?v=6" alt="Ibiúna Wake & Surf 2026" />
          </div>
          <div className="capa-below">
            <div className="capa-copy" data-reveal>
              <span className="badge">Campeonato Brasileiro</span>
              <h1>
                Wakeboard <em>&amp; Surf</em>
              </h1>
              <p className="sub">Etapa Ibiúna · São Paulo</p>
              <p className="loc">Represa de Itupararanga — Ibiúna/SP</p>
              <div className="cta-row">
                <a className="btn primary" href="#inscricoes">
                  Quero participar
                </a>
                <a className="btn ghost" href="#cronograma">
                  Ver programação
                </a>
              </div>
            </div>
            <div className="bottom-bar">
              <span>19 NOV</span>
              <span className="sep">•</span>
              <span>20 NOV</span>
              <span className="sep">•</span>
              <span>21 NOV 2026</span>
              <span className="sep">•</span>
              <span>BARCO OFICIAL: NAUTIQUE G23</span>
            </div>
          </div>
        </section>

        {/* ============ SOBRE ============ */}
        <section id="sobre" className="section light sobre">
          <div className="media-box hero-media">
            <img className="hero-img" src="/img/surfistas.jpg" alt="Atletas de WakeSurf" />
          </div>
          <div className="section-inner" data-reveal-group>
            <div className="sec-title">
              <span className="bar" />
              <h2>Sobre o Evento</h2>
            </div>
            <p className="desc">
              A edição <strong>2026</strong> do Campeonato Brasileiro de Wakeboard e Surf será
              realizada na <strong>Represa de Itupararanga</strong>, em Ibiúna (SP). O evento
              fomenta o esporte náutico entre as famílias residentes e veranistas dos condomínios
              Veleiros de Ibiúna e Porto de Ibiúna, que margeiam a represa. Atletas de todo o Brasil
              se inscrevem, incluindo nomes de destaque do cenário nacional. A competição é também
              um grande momento de <strong>lazer e convivência familiar</strong>.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="n">800+</div>
                <div className="l">Famílias</div>
              </div>
              <div className="stat">
                <div className="n">3</div>
                <div className="l">Dias de Evento</div>
              </div>
              <div className="stat">
                <div className="n">12+</div>
                <div className="l">Categorias</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CRONOGRAMA ============ */}
        <section id="cronograma" className="section cronograma">
          <div className="section-inner">
            <div className="center-top" data-reveal>
              <p className="kicker">Programação</p>
              <h2>
                Três dias <span className="accent-amber">de ação</span>
              </h2>
              <p>19–21 de novembro · Represa de Itupararanga, Ibiúna — SP</p>
            </div>
            <div className="timeline" data-reveal-group>
              <div className="day-card day-1">
                <div className="dc-head">
                  <span className="dc-num">19</span>
                  <span className="dc-mon">Novembro</span>
                  <span className="dc-wk">Quinta</span>
                </div>
                <div className="dc-body">
                  <div className="dc-name">Treinos</div>
                  <p className="dc-desc">
                    Aquecimento oficial e treinos livres na represa. Atletas se preparam para as
                    competições dos dias seguintes.
                  </p>
                  <div className="dc-time">A partir das 8h00</div>
                </div>
              </div>
              <div className="day-card day-2">
                <div className="dc-head">
                  <span className="dc-num">20</span>
                  <span className="dc-mon">Novembro</span>
                  <span className="dc-wk">Sexta</span>
                </div>
                <div className="dc-body">
                  <div className="dc-name">WakeSurf</div>
                  <p className="dc-desc">
                    Competição oficial de WakeSurf com todas as categorias. Alta performance nas
                    ondas do Nautique G23.
                  </p>
                  <div className="dc-time">A partir das 8h00</div>
                </div>
              </div>
              <div className="day-card day-3">
                <div className="dc-head">
                  <span className="dc-num">21</span>
                  <span className="dc-mon">Novembro</span>
                  <span className="dc-wk">Sábado</span>
                </div>
                <div className="dc-body">
                  <div className="dc-name">Wakeboard + Premiação</div>
                  <p className="dc-desc">
                    Final do Brasileiro de Wakeboard, cerimônia de premiação e encerramento no Bar
                    da Náutica.
                  </p>
                  <div className="dc-time">A partir das 8h00</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOCAL ============ */}
        <section id="local" className="section local">
          <div className="loc-layout">
            <div className="media-box loc-media" data-reveal="left">
              <LocalMapClient />
              <div className="loc-map-pin">
                <strong>Marina Veleiros de Ibiúna</strong>
                <span>Represa de Itupararanga · Ibiúna/SP</span>
              </div>
            </div>
            <div className="loc-panel content">
              <p className="kicker" data-reveal>
                Onde acontece
              </p>
              <h2 data-reveal>Local do evento</h2>
              <p className="loc-lead" data-reveal>
                Marina Veleiros de Ibiúna, na Represa de Itupararanga — cenário natural para
                wakeboard e wakesurf de alto nível.
              </p>
              <dl className="loc-facts" data-reveal-group>
                <div className="loc-fact">
                  <dt>Represa</dt>
                  <dd>Itupararanga · Ibiúna, São Paulo</dd>
                </div>
                <div className="loc-fact">
                  <dt>Marina</dt>
                  <dd>Veleiros de Ibiúna · estrutura náutica completa</dd>
                </div>
                <div className="loc-fact">
                  <dt>Condomínios</dt>
                  <dd>Veleiros de Ibiúna e Porto de Ibiúna</dd>
                </div>
                <div className="loc-fact">
                  <dt>Como chegar</dt>
                  <dd>Rod. Bunjiro Nakao, Km 82,5 · ~80 km de São Paulo (1h20)</dd>
                </div>
              </dl>
              <a
                className="btn primary map-btn"
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ============ WAKEBOARD ============ */}
        <section id="wakeboard" className="section cats">
          <div className="section-inner cats-wrap">
            <div className="media-box cats-hero" data-reveal>
              <img src="/img/acao-wakeboard.jpg?v=3" alt="Nautique G23 — Wakeboard" />
            </div>
            <header className="cats-head" data-reveal>
              <p className="kicker">Modalidade</p>
              <h2>Categorias · Wakeboard</h2>
              <p>Escolha sua divisão e venha competir na Represa de Itupararanga.</p>
            </header>
            <div className="tile-grid" data-reveal-group>
              {wakeboardCats.map((c) => (
                <article className={`apple-tile${c.highlight ? " highlight" : ""}`} key={c.title}>
                  <div className="apple-tile-icon" aria-hidden>
                    <PersonIcon />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WAKESURF ============ */}
        <section id="wakesurf" className="section cats">
          <div className="section-inner cats-wrap">
            <div className="media-box cats-hero" data-reveal>
              <img src="/img/acao-wakesurf.jpg?v=2" alt="Nautique G23 — WakeSurf" />
            </div>
            <header className="cats-head" data-reveal>
              <p className="kicker">Modalidade</p>
              <h2>Categorias · WakeSurf</h2>
              <p>Ondas do Nautique G23 para todas as faixas de performance.</p>
            </header>
            <div className="tile-grid" data-reveal-group>
              {wakesurfCats.map((c) => (
                <article className={`apple-tile${c.highlight ? " highlight" : ""}`} key={c.title}>
                  <div className="apple-tile-icon" aria-hidden>
                    <PersonIcon />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BARCO OFICIAL ============ */}
        <section id="barco" className="section barco">
          <div className="section-inner barco-layout" data-reveal-group>
            <div className="media-box barco-media">
              <img src="/img/nautique-team.jpg?v=1" alt="Nautique G23 — equipe oficial" />
            </div>
            <div className="barco-body">
              <div className="barco-copy">
                <p className="lbl">Barco Oficial</p>
                <h1 className="name">
                  Nautique <span>G23</span>
                </h1>
                <p className="sub">
                  Referência mundial em competições de Wakeboard e WakeSurf
                </p>
                <div className="boat-feats">
                  <div className="bf">
                    <div className="bft">Ondas perfeitas</div>
                  </div>
                  <div className="bf">
                    <div className="bft">Alta performance</div>
                  </div>
                  <div className="bf">
                    <div className="bft">Nível mundial</div>
                  </div>
                  <div className="bf">
                    <div className="bft">Referência no esporte</div>
                  </div>
                </div>
                <span className="abw">Homologado · Associação Brasileira de Wakeboard (ABW)</span>
                <p className="barco-contact">
                  Para conhecer o barco, fale com a <strong>Nautique Brasil</strong>
                  <span className="barco-igs">
                    Instagram:{" "}
                    <a
                      href="https://www.instagram.com/nautiquebrasil"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @nautiquebrasil
                    </a>
                    {" · "}
                    <a
                      href="https://www.instagram.com/marrecoboats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @marrecoboats
                    </a>
                  </span>
                </p>
              </div>
              <div className="media-box barco-side">
                <img src="/img/g23.jpg" alt="Nautique G23" />
              </div>
            </div>
          </div>
        </section>

        {/* ============ ABW ============ */}
        <section id="abw" className="section abw-sec">
          <div className="section-inner abw-layout" data-reveal-group>
            <div className="media-box abw-media">
              <img src="/img/abw-juria.jpg?v=1" alt="Júria ABW — Associação Brasileira de Wakeboard" />
            </div>
            <div className="abw-body">
              <div className="abw-copy">
                <p className="lbl">Homologação oficial</p>
                <h2 className="abw-title">
                  ABW
                </h2>
                <p className="abw-sub">Associação Brasileira de Wakeboard</p>
                <p className="abw-lead">
                  Filie-se à CBEAW e aproveite vantagens em eventos reconhecidos — incluindo o
                  Campeonato Brasileiro de Wakeboard &amp; Surf.
                </p>
                <h3 className="abw-list-title">Eventos</h3>
                <ul className="abw-list">
                  <li>Desconto de 20% nas inscrições de eventos oficialmente reconhecidos pela CBEAW.</li>
                  <li>
                    Participação no ranking do Circuito Brasileiro e Paulista (apenas filiados
                    acumulam pontos para o ranking).
                  </li>
                  <li>Prioridade nas inscrições para eventos com vagas limitadas.</li>
                  <li>Tratamento diferenciado nos eventos homologados pela CBEAW.</li>
                  <li>Foto de perfil no LiveHeats, nosso sistema de notas.</li>
                </ul>
                <a
                  className="btn primary abw-cta"
                  href="https://www.cbeaw.com.br/filiacao-barco-2026.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer filiação 2026
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GALERIA ============ */}
        <section id="galeria" className="section estrutura">
          <div className="section-inner">
            <div className="center-top" data-reveal>
              <h2>Galeria do evento</h2>
              <p>Estrutura, emoção e celebração nas edições anteriores</p>
            </div>
            <div className="story-grid" data-reveal-group>
              {[
                {
                  src: "/img/acao-wakeboard.jpg?v=3",
                  title: "Wakeboard na represa",
                  excerpt: "Ação na pista oficial da Represa de Itupararanga.",
                  tag: "Wakeboard",
                },
                {
                  src: "/img/estrutura-bg.jpg",
                  title: "Área de competição",
                  excerpt: "Vista da estrutura montada às margens da represa.",
                  tag: "Estrutura",
                },
                {
                  src: "/img/estrutura-tendas.jpg",
                  title: "Tendas e palco",
                  excerpt: "Hospitalidade, marca e operação no mesmo espaço.",
                  tag: "Estrutura",
                },
                {
                  src: "/img/atletas-acao.png",
                  title: "Atletas em competição",
                  excerpt: "Performance e clima de campeonato brasileiro.",
                  tag: "Competição",
                },
                {
                  src: "/img/podio-masc.jpg",
                  title: "Pódio masculino",
                  excerpt: "Premiação do Brasileiro de Wakeboard.",
                  tag: "Premiação",
                },
                {
                  src: "/img/podio-fem.jpg",
                  title: "Pódio feminino",
                  excerpt: "As campeãs da edição no centro da festa.",
                  tag: "Premiação",
                },
                {
                  src: "/img/premiacao-grupo.png",
                  title: "Cerimônia de premiação",
                  excerpt: "O momento de celebrar quem levou o título.",
                  tag: "Premiação",
                },
                {
                  src: "/img/celebracao.jpg",
                  title: "Encerramento",
                  excerpt: "Festa e convivência depois das finais.",
                  tag: "Lifestyle",
                },
                {
                  src: "/img/familia.jpg",
                  title: "Famílias no evento",
                  excerpt: "Um campeonato pensado também para quem assiste.",
                  tag: "Público",
                },
                {
                  src: "/img/publico-evento.png",
                  title: "Público na beira d’água",
                  excerpt: "Energia na arquibancada e na areia.",
                  tag: "Público",
                },
                {
                  src: "/img/criancas.jpg",
                  title: "Evento familiar",
                  excerpt: "Experiência completa para todas as idades.",
                  tag: "Família",
                },
                {
                  src: "/img/stand.jpg",
                  title: "Hospitalidade",
                  excerpt: "Stands e ativações ao redor da arena.",
                  tag: "Ativação",
                },
              ].map((item) => (
                <article className="story-card photo-tile" key={item.src}>
                  <div className="story-media">
                    <img src={item.src} alt={item.title} />
                  </div>
                  <div className="story-body">
                    <h3 className="story-title lbl">{item.title}</h3>
                    <p className="story-excerpt">{item.excerpt}</p>
                    <div className="story-meta">
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ APOIADORES ============ */}
        <section id="apoiadores" className="section apoiadores">
          <div className="section-inner">
            <div className="center-top" data-reveal>
              <h2>Apoiadores</h2>
              <p>Marcas que fizeram parte do Campeonato Brasileiro de Wakeboard &amp; Surf 2025</p>
            </div>
            <div className="story-grid act-story-grid" data-reveal-group>
              {[
                {
                  src: "/img/porte.jpg",
                  title: "Porte",
                  excerpt: "Estande exclusivo e presença forte na arena.",
                  tag: "Ativação",
                },
                {
                  src: "/img/dermage.jpg",
                  title: "Dermage",
                  excerpt: "Skincare e experiência de marca no evento.",
                  tag: "Skincare",
                },
                {
                  src: "/img/dermage2.jpg",
                  title: "Dermage · Experiência",
                  excerpt: "Ativação e stands ao longo da programação.",
                  tag: "Skincare",
                },
                {
                  src: "/img/technogym.jpg",
                  title: "Technogym",
                  excerpt: "Performance e wellness na beira da represa.",
                  tag: "Wellness",
                },
                {
                  src: "/img/corona.jpg",
                  title: "Corona",
                  excerpt: "Bar e clima de verão no encerramento.",
                  tag: "Lifestyle",
                },
                {
                  src: "/img/beyond.jpg",
                  title: "Beyond The Club",
                  excerpt: "Conteúdo e energia ao redor da competição.",
                  tag: "Conteúdo",
                },
              ].map((item) => (
                <article className="story-card act-item" key={item.src + item.title}>
                  <div className="story-media">
                    <img src={item.src} alt={item.title} />
                  </div>
                  <div className="story-body">
                    <h3 className="story-title al">{item.title}</h3>
                    <p className="story-excerpt">{item.excerpt}</p>
                    <div className="story-meta">
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="apoio-note">
              Quer apoiar o evento? Fale com a organização pelo{" "}
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </p>
          </div>
        </section>

        {/* ============ VÍDEOS ============ */}
        <section id="video" className="section video">
          <div className="section-inner">
            <header className="video-head" data-reveal>
              <p className="kicker">Em movimento</p>
              <h2>O evento em vídeo</h2>
              <p className="video-lead">
                Highlights da competição e ativações filmadas na Represa de Itupararanga.
              </p>
            </header>

            <div className="video-block" data-reveal>
              <div className="video-block-head">
                <h3>Highlights</h3>
                <span>Deslize para ver</span>
              </div>
              <div className="video-grid">
                {[
                  {
                    label: "Final",
                    poster: "/img/posters/final.jpg?v=3",
                    src: "https://hnstvwrmcuflqg.blob.core.windows.net/media/yh-beyond/62594b9a-9917-4e71-972d-1c452d4b44cf/blobimagesfinal_ibiunawakesurf_1.mp4",
                  },
                  {
                    label: "1º dia",
                    poster: "/img/posters/dia1.jpg?v=3",
                    src: "https://hnstvudmwki1sg.blob.core.windows.net/media/yh-beyond/b692ab08-1064-4d31-aeab-b2ddc909aa08/blobimageshighlights_1_dia.mp4",
                  },
                  {
                    label: "Treino",
                    poster: "/img/posters/treino.jpg?v=3",
                    src: "https://hnstvxnaoddwwg.blob.core.windows.net/media/yh-beyond/6c729789-1e3d-436c-92b9-66009ee4b20b/blobimagestreino.mp4",
                  },
                  {
                    label: "2º dia",
                    poster: "/img/posters/dia2.jpg?v=3",
                    src: "https://hnstvxnaoddwwg.blob.core.windows.net/media/yh-beyond/b9b74bff-4ade-4054-beba-a3342c8f745a/blobimageshighlights_2_dia_.mp4",
                  },
                ].map((v) => (
                  <div className="vcard" key={v.label}>
                    <div className="vcard-frame">
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        preload="none"
                      />
                    </div>
                    <div className="vcard-label">{v.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="video-block" data-reveal>
              <div className="video-block-head">
                <h3>Ativações</h3>
                <span>Marcas no evento</span>
              </div>
              <div className="video-grid">
                {[
                  {
                    label: "Corona",
                    poster: "/img/posters/corona.jpg?v=3",
                    src: "https://hnstvxiystzivw.blob.core.windows.net/media/yh-beyond/6cef021c-f7e3-44f2-9c66-7b95e3c2f246/blobimagescorona_vertical.mp4",
                  },
                  {
                    label: "Dermage",
                    poster: "/img/posters/dermage.jpg?v=3",
                    src: "https://hnstvxpfrgrjma.blob.core.windows.net/media/yh-beyond/1e3027a9-36af-480f-80f5-a9a70d77fadd/blobimagesdermage_vertical.mp4",
                  },
                  {
                    label: "Technogym",
                    poster: "/img/posters/technogym.jpg?v=3",
                    src: "https://hnstvwrmcuflqg.blob.core.windows.net/media/yh-beyond/43420782-7054-4121-973e-7cd5583bc2b2/blobimagestechnogym_vertical.mp4",
                  },
                  {
                    label: "B-Side",
                    poster: "/img/posters/bside.jpg?v=3",
                    src: "https://hnstvthcyke2cg.blob.core.windows.net/media/yh-beyond/5a65a132-56d7-49a3-ac65-fb5281e4724b/blobimagespilula_bside_v2.mp4",
                  },
                  {
                    label: "Beyond",
                    poster: "/img/posters/beyond.jpg?v=3",
                    src: "https://hnstvudmwki1sg.blob.core.windows.net/media/yh-beyond/a12149d9-8a15-4252-80f5-f483ec313fbb/blobimagespilula_beyond_vertical.mp4",
                  },
                ].map((v) => (
                  <div className="vcard" key={v.label}>
                    <div className="vcard-frame">
                      <video
                        src={v.src}
                        poster={v.poster}
                        controls
                        playsInline
                        preload="none"
                      />
                    </div>
                    <div className="vcard-label">{v.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ INSCRIÇÕES / CONTATO ============ */}
        <section id="inscricoes" className="section contato">
          <div className="section-inner content" data-reveal-group>
            <h2 className="cta">
              Seja parte do <span>evento</span>
            </h2>
            <p className="sub">
              Campeonato Brasileiro de Wakeboard &amp; Surf
              <br />
              19, 20 e 21 de Novembro de 2026 · Ibiúna — SP
            </p>
            <div className="insc-status">
              <span className="dot" />
              Inscrições ainda não abertas — em breve por aqui e pelo Instagram
            </div>
            <div className="cf">
              <a
                className="field"
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fl">WhatsApp</span>
                <span className="fv">{CONTACT.whatsappLabel}</span>
              </a>
              <a className="field" href={`mailto:${CONTACT.email}`}>
                <span className="fl">E-mail</span>
                <span className="fv">{CONTACT.email}</span>
              </a>
              <a
                className="field"
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fl">Instagram</span>
                <span className="fv">@{CONTACT.instagram}</span>
              </a>
              <a
                className="field"
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fl">Local</span>
                <span className="fv">Marina Veleiros de Ibiúna</span>
              </a>
            </div>
            <p className="obs">Inscrições e informações pelos canais oficiais acima.</p>
            <p className="footer">
              Campeonato Brasileiro de Wakeboard &amp; Surf 2026 · Represa de Itupararanga · Ibiúna —
              SP · Barco Oficial: Nautique G23
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
