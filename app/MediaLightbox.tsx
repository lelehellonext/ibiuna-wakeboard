"use client";

import { useEffect, useCallback, useState } from "react";

type Item = { src: string; alt: string };

export default function MediaLightbox() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);
  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".photo-tile, .act-item")
    );
    const collected: Item[] = [];
    const clickHandlers: Array<{ el: HTMLElement; fn: () => void }> = [];

    nodes.forEach((el) => {
      const img = el.querySelector("img");
      if (!img?.src) return;
      const label =
        el.querySelector(".lbl, .al")?.textContent?.trim() || img.alt || "";
      const itemIndex = collected.length;
      collected.push({ src: img.currentSrc || img.src, alt: label });
      el.classList.add("zoomable");
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      const fn = () => {
        setItems(collected);
        setIndex(itemIndex);
        setOpen(true);
      };
      el.addEventListener("click", fn);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          fn();
        }
      });
      clickHandlers.push({ el, fn });
    });

    return () => {
      clickHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  if (!open || !items[index]) return null;
  const current = items[index];

  return (
    <div
      className={`site-lightbox${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Imagem ampliada"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button type="button" className="lb-close" aria-label="Fechar" onClick={close}>
        ×
      </button>
      {items.length > 1 && (
        <>
          <button type="button" className="lb-nav prev" aria-label="Anterior" onClick={prev}>
            ←
          </button>
          <button type="button" className="lb-nav next" aria-label="Próxima" onClick={next}>
            →
          </button>
        </>
      )}
      <div className="lb-inner">
        <img src={current.src} alt={current.alt} />
        {current.alt ? <p className="lb-cap">{current.alt}</p> : null}
        <p className="lb-count">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}
