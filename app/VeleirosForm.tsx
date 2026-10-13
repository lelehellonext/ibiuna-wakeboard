"use client";

import { FormEvent, useState } from "react";
import { CONTACT, VELEIROS_FORM_ENDPOINT } from "./sections";

type Status = "idle" | "sending" | "ok" | "error";

const FIELDS = [
  "nome",
  "nascimento",
  "telefone",
  "email",
  "modalidade",
  "quadra",
  "lote",
  "responsavel",
  "vinculo",
] as const;

function toWhatsAppText(data: Record<string, string>) {
  return [
    "Cadastro de condômino — Veleiros de Ibiúna (Ibiúna Wake&Surf 2026)",
    `Atleta: ${data.nome}`,
    `Nascimento: ${data.nascimento}`,
    `Telefone: ${data.telefone}`,
    `E-mail: ${data.email}`,
    `Modalidade: ${data.modalidade}`,
    `Quadra: ${data.quadra} · Lote: ${data.lote}`,
    `${data.vinculo}: ${data.responsavel}`,
  ].join("\n");
}

export default function VeleirosForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = { website: String(fd.get("website") || "") };
    FIELDS.forEach((k) => {
      data[k] = String(fd.get(k) || "").trim();
    });

    if (!VELEIROS_FORM_ENDPOINT) {
      window.open(
        `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(toWhatsAppText(data))}`,
        "_blank",
        "noopener,noreferrer",
      );
      setStatus("ok");
      form.reset();
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(VELEIROS_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!(out.sucesso || out.Status === 1)) throw new Error(out.StatusDescription || "Falha no envio");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Não foi possível enviar agora. Tente novamente em instantes ou fale com a gente pelo WhatsApp.",
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="vf-success" role="status">
        <span className="vf-check" aria-hidden>
          ✓
        </span>
        <h3>Cadastro recebido!</h3>
        <p>
          Assim que a administração da Associação Veleiros de Ibiúna validar seus dados, você
          receberá um <strong>e-mail com o cupom de desconto</strong> para fazer sua inscrição pelo
          valor de compromisso de <strong>R$ 50,00</strong>.
        </p>
        <button type="button" className="btn ghost vf-again" onClick={() => setStatus("idle")}>
          Cadastrar outro atleta
        </button>
      </div>
    );
  }

  return (
    <form className="vf" onSubmit={onSubmit}>
      <div className="vf-grid">
        <label className="vf-field vf-full">
          <span>Nome completo do atleta</span>
          <input name="nome" required autoComplete="name" maxLength={120} />
        </label>
        <label className="vf-field">
          <span>Data de nascimento</span>
          <input name="nascimento" type="date" required />
        </label>
        <label className="vf-field">
          <span>Modalidade</span>
          <select name="modalidade" required defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            <option>Wakeboard</option>
            <option>Wakesurf</option>
            <option>Wakeboard e Wakesurf</option>
          </select>
        </label>
        <label className="vf-field">
          <span>Telefone / WhatsApp</span>
          <input
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="(11) 90000-0000"
            maxLength={30}
          />
        </label>
        <label className="vf-field">
          <span>E-mail</span>
          <input name="email" type="email" required autoComplete="email" maxLength={120} />
        </label>
        <label className="vf-field">
          <span>Quadra</span>
          <input name="quadra" required maxLength={20} />
        </label>
        <label className="vf-field">
          <span>Lote</span>
          <input name="lote" required maxLength={20} />
        </label>
        <label className="vf-field vf-full">
          <span>Nome do proprietário ou inquilino do lote</span>
          <input name="responsavel" required maxLength={120} />
        </label>
        <fieldset className="vf-field vf-full vf-radios">
          <legend>Vínculo com o lote</legend>
          <label>
            <input type="radio" name="vinculo" value="Proprietário" required /> Proprietário
          </label>
          <label>
            <input type="radio" name="vinculo" value="Inquilino" /> Inquilino
          </label>
        </fieldset>
        <label className="vf-hp" aria-hidden>
          Não preencha
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="vf-consent vf-full">
          <input type="checkbox" required />
          <span>
            Declaro que as informações são verdadeiras e autorizo a administração da Associação
            Veleiros de Ibiúna a validar meu vínculo com o condomínio.
          </span>
        </label>
      </div>
      {status === "error" && (
        <p className="vf-error" role="alert">
          {error}
        </p>
      )}
      <button className="btn primary vf-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar cadastro"}
      </button>
      <p className="vf-note">
        Após a validação pela administração da associação, você receberá por e-mail o cupom de
        desconto para concluir a inscrição.
      </p>
    </form>
  );
}
