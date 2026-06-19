"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { NAV_ITEMS, CONTACT } from "./sections";

export default function SiteChrome() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setProgress(height > 0 ? (scrolled / height) * 100 : 0);
      setShowTop(scrolled > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />

      <header className="header">
        <button className="brand" onClick={() => go("inicio")} aria-label="Início">
          <Image src="/img/logo.png" alt="Ibiúna Wake & Surf" width={88} height={40} priority />
          <span className="txt">
            <b>Ibiúna Wake &amp; Surf</b>
            <span>Campeonato Brasileiro 2026</span>
          </span>
        </button>

        <nav className="topnav" aria-label="Navegação principal">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`${active === n.id ? "active" : ""}${
                n.id === "inscricoes" ? " cta" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                go(n.id);
              }}
            >
              {n.short}
            </a>
          ))}
        </nav>

        <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Abrir menu">
          <span className="bars">
            <i />
            <i />
            <i />
          </span>
          Menu
        </button>
      </header>

      <div
        className={`drawer-overlay${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <nav className={`drawer${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Navegação</h3>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Fechar menu">
            ×
          </button>
        </div>
        <ul className="drawer-list">
          {NAV_ITEMS.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={active === n.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  go(n.id);
                }}
              >
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="drawer-foot">
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a
            className="wpp"
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <button
        className={`fab-top${showTop ? " show" : ""}`}
        onClick={() => go("inicio")}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>
    </>
  );
}
