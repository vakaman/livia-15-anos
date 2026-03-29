export function buildAssetPath(fileName) {
  return encodeURI(`${import.meta.env.BASE_URL}imagens/${fileName}`);
}
