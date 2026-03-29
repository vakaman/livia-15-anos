export function renderNavBar({ brideLabel, items }) {
  return `
    <header class="navbar">
      <div class="navbar-brand">${brideLabel}</div>
      <nav class="navbar-links" aria-label="Navegação principal">
        ${items.map((item) => `<a href="#${item.id}">${item.label}</a>`).join("")}
      </nav>
      <div class="navbar-spark" aria-hidden="true">♪</div>
    </header>
  `;
}
