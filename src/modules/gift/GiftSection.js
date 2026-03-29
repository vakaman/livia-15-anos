import { giftIcon } from "../../shared/icons.js";

export function renderGiftSection(content) {
  return `
    <section class="info-card">
      <div class="info-card-icon info-card-icon-gold">
        <span class="info-card-svg">${giftIcon}</span>
      </div>
      <h3>${content.title}</h3>
      <p>${content.description}</p>
      <button class="link-button" type="button" data-action="open-gift">
        ${content.actionLabel}
      </button>
    </section>
  `;
}
