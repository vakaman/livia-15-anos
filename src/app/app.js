import { invitationContent } from "../config/invitation.js";
import { renderDetailsSection } from "../modules/details/DetailsSection.js";
import { renderDressCodeSection } from "../modules/dresscode/DressCodeSection.js";
import { renderFooter } from "../modules/footer/Footer.js";
import { renderGiftSection } from "../modules/gift/GiftSection.js";
import { renderHomeSection } from "../modules/home/HomeSection.js";
import { renderMemoriesSection } from "../modules/memories/MemoriesSection.js";
import { renderRsvpSection } from "../modules/rsvp/RsvpSection.js";
import { renderNavBar } from "../shared/components/NavBar.js";
import { renderModal } from "../shared/components/Modal.js";
import { buildWhatsAppLink } from "../utils/whatsapp.js";

export function renderApp(root) {
  const rsvpLink = buildWhatsAppLink(
    invitationContent.contactPhone,
    invitationContent.rsvp.whatsappMessage,
  );

  root.innerHTML = `
    <div class="page-shell">
      <div class="page-glow page-glow-left"></div>
      <div class="page-glow page-glow-right"></div>
      ${renderNavBar({
        brideLabel: invitationContent.brandLabel,
        items: [
          { id: "inicio", label: "Início" },
          { id: "detalhes", label: "Detalhes" },
          { id: "vestimenta", label: "Vestimenta" },
          { id: "confirmar", label: "Confirmar" },
        ],
      })}

      <main class="page-content">
        ${renderHomeSection(invitationContent.hero)}
        ${renderDetailsSection("detalhes", invitationContent.details)}

        <section class="showcase-grid" aria-label="Memórias do convite">
          <div class="showcase-card showcase-photo-frame">
            <img
              class="showcase-photo showcase-photo-featured"
              src="${invitationContent.gallery.featured.src}"
              alt="${invitationContent.gallery.featured.alt}"
            />
          </div>

          <div class="showcase-stack">
            <div class="showcase-card showcase-secondary-frame">
              <img
                class="showcase-photo showcase-photo-secondary"
                src="${invitationContent.gallery.secondary.src}"
                alt="${invitationContent.gallery.secondary.alt}"
              />
            </div>
            <div class="showcase-card showcase-quote">
              <p>${invitationContent.quote}</p>
            </div>
          </div>
        </section>

        <section class="support-grid" aria-label="Informações extras">
          ${renderDressCodeSection("vestimenta", invitationContent.dressCode)}
          ${renderGiftSection(invitationContent.gift)}
        </section>

        ${renderMemoriesSection(invitationContent.memories)}
        ${renderRsvpSection("confirmar", invitationContent.rsvp, rsvpLink)}
        ${renderFooter(invitationContent.footer)}
      </main>

      ${renderModal("gift-modal", invitationContent.gift.modalTitle, invitationContent.gift)}
    </div>
  `;

  bindAppEvents(root);
}

function bindAppEvents(root) {
  root.querySelector("[data-action='details']")?.addEventListener("click", () => {
    document.getElementById("detalhes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  root.querySelector("[data-action='confirm']")?.addEventListener("click", () => {
    document.getElementById("confirmar")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const giftModal = root.querySelector("#gift-modal");
  const pixFeedback = root.querySelector("[data-role='pix-feedback']");
  root.querySelector("[data-action='open-gift']")?.addEventListener("click", () => {
    giftModal?.setAttribute("data-open", "true");
  });

  root.querySelectorAll("[data-action='close-modal']").forEach((element) => {
    element.addEventListener("click", () => {
      giftModal?.setAttribute("data-open", "false");
    });
  });

  giftModal?.addEventListener("click", (event) => {
    if (event.target === giftModal) {
      giftModal.setAttribute("data-open", "false");
    }
  });

  root.querySelector("[data-action='copy-pix']")?.addEventListener("click", async (event) => {
    const pixKey = event.currentTarget?.dataset?.pixKey;

    if (!pixKey) {
      return;
    }

    const copied = await copyTextToClipboard(pixKey);
    if (pixFeedback) {
      pixFeedback.textContent = copied ? "Chave PIX copiada." : "Não foi possível copiar automaticamente.";
    }
  });
}

async function copyTextToClipboard(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {}

  try {
    const input = document.createElement("input");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.append(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    return copied;
  } catch {
    return false;
  }
}
