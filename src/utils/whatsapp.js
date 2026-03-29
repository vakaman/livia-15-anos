export function buildWhatsAppLink(phone, message) {
  const normalizedPhone = normalizeWhatsAppPhone(phone);
  const url = new URL(`https://wa.me/${normalizedPhone}`);
  url.searchParams.set("text", message);
  return url.toString();
}

function normalizeWhatsAppPhone(phone) {
  const digits = `${phone}`.replace(/\D/g, "");

  if (digits.length === 11) {
    return `55${digits}`;
  }

  return digits;
}
