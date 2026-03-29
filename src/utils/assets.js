export function buildAssetPath(fileName) {
  const baseUrl = import.meta.env?.BASE_URL ?? getRuntimeBaseUrl();
  return encodeURI(`${baseUrl}imagens/${fileName}`);
}

function getRuntimeBaseUrl() {
  if (typeof window === "undefined") {
    return "/";
  }

  const { pathname } = window.location;
  const lastSlashIndex = pathname.lastIndexOf("/");
  return pathname.slice(0, lastSlashIndex + 1) || "/";
}
