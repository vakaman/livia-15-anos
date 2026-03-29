export function renderFooter(content) {
  return `
    <footer class="footer">
      <strong>${content.brand}</strong>
      <span>${content.line}</span>
    </footer>
  `;
}
