function run() {
  // WEBHOOK: hndemowakesurfveleiros (HN-DEMO)
  // Formulário público do site ibiunawakeboard.com.br (#veleiros): cadastro de atleta condômino
  // da Associação Veleiros de Ibiúna. Grava uma linha por atleta na entidade
  // "WakeSurf Veleiros Cadastro" com Status "Pendente"; a administração valida no CRM
  // (Status = Validado + Cupom) e o cupom é enviado ao atleta.
  //
  // { "command": "enviarCupons" } (opcional "cadastroId"): para cada linha Validado, com Cupom e sem
  // "Cupom enviado em", manda o atleta para a jornada do e-mail (ruler.addLeadToJourney) e grava date1.
  // Mailing da estratégia: Id · nome · email · cupom · telefone · modalidade · cadastroId.
  //
  // Slots da entidade:
  // text0 Id (uuid) · text1 Atleta · text2 Nascimento (dd/mm/aaaa) · text3 Telefone (DDI+DDD+número)
  // text4 E-mail · text5 Modalidade · text6 Quadra · text7 Lote · text8 Proprietário/Inquilino (nome)
  // text9 Vínculo · text10 Status · text11 Cupom · text12 Observações · text13 ContactId
  // date0 Recebido em · date1 Cupom enviado em
  var WEBHOOK_VERSION = "2026-10-13-hn-demo-wakesurf-veleiros-v2";
  var LAYOUT_ID = "66a57953-ed15-4b2e-807a-90e7ce05a41c";
  var CUPOM_FILTER_ID = "1f0cc84d-8963-4f73-8f46-4455b1662867";
  var TEXT_SLOTS = ["text0", "text1", "text2", "text3", "text4", "text5", "text6", "text7",
    "text8", "text9", "text10", "text11", "text12", "text13"];
  var DATE_SLOTS = ["date0", "date1"];
  var MODALIDADES = ["Wakeboard", "Wakesurf", "Wakeboard e Wakesurf"];
  var VINCULOS = ["Proprietário", "Inquilino"];

  function logD(msg) {
    try { system.logDebug(String(msg)); } catch (_) { }
  }

  function safeParseJSON(value) {
    if (!value) return null;
    if (typeof value !== "string") return value;
    try { return JSON.parse(value); } catch (_) { return null; }
  }

  function safeStringify(value) {
    try {
      var json = JSON.stringify(value);
      if (json !== undefined) return json;
    } catch (_) { }
    return String(value || "");
  }

  function toStr(value) {
    try {
      if (value === null || value === undefined) return "";
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return String(value).trim();
      }
      if (value.Value !== undefined) return toStr(value.Value);
      if (value.value !== undefined) return toStr(value.value);
    } catch (_) { }
    return "";
  }

  function getOwnValue(obj, key) {
    if (!obj || typeof obj !== "object") return "";
    if (obj[key] !== undefined) return obj[key];
    var target = String(key || "").toLowerCase();
    var names = Object.keys(obj);
    for (var i = 0; i < names.length; i++) {
      if (String(names[i]).toLowerCase() === target) return obj[names[i]];
    }
    return "";
  }

  function field(body, key, max) {
    return toStr(getOwnValue(body, key)).substring(0, max || 120);
  }

  function readBody() {
    var raw = "";
    try { raw = net.getWebhookRequestBody() || ""; } catch (_) { }
    logD("[hndemowakesurfveleiros] Body: " + String(raw).substring(0, 2000));
    var body = safeParseJSON(raw) || {};
    if (body && body.scriptParameterValue && body.scriptParameterValue.webhook) {
      body = safeParseJSON(body.scriptParameterValue.webhook) || body;
    }
    if (Array.isArray(body)) body = body.length ? body[0] : {};
    return body || {};
  }

  function setResponse(payload) {
    var out = safeStringify(payload);
    logD("[hndemowakesurfveleiros] Response: " + out.substring(0, 2000));
    try { system.setExecutionResultData(out); } catch (_) { }
    try { net.setWebhookResponseStatusCode(200); } catch (_) { }
    try { net.setWebhookResponseBody(out); } catch (_) { }
    return payload;
  }

  function ok(data, msg) {
    return setResponse({ Status: 1, StatusDescription: msg || "success", Data: data, sucesso: true });
  }

  function fail(msg, data) {
    return setResponse({
      Status: -1,
      StatusDescription: "[" + WEBHOOK_VERSION + "] " + (msg || "error"),
      Data: data || null,
      sucesso: false
    });
  }

  function errMsg(e) {
    return e && e.message ? e.message : toStr(e);
  }

  function kv(key, value) {
    return { Key: String(key), Value: value === undefined || value === null ? "" : String(value) };
  }

  function onlyDigits(value) {
    return String(value || "").replace(/\D/g, "");
  }

  /** Normaliza para DDI + DDD + telefone (ex.: 5511999999999). */
  function normalizeTelefone(raw) {
    var digits = onlyDigits(raw);
    if (!digits) return "";
    if (digits.indexOf("00") === 0) digits = digits.substring(2);
    if (digits.charAt(0) === "0") digits = digits.substring(1);
    if (digits.indexOf("55") !== 0 && (digits.length === 10 || digits.length === 11)) {
      digits = "55" + digits;
    }
    return digits;
  }

  /** O input date do site manda yyyy-mm-dd; a entidade guarda dd/mm/aaaa. */
  function normalizeNascimento(raw) {
    var s = toStr(raw);
    var iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (iso) return iso[3] + "/" + iso[2] + "/" + iso[1];
    return /^\d{2}\/\d{2}\/\d{4}$/.test(s) ? s : "";
  }

  function pickOption(value, options) {
    var v = toStr(value).toLowerCase();
    for (var i = 0; i < options.length; i++) {
      if (options[i].toLowerCase() === v) return options[i];
    }
    return "";
  }

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  /** dd/MM/yyyy HH:mm:ss no horário de Brasília (formato de data da entidade). */
  function nowEntityDate() {
    var d = new Date(Date.now() - 3 * 3600000);
    return pad2(d.getUTCDate()) + "/" + pad2(d.getUTCMonth() + 1) + "/" + d.getUTCFullYear() + " " +
      pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes()) + ":" + pad2(d.getUTCSeconds());
  }

  function uuid() {
    try {
      if (typeof system !== "undefined" && typeof system.newGuid === "function") return toStr(system.newGuid());
    } catch (_) { }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  // ---------- Leitura das linhas da entidade (objetos do host .NET) ----------
  function fGetOwn(o, k) {
    if (!o || typeof o !== "object") return undefined;
    try { if (Object.prototype.hasOwnProperty.call(o, k)) return o[k]; } catch (_) { }
    return undefined;
  }

  function getEntityField(row, slot) {
    if (!row || !slot) return "";
    try { if (row[slot] !== undefined && row[slot] !== null && toStr(row[slot])) return toStr(row[slot]); } catch (_) { }
    try { if (typeof row.GetValue === "function" && toStr(row.GetValue(slot))) return toStr(row.GetValue(slot)); } catch (_) { }
    var containers = [row, fGetOwn(row, "Entity"), fGetOwn(row, "entity"), fGetOwn(row, "Fields"), fGetOwn(row, "fields"),
      fGetOwn(row, "Values"), fGetOwn(row, "values"), fGetOwn(row, "Data"), fGetOwn(row, "data")];
    for (var i = 0; i < containers.length; i++) {
      var c = containers[i];
      if (!c || typeof c !== "object") continue;
      if (!Array.isArray(c)) {
        var direct = toStr(fGetOwn(c, slot));
        if (direct) return direct;
      }
      var list = Array.isArray(c) ? c : [c];
      for (var j = 0; j < list.length; j++) {
        var it = list[j] || {};
        var key = toStr(fGetOwn(it, "Key") || fGetOwn(it, "key") || fGetOwn(it, "Name") || fGetOwn(it, "name"));
        if (key && key.toLowerCase() === slot.toLowerCase()) {
          var val = fGetOwn(it, "Value");
          if (val === undefined || val === "") val = fGetOwn(it, "value");
          if (toStr(val)) return toStr(val);
        }
      }
    }
    return "";
  }

  function parseRowsRaw(ret) {
    var parsed = typeof ret === "string" ? safeParseJSON(ret) : ret;
    var data = parsed && (parsed.Data || parsed.data) ? (parsed.Data || parsed.data) : parsed;
    if (typeof data === "string") data = safeParseJSON(data) || data;
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.Items)) return data.Items;
    if (data && typeof data === "object") return [data];
    return [];
  }

  /** Linha → { text0…text13, date0, date1, rowKey } como texto. */
  function flattenRow(row) {
    var out = {};
    TEXT_SLOTS.concat(DATE_SLOTS).forEach(function (slot) { out[slot] = getEntityField(row, slot); });
    out.rowKey = toStr(row && (row.RowKey || row.rowKey)) || getEntityField(row, "RowKey");
    return out;
  }

  /** Linhas "Validado"; se o filtro por campo não trouxer nada, lista tudo e filtra aqui. */
  function listValidados() {
    var strategies = [
      function () { return entity.searchEntityByField(LAYOUT_ID, [{ Key: "text10", Value: "Validado" }], false); },
      function () { return entity.searchEntityByField(LAYOUT_ID, [], true); },
      function () { return entity.searchEntityByField(LAYOUT_ID, [{ Key: "text0", Value: "" }], true); }
    ];
    var byId = {};
    var out = [];
    for (var s = 0; s < strategies.length; s++) {
      try {
        var rows = parseRowsRaw(strategies[s]()).map(flattenRow);
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          if (!r.text0 || byId[r.text0]) continue;
          if (r.text10.toLowerCase() !== "validado") continue;
          byId[r.text0] = true;
          out.push(r);
        }
      } catch (e) {
        logD("[hndemowakesurfveleiros] busca " + s + ": " + errMsg(e));
      }
      if (out.length) break;
    }
    return out;
  }

  var TICKS_AT_UNIX_EPOCH = 621355968000000000;
  /** Datas lidas da entidade (ticks, ISO ou dd/MM/yyyy) → dd/MM/yyyy HH:mm:ss para regravar. */
  function toEntityDateValue(value) {
    var raw = toStr(value);
    if (!raw || raw === "0") return "";
    if (/^\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}:\d{2}/.test(raw)) return raw.slice(0, 19);
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(raw)) return raw + " 00:00:00";
    var ms = NaN;
    if (/^\d{17,}$/.test(raw)) ms = (Number(raw) - TICKS_AT_UNIX_EPOCH) / 10000;
    else if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
      var iso = raw.indexOf("T") >= 0 ? raw : raw.replace(" ", "T");
      ms = Date.parse(iso.length === 19 ? iso + "-03:00" : iso);
    }
    if (isNaN(ms)) return raw;
    var d = new Date(ms - 3 * 3600000);
    return pad2(d.getUTCDate()) + "/" + pad2(d.getUTCMonth() + 1) + "/" + d.getUTCFullYear() + " " +
      pad2(d.getUTCHours()) + ":" + pad2(d.getUTCMinutes()) + ":" + pad2(d.getUTCSeconds());
  }

  function readRulerRet(ret) {
    var parsed = typeof ret === "string" ? (safeParseJSON(ret) || {}) : (ret || {});
    var n = parseInt(toStr(parsed.Status !== undefined ? parsed.Status : parsed.status), 10);
    return { status: isNaN(n) ? -1 : n, desc: toStr(parsed.StatusDescription || parsed.statusDescription || "erro") };
  }

  /** A linha é regravada inteira (com RowKey) para a atualização não apagar os outros slots. */
  function marcarCupomEnviado(row) {
    var fields = TEXT_SLOTS.map(function (slot) { return kv(slot, row[slot]); });
    fields.push(kv("date0", toEntityDateValue(row.date0)));
    fields.push(kv("date1", nowEntityDate()));
    if (row.rowKey) fields.push(kv("RowKey", row.rowKey));
    entity.addOrUpdateAuxTableContact(LAYOUT_ID, fields);
  }

  function enviarCupons(somenteId) {
    if (typeof ruler === "undefined" || typeof ruler.addLeadToJourney !== "function") {
      return fail("ruler.addLeadToJourney indisponivel neste webhook");
    }
    var enviados = [], semCupom = [], falhas = [], jaEnviados = 0;
    var rows = listValidados();
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (somenteId && r.text0 !== somenteId) continue;
      if (r.date1) { jaEnviados++; continue; }
      if (!r.text11) { semCupom.push({ cadastroId: r.text0, nome: r.text1 }); continue; }
      if (!r.text4) { falhas.push({ cadastroId: r.text0, nome: r.text1, erro: "sem e-mail" }); continue; }
      var lead = [
        kv("Id", uuid()),
        kv("nome", r.text1),
        kv("email", r.text4),
        kv("cupom", r.text11),
        kv("telefone", r.text3),
        kv("modalidade", r.text5),
        kv("cadastroId", r.text0)
      ];
      try {
        var ret = readRulerRet(ruler.addLeadToJourney(lead, CUPOM_FILTER_ID));
        if (ret.status !== 1) {
          falhas.push({ cadastroId: r.text0, nome: r.text1, erro: "jornada status " + ret.status + ": " + ret.desc });
          continue;
        }
      } catch (eJ) {
        falhas.push({ cadastroId: r.text0, nome: r.text1, erro: "jornada: " + errMsg(eJ) });
        continue;
      }
      try {
        marcarCupomEnviado(r);
        enviados.push({ cadastroId: r.text0, nome: r.text1, email: r.text4 });
      } catch (eM) {
        // E-mail já foi para a jornada: registra para não reenviar às cegas.
        falhas.push({ cadastroId: r.text0, nome: r.text1, erro: "enviado, mas não gravou 'Cupom enviado em': " + errMsg(eM) });
      }
    }
    logD("[hndemowakesurfveleiros] cupons " + safeStringify({ enviados: enviados.length, falhas: falhas.length }));
    return ok({
      enviados: enviados,
      semCupom: semCupom,
      falhas: falhas,
      jaEnviados: jaEnviados,
      validados: rows.length,
      webhookVersion: WEBHOOK_VERSION
    }, enviados.length + " cupom(ns) enviado(s)");
  }

  try {
    logD("[hndemowakesurfveleiros] " + WEBHOOK_VERSION);
    var body = readBody();

    if (field(body, "command") === "enviarCupons") {
      if (typeof entity === "undefined") return fail("objeto entity indisponivel neste webhook");
      return enviarCupons(field(body, "cadastroId", 60));
    }

    // Campo invisível no formulário: só robô preenche. Responde sucesso sem gravar.
    if (field(body, "website")) return ok({ ignorado: true }, "ok");

    var cadastro = {
      nome: field(body, "nome"),
      nascimento: normalizeNascimento(getOwnValue(body, "nascimento")),
      telefone: normalizeTelefone(getOwnValue(body, "telefone")),
      email: field(body, "email").toLowerCase(),
      modalidade: pickOption(getOwnValue(body, "modalidade"), MODALIDADES),
      quadra: field(body, "quadra", 20),
      lote: field(body, "lote", 20),
      responsavel: field(body, "responsavel"),
      vinculo: pickOption(getOwnValue(body, "vinculo"), VINCULOS)
    };

    if (!cadastro.nome) return fail("nome do atleta obrigatorio");
    if (!cadastro.nascimento) return fail("data de nascimento invalida");
    if (!cadastro.telefone || cadastro.telefone.length < 12 || cadastro.telefone.length > 13) {
      return fail("telefone invalido — use DDD + numero");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cadastro.email)) return fail("email invalido");
    if (!cadastro.modalidade) return fail("modalidade invalida");
    if (!cadastro.quadra || !cadastro.lote) return fail("quadra e lote obrigatorios");
    if (!cadastro.responsavel) return fail("nome do proprietario ou inquilino obrigatorio");
    if (!cadastro.vinculo) return fail("vinculo invalido (Proprietário ou Inquilino)");

    if (typeof entity === "undefined" || typeof entity.addOrUpdateAuxTableContact !== "function") {
      return fail("entity.addOrUpdateAuxTableContact indisponivel neste webhook");
    }

    var id = uuid();
    var recebidoEm = nowEntityDate();
    try {
      var ret = entity.addOrUpdateAuxTableContact(LAYOUT_ID, [
        kv("text0", id),
        kv("text1", cadastro.nome),
        kv("text2", cadastro.nascimento),
        kv("text3", cadastro.telefone),
        kv("text4", cadastro.email),
        kv("text5", cadastro.modalidade),
        kv("text6", cadastro.quadra),
        kv("text7", cadastro.lote),
        kv("text8", cadastro.responsavel),
        kv("text9", cadastro.vinculo),
        kv("text10", "Pendente"),
        kv("date0", recebidoEm)
      ]);
      var parsed = typeof ret === "string" ? (safeParseJSON(ret) || {}) : (ret || {});
      var status = toStr(parsed.Status !== undefined ? parsed.Status : parsed.status);
      if (status && status !== "1") {
        return fail("Falha ao gravar cadastro: " + (toStr(parsed.StatusDescription || parsed.statusDescription) || "Status=" + status));
      }
    } catch (eEnt) {
      return fail("Falha ao gravar cadastro: " + errMsg(eEnt));
    }

    return ok({ id: id, status: "Pendente", recebidoEm: recebidoEm, webhookVersion: WEBHOOK_VERSION }, "Cadastro recebido");
  } catch (e) {
    return fail(errMsg(e));
  }
}

function execute() {
  return run();
}
