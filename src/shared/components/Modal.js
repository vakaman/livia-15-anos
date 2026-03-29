export function renderModal(id, title, giftContent) {
  const presentearLabel = giftContent.pixLabel || giftContent.pixKey;
  const copyLabel = `Copiar chave PIX ${giftContent.pixKey}`;

  return `
    <div id="${id}" class="modal-backdrop" data-open="false">
      <div
        class="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${id}-title"
      >
        <div class="modal-header">
          <h3 id="${id}-title">${title}</h3>
          <button class="modal-close" type="button" data-action="close-modal" aria-label="Fechar modal">
            ×
          </button>
        </div>
        <div class="gift-modal">
          <p class="gift-modal-copy">${giftContent.modalText}</p>
          <img
            class="gift-modal-code"
            src="${giftContent.qrCodeDataUrl}"
            alt="QR code PIX para ${presentearLabel}"
            loading="eager"
            decoding="sync"
          />
          <div class="gift-modal-meta">
            <span>${giftContent.preferencesLabel}</span>
            <strong>${giftContent.preferencesText}</strong>
          </div>
          <div class="gift-modal-meta">
            <span>Chave PIX</span>
            <strong>${giftContent.pixKey}</strong>
          </div>
          <button
            class="button button-primary gift-modal-copy-button"
            type="button"
            data-action="copy-pix"
            data-pix-key="${giftContent.pixKey}"
            aria-label="${copyLabel}"
          >
            Copiar chave PIX
          </button>
          <p class="gift-modal-feedback" data-role="pix-feedback" aria-live="polite"></p>
          <div class="gift-modal-meta">
            <span>Favorecido</span>
            <strong>${presentearLabel}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}
