import { shirtIcon } from "../../shared/icons.js";

export function renderDressCodeSection(id, content) {
  return `
    <section id="${id}" class="info-card">
      <div class="info-card-icon info-card-icon-soft">
        <span class="info-card-svg">${shirtIcon}</span>
      </div>
      <h3>${content.title}</h3>
      <p>${content.description}</p>
      <div class="info-card-badge">
        <span>${content.badge}</span>
        <strong>${content.badgeValue}</strong>
      </div>
    </section>
  `;
}
