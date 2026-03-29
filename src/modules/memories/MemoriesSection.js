export function renderMemoriesSection(content) {
  const photos = content.photos
    .map(
      (photo, index) => `
        <figure class="memories-photo memories-photo-${index + 1}">
          <img src="${photo.src}" alt="${photo.alt}" />
        </figure>
      `,
    )
    .join("");

  return `
    <section class="memories-section card-section" aria-label="Galeria complementar">
      <div class="memories-copy">
        <span class="memories-eyebrow">${content.eyebrow}</span>
        <h2>${content.title}</h2>
        <p>${content.description}</p>
      </div>

      <div class="memories-collage">
        ${photos}
      </div>
    </section>
  `;
}
