// javascript/main.js

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initNavToggle();
  initAccordion();
  initLightbox();
  initProductSearch();
  initForms();
});

// 1. Footer year
function initYear() {
  const yearSpans = document.querySelectorAll("[data-year]");
  const nowYear = new Date().getFullYear();
  yearSpans.forEach((el) => (el.textContent = nowYear));
}

// 2. Mobile nav toggle
function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

// 3. Accordion on About page
function initAccordion() {
  const buttons = document.querySelectorAll("[data-accordion-button]");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    const panelId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    if (!panel) return;

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
      panel.classList.toggle("is-open", !expanded);
    });
  });
}

// 4. Lightbox for product images
function initLightbox() {
  const overlay = document.querySelector("[data-lightbox]");
  const triggers = document.querySelectorAll("[data-lightbox-trigger]");
  if (!overlay || !triggers.length) return;

  const imgEl = overlay.querySelector("[data-lightbox-image]");
  const captionEl = overlay.querySelector("[data-lightbox-caption]");
  const closeEls = overlay.querySelectorAll("[data-lightbox-close]");

  const closeLightbox = () => {
    overlay.classList.remove("is-open");
    overlay.hidden = true;
    document.body.classList.remove("no-scroll");
  };

  const openLightbox = (src, alt, caption) => {
    if (imgEl) {
      imgEl.src = src;
      imgEl.alt = alt || "";
    }
    if (captionEl) {
      captionEl.textContent = caption || alt || "";
    }
    overlay.hidden = false;
    overlay.classList.add("is-open");
    document.body.classList.add("no-scroll");
  };

  triggers.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const src = thumb.getAttribute("src");
      const alt = thumb.getAttribute("alt") || "";
      const caption = thumb.getAttribute("data-caption") || "";
      if (src) openLightbox(src, alt, caption);
    });
  });

  closeEls.forEach((el) =>
    el.addEventListener("click", () => {
      closeLightbox();
    })
  );

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

// 5. Product search / filter
function initProductSearch() {
  const input = document.querySelector("[data-product-search]");
  const cards = document.querySelectorAll("[data-product-card]");
  if (!input || !cards.length) return;

  const normalise = (value) => value.toLowerCase().trim();

  input.addEventListener("input", () => {
    const term = normalise(input.value);
    cards.forEach((card) => {
      const nameEl = card.querySelector("[data-product-name]");
      const category = card.getAttribute("data-product-category") || "";
      const nameText = nameEl ? nameEl.textContent : "";
      const combined = normalise(nameText + " " + category);
      const match = term === "" || combined.includes(term);
      card.style.display = match ? "" : "none";
    });
  });
}

// 6. Form validation + AJAX-style submission
function initForms() {
  const forms = document.querySelectorAll("[data-validate-form]");
  if (!forms.length) return;

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const isValid = validateForm(form);
      if (!isValid) return;
      submitFormAJAX(form);
    });
  });
}

function validateForm(form) {
  const fields = form.querySelectorAll("[data-validate]");
  let firstInvalid = null;
  let valid = true;

  fields.forEach((field) => {
    const message = getFieldError(field);
    const errorEl = form.querySelector(
      `[data-error-for="${field.id}"]`
    );
    if (message) {
      valid = false;
      if (errorEl) errorEl.textContent = message;
      field.setAttribute("aria-invalid", "true");
      field.classList.add("field-error");
      field.classList.remove("field-valid");
      if (!firstInvalid) firstInvalid = field;
    } else {
      if (errorEl) errorEl.textContent = "";
      field.setAttribute("aria-invalid", "false");
      field.classList.remove("field-error");
      field.classList.add("field-valid");
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
  }

  return valid;
}

function getFieldError(field) {
  const value = field.value.trim();

  if (field.hasAttribute("required") && value === "") {
    return "This field is required.";
  }

  if (field.type === "email" && value !== "") {
    // Very simple email check, good enough for client-side validation in this context.
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address.";
    }
  }

  if (field.id === "phone" && value !== "") {
    const phonePattern = /^\+?[0-9\s\-]{7,}$/;
    if (!phonePattern.test(value)) {
      return "Please enter a valid phone number.";
    }
  }

  if (field.hasAttribute("minlength")) {
    const min = Number(field.getAttribute("minlength"));
    if (value.length > 0 && value.length < min) {
      return `Please enter at least ${min} characters.`;
    }
  }

  return "";
}

function submitFormAJAX(form) {
  const feedback = form.querySelector("[data-form-feedback]");
  if (feedback) {
    feedback.textContent = "Sending your message…";
  }

  const formData = new FormData(form);
  const payload = {};
  formData.forEach((value, key) => {
    payload[key] = value;
  });

  // Placeholder URL for academic purposes; in production this would be a real endpoint.
  fetch("https://example.com/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(() => {
      if (feedback) {
        feedback.textContent =
          "Thank you. Your message has been received.";
      }
      form.reset();

      // Clear any validation styles after successful submission
      form
        .querySelectorAll("[data-validate]")
        .forEach((field) => {
          field.classList.remove("field-valid", "field-error");
          field.setAttribute("aria-invalid", "false");
        });
    })
    .catch(() => {
      if (feedback) {
        feedback.textContent =
          "Sorry, there was a problem sending your message. Please try again.";
      }
    });
}