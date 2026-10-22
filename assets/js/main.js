/**
 * VastraFlow Official Landing Page JavaScript
 * Lucide Icons Integration, Mockup Tabs, FAQ Accordion, Download Modal
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
      const icon = mobileToggle.querySelector("i, svg");
      if (icon) {
        if (navLinks.classList.contains("mobile-open")) {
          mobileToggle.setAttribute("aria-label", "Close Navigation");
        } else {
          mobileToggle.setAttribute("aria-label", "Open Navigation");
        }
      }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
      });
    });
  }

  // Interactive App Showcase Screen Tabs
  const mockupTabs = document.querySelectorAll(".mockup-tab-btn");
  const mockupScreens = document.querySelectorAll(".mockup-screen");

  mockupTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetScreenId = tab.getAttribute("data-target");

      // Update tab active state
      mockupTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Show target screen
      mockupScreens.forEach((screen) => {
        if (screen.id === targetScreenId) {
          screen.classList.add("active");
        } else {
          screen.classList.remove("active");
        }
      });

      // Re-trigger icon rendering if needed
      if (typeof lucide !== "undefined" && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });

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
      // Small timeout to allow browser download to start before showing helpful setup guide
      setTimeout(openDownloadModal, 600);
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
