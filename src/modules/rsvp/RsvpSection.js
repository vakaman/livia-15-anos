export function renderRsvpSection(id, content, whatsappLink) {
  return `
    <section id="${id}" class="rsvp-section card-section">
      <div class="rsvp-header">
        <h2>${content.title}</h2>
        <p>${content.description}</p>
      </div>

      <div class="rsvp-panel">
        <div class="rsvp-deadline">
          <span>${content.deadlineLabel}</span>
          <strong>${content.deadlineText}</strong>
        </div>

        <p class="rsvp-note">${content.note}</p>

        <a class="button button-primary rsvp-action" href="${whatsappLink}" target="_blank" rel="noreferrer">
          ${content.actionLabel}
        </a>
      </div>
    </section>
  `;
}
