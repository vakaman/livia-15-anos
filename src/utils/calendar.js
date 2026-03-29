function formatGoogleCalendarDate(isoString) {
  return new Date(isoString).toISOString().replaceAll("-", "").replaceAll(":", "").split(".")[0] + "Z";
}

export function buildGoogleCalendarLink(input) {
  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", input.title);
  url.searchParams.set("details", input.details);
  url.searchParams.set("location", input.location);
  url.searchParams.set(
    "dates",
    `${formatGoogleCalendarDate(input.startIso)}/${formatGoogleCalendarDate(input.endIso)}`,
  );
  return url.toString();
}
