import SiteChrome from "./SiteChrome";
import ScrollReveal from "./ScrollReveal";
import MediaLightbox from "./MediaLightbox";
import { CONTACT } from "./sections";

const wakeboardCats = [
  "Estreantes Masculino",
  "Iniciante Masc. / Fem.",
  "Intermediário Masculino",
  "Avançado Masculino",
  "Open Masculino",
  "Open Feminino",
  "Profissional",
];

const wakesurfCats = [
  "Iniciante Masculino / Feminino",
  "Junior Masculino / Feminino",
  "Outlaw Masculino / Feminino",
  "Masters Masculino / Feminino",
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
          <img className="bg-img" src="/img/capa.jpg" alt="Wakeboard na Represa de Itupararanga" />
          <div className="overlay dark" />
          <span className="year">2026</span>
          <div className="content">
            <span className="badge">🏆 Campeonato Brasileiro</span>
            <h1>
              Wakeboard <em>&amp; Surf</em>
            </h1>
            <p className="sub">Etapa Ibiúna · São Paulo</p>
            <p className="loc">📍 Represa de Itupararanga — Ibiúna/SP</p>
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
            <span>🚤 BARCO OFICIAL: NAUTIQUE G23</span>
          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Rolar para baixo">
            ⌄
          </a>
        </section>

        {/* ============ SOBRE ============ */}
        <section id="sobre" className="section light sobre">
          <img className="hero-img" src="/img/surfistas.jpg" alt="Atletas de WakeSurf" />
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
              <h2>
                📅 Cronograma <span className="accent-blue">2026</span>
              </h2>
              <p>Novembro · Represa de Itupararanga, Ibiúna — SP</p>
            </div>
            <div className="timeline" data-reveal-group>
              <div className="day-card day-1">
                <div className="dc-head">
                  <span className="dc-num">19</span>
                  <span className="dc-mon">Novembro</span>
                  <span className="dc-wk">Quinta-feira</span>
                </div>
                <div className="dc-body">
                  <div className="dc-icon">🏄</div>
                  <div className="dc-name">Dia de Treinos</div>
                  <p className="dc-desc">
                    Aquecimento oficial e treinos livres na represa. Atletas se preparam para as
                    competições dos dias seguintes.
                  </p>
                  <div className="dc-time">⏰ A partir das 8h00</div>
                </div>
              </div>
              <div className="day-card day-2">
                <div className="dc-head">
                  <span className="dc-num">20</span>
                  <span className="dc-mon">Novembro</span>
                  <span className="dc-wk">Sexta-feira</span>
                </div>
                <div className="dc-body">
                  <div className="dc-icon">🌊</div>
                  <div className="dc-name">Brasileiro de WakeSurf</div>
                  <p className="dc-desc">
                    Competição oficial de WakeSurf com todas as categorias. Alta performance nas
                    ondas do Nautique G23.
                  </p>
                  <div className="dc-time">⏰ A partir das 8h00</div>
                </div>
              </div>
              <div className="day-card day-3">
                <div className="dc-head">
                  <span className="dc-num">21</span>
                  <span className="dc-mon">Novembro</span>
                  <span className="dc-wk">Sábado</span>
                </div>
                <div className="dc-body">
                  <div className="dc-icon">🏆</div>
                  <div className="dc-name">Wakeboard + Premiação</div>
                  <p className="dc-desc">
                    Final do Brasileiro de Wakeboard + Cerimônia de premiação e festa de
                    encerramento no Bar da Náutica.
                  </p>
                  <div className="dc-time">⏰ A partir das 8h00</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOCAL ============ */}
        <section id="local" className="section local">
          <img className="bg-img" src="/img/local.jpg" alt="Represa de Itupararanga" />
          <div className="overlay blue" />
          <div className="section-inner content">
            <h2 className="title-bordered" data-reveal>
              📍 Local do Evento
            </h2>
            <div className="loc-grid" data-reveal-group>
              <div className="loc-card">
                <span className="ico">🌊</span>
                <div>
                  <h3>Represa</h3>
                  <p>Represa de Itupararanga — Ibiúna, São Paulo</p>
                </div>
              </div>
              <div className="loc-card">
                <span className="ico">⚓</span>
                <div>
                  <h3>Marina</h3>
                  <p>Marina de Veleiros de Ibiúna — estrutura náutica completa</p>
                </div>
              </div>
              <div className="loc-card">
                <span className="ico">🏡</span>
                <div>
                  <h3>Condomínios</h3>
                  <p>Veleiros de Ibiúna e Porto de Ibiúna</p>
                </div>
              </div>
              <div className="loc-card">
                <span className="ico">🚗</span>
                <div>
                  <h3>Como chegar</h3>
                  <p>Rod. Bunjiro Nakao, Km 82,5 — Bairro da Ressaca · ~80 km de São Paulo (1h20)</p>
                </div>
              </div>
            </div>
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
        </section>

        {/* ============ WAKEBOARD ============ */}
        <section id="wakeboard" className="section cats">
          <div className="photo" data-reveal="left">
            <span className="sport-tag">🏂 Wakeboard</span>
            <img src="/img/wakeboard.jpg" alt="Atleta de Wakeboard" />
          </div>
          <div className="section-inner">
            <div className="sec-title" data-reveal>
              <span className="bar" />
              <h2>Categorias · Wakeboard</h2>
            </div>
            <div className="cat-grid" data-reveal-group>
              {wakeboardCats.map((c) => (
                <div className="cat-chip" key={c}>
                  <span className="dot" />
                  {c}
                </div>
              ))}
              <div className="cat-chip special">
                <span className="dot" />
                🏅 Mirim Masculino / Feminino (até 12 anos)
              </div>
            </div>
          </div>
        </section>

        {/* ============ WAKESURF ============ */}
        <section id="wakesurf" className="section cats">
          <div className="photo" data-reveal="right">
            <span className="sport-tag cyan">🌊 WakeSurf</span>
            <img src="/img/wakesurf.jpg" alt="Atleta de WakeSurf" />
          </div>
          <div className="section-inner">
            <div className="sec-title cyan" data-reveal>
              <span className="bar" />
              <h2>Categorias · WakeSurf</h2>
            </div>
            <div data-reveal-group>
              {wakesurfCats.map((c) => (
                <div className="surf-chip" key={c}>
                  <span className="dot" />
                  {c}
                </div>
              ))}
              <div className="surf-chip pro">
                <span className="dot" />
                🏆 Profissional
              </div>
            </div>
          </div>
        </section>

        {/* ============ BARCO OFICIAL ============ */}
        <section id="barco" className="section barco">
          <img className="bg-img" src="/img/g23.jpg" alt="Nautique G23" />
          <div className="overlay dark" />
          <div className="section-inner content" data-reveal-group>
            <p className="lbl">🚤 Equipamento Oficial</p>
            <h1 className="name">
              Nautique <span>G23</span>
            </h1>
            <p className="sub">
              Referência mundial em competições de Wakeboard e WakeSurf
            </p>
            <div className="boat-feats">
              <div className="bf">
                <div className="bfi">🌊</div>
                <div className="bft">Ondas Perfeitas</div>
              </div>
              <div className="bf">
                <div className="bfi">⚡</div>
                <div className="bft">Alta Performance</div>
              </div>
              <div className="bf">
                <div className="bfi">🏆</div>
                <div className="bft">Nível Mundial</div>
              </div>
              <div className="bf">
                <div className="bfi">🎯</div>
                <div className="bft">Referência no Esporte</div>
              </div>
            </div>
            <span className="abw">✅ Homologado · Associação Brasileira de Wakeboard (ABW)</span>
          </div>
        </section>

        {/* ============ GALERIA ============ */}
        <section id="galeria" className="section estrutura">
          <div className="section-inner">
            <div className="center-top" data-reveal>
              <h2>
                📸 Galeria <span className="accent-amber">do Evento</span>
              </h2>
              <p>Estrutura, emoção e celebração nas edições anteriores</p>
            </div>
            <div className="photo-grid-2" data-reveal-group>
              <div className="photo-tile wide">
                <img src="/img/acao-wakeboard.png" alt="Wakeboard na represa" />
                <span className="lbl">Wakeboard na represa</span>
              </div>
              <div className="photo-tile">
                <img src="/img/estrutura-bg.jpg" alt="Vista aérea da área de competição" />
                <span className="lbl">Vista aérea · Área de competição</span>
              </div>
              <div className="photo-tile">
                <img src="/img/estrutura-tendas.jpg" alt="Estrutura de tendas e palco" />
                <span className="lbl">Estrutura · Tendas e palco</span>
              </div>
              <div className="photo-tile">
                <img src="/img/atletas-acao.png" alt="Atletas no evento" />
                <span className="lbl">Atletas · Competição</span>
              </div>
              <div className="photo-tile">
                <img src="/img/podio-masc.jpg" alt="Pódio Wakeboard masculino" />
                <span className="lbl">🥇 Pódio · Wakeboard Masculino</span>
              </div>
              <div className="photo-tile">
                <img src="/img/podio-fem.jpg" alt="Pódio Wakeboard feminino" />
                <span className="lbl">🥇 Pódio · Wakeboard Feminino</span>
              </div>
              <div className="photo-tile">
                <img src="/img/premiacao-grupo.png" alt="Cerimônia de premiação" />
                <span className="lbl">Premiação</span>
              </div>
              <div className="photo-tile">
                <img src="/img/celebracao.jpg" alt="Festa de encerramento" />
                <span className="lbl">🎉 Festa de encerramento</span>
              </div>
              <div className="photo-tile">
                <img src="/img/familia.jpg" alt="Público e famílias" />
                <span className="lbl">Famílias no evento</span>
              </div>
              <div className="photo-tile">
                <img src="/img/publico-evento.png" alt="Público na premiação" />
                <span className="lbl">Público</span>
              </div>
              <div className="photo-tile">
                <img src="/img/criancas.jpg" alt="Evento familiar" />
                <span className="lbl">👨‍👩‍👧‍👦 Evento familiar</span>
              </div>
              <div className="photo-tile">
                <img src="/img/stand.jpg" alt="Estrutura e hospitalidade" />
                <span className="lbl">Hospitalidade</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ APOIADORES ============ */}
        <section id="apoiadores" className="section apoiadores">
          <div className="section-inner">
            <div className="center-top" data-reveal>
              <h2>
                🤝 <span className="accent-blue">Apoiadores</span>
              </h2>
              <p>Marcas que fizeram parte do Campeonato Brasileiro de Wakeboard &amp; Surf 2025</p>
            </div>
            <div className="act-grid" data-reveal-group>
              <div className="act-item big">
                <img src="/img/porte.jpg" alt="Ativação Porte" />
                <span className="al">📦 Porte · Estande exclusivo</span>
              </div>
              <div className="act-item">
                <img src="/img/dermage.jpg" alt="Ativação Dermage" />
                <span className="al">🧴 Dermage · Skincare</span>
              </div>
              <div className="act-item">
                <img src="/img/dermage2.jpg" alt="Ativação Dermage stands" />
                <span className="al">🧴 Dermage · Experiência</span>
              </div>
              <div className="act-item">
                <img src="/img/technogym.jpg" alt="Ativação Technogym" />
                <span className="al">💪 Technogym</span>
              </div>
              <div className="act-item">
                <img src="/img/corona.jpg" alt="Ativação Corona" />
                <span className="al">🍺 Corona · Bar</span>
              </div>
              <div className="act-item">
                <img src="/img/beyond.jpg" alt="Beyond The Club" />
                <span className="al">🌊 Beyond The Club</span>
              </div>
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

        {/* ============ VÍDEO ============ */}
        <section id="video" className="section video">
          <div className="section-inner">
            <h2 data-reveal>
              🎬 Assista ao <em>Evento</em>
            </h2>
            <div className="video-frame" data-reveal="zoom">
              <video
                src="/img/video.mp4"
                poster="/img/celebracao.jpg"
                controls
                playsInline
                preload="metadata"
              />
            </div>
            <p className="cap">CAMPEONATO BRASILEIRO DE WAKEBOARD &amp; SURF</p>
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
                <span className="fl">📱 WhatsApp</span>
                <span className="fv">{CONTACT.whatsappLabel}</span>
              </a>
              <a className="field" href={`mailto:${CONTACT.email}`}>
                <span className="fl">📧 E-mail</span>
                <span className="fv">{CONTACT.email}</span>
              </a>
              <a
                className="field"
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fl">📸 Instagram</span>
                <span className="fv">@{CONTACT.instagram}</span>
              </a>
              <a
                className="field"
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fl">📍 Local</span>
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
