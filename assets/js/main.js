/**
 * VastraFlow Official Landing Page JavaScript
 * Clean English | Lucide Icons | Modal & FAQ Controller
 * Zero Emdash Guaranteed
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  // Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isCurrentOpen = item.classList.contains("active");

        // Close all others
        faqItems.forEach((other) => other.classList.remove("active"));

        // Toggle current
        if (!isCurrentOpen) {
          item.classList.add("active");
        }
      });
    }
  });

  // Download Trigger & Quick Setup Modal
  const downloadButtons = document.querySelectorAll(".js-download-btn");
  const downloadModal = document.getElementById("downloadModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalDismissBtn = document.getElementById("modalDismissBtn");

  const openDownloadModal = () => {
    if (downloadModal) {
      downloadModal.classList.add("active");
    }
  };

  const closeDownloadModal = () => {
    if (downloadModal) {
      downloadModal.classList.remove("active");
    }
  };

  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(openDownloadModal, 500);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeDownloadModal);
  }

  if (modalDismissBtn) {
    modalDismissBtn.addEventListener("click", closeDownloadModal);
  }

  if (downloadModal) {
    downloadModal.addEventListener("click", (e) => {
      if (e.target === downloadModal) {
        closeDownloadModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDownloadModal();
    }
  });
});
