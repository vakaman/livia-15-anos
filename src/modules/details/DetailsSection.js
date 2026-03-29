import { renderSectionTitle } from "../../shared/components/SectionTitle.js";
import { calendarIcon, mapPinIcon } from "../../shared/icons.js";
import { buildGoogleCalendarLink } from "../../utils/calendar.js";
import { buildGoogleMapsLink } from "../../utils/maps.js";

export function renderDetailsSection(id, content) {
  const mapsLink = buildGoogleMapsLink(content.mapsQuery);
  const calendarLink = buildGoogleCalendarLink({
    title: content.calendarTitle,
    details: content.calendarDescription,
    location: content.address,
    startIso: content.eventStartIso,
    endIso: content.eventEndIso,
  });

  return `
    <section id="${id}" class="details-section card-section">
      <div class="details-portrait-frame">
        <div class="details-portrait-inner">
          <img class="details-portrait-image" src="${content.imageSrc}" alt="${content.imageAlt}" />
        </div>
      </div>

      <div class="details-copy">
        ${renderSectionTitle({ title: content.title, description: content.description })}

        <div class="details-meta-grid">
          <a class="details-meta-link" href="${calendarLink}" target="_blank" rel="noreferrer">
            <span class="details-meta-icon">${calendarIcon}</span>
            <div>
              <span>${content.dateLabel}</span>
              <strong>${content.dateText}</strong>
            </div>
          </a>

          <a class="details-meta-link" href="${mapsLink}" target="_blank" rel="noreferrer">
            <span class="details-meta-icon">${mapPinIcon}</span>
            <div>
              <span>${content.locationLabel}</span>
              <strong>${content.locationName}</strong>
            </div>
          </a>
        </div>

        <div class="details-actions">
          <button class="button button-primary" type="button" data-action="confirm">
            ${content.confirmLabel}
          </button>
          <a class="button button-secondary" href="${mapsLink}" target="_blank" rel="noreferrer">
            ${content.routeLabel}
          </a>
        </div>
      </div>
    </section>
  `;
}
