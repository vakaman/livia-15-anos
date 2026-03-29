export function renderHomeSection(content) {
  return `
    <section id="inicio" class="hero-section">
      <div class="hero-media">
        <div class="hero-media-frame">
          <img class="hero-media-image" src="${content.imageSrc}" alt="${content.imageAlt}" />
        </div>
      </div>

      <span class="hero-eyebrow">${content.eyebrow}</span>
      <h1>${content.title}</h1>
      <h2>${content.subtitle}</h2>
      <p>${content.description}</p>
      <button class="button button-primary" type="button" data-action="details">
        ${content.primaryActionLabel}
      </button>
    </section>
  `;
}
