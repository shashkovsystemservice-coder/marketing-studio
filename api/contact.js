module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const clean = (value, max = 4000) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";

  const body = req.body && typeof req.body === "object" ? req.body : {};
  const data = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    contact: clean(body.contact, 200),
    topic: clean(body.topic, 200),
    message: clean(body.message, 4000),
    website: clean(body.website, 300),
  };

  // Honeypot: silently accept automated submissions.
  if (data.website) return res.status(200).json({ ok: true });

  if (!data.name || !data.contact || !data.topic || !data.message) {
    return res.status(400).json({ ok: false, error: "missing_required_fields" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(503).json({ ok: false, error: "notification_not_configured" });
  }

  const message = [
    "Новая заявка — Marketing Studio",
    "",
    "Имя: " + data.name,
    "Компания: " + (data.company || "не указана"),
    "Контакт: " + data.contact,
    "Тема: " + data.topic,
    "",
    "Задача:",
    data.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.telegram.org/bot" + token + "/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      return res.status(502).json({ ok: false, error: "notification_failed" });
    }
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ ok: false, error: "notification_failed" });
  }
};
