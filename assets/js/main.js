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
      closeOrderModal();
    }
  });

  // Email Order & Licensing Modal Controller
  const orderModal = document.getElementById("orderModal");
  const orderModalClose = document.getElementById("orderModalClose");
  const orderModalDismiss = document.getElementById("orderModalDismiss");
  const orderPlanTitle = document.getElementById("orderModalPlanTitle");
  const orderGmailBtn = document.getElementById("orderGmailBtn");
  const orderMailtoBtn = document.getElementById("orderMailtoBtn");
  const orderTemplatePre = document.getElementById("orderTemplatePre");
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const copyTemplateBtn = document.getElementById("copyTemplateBtn");

  const salesEmail = "vastraflow.sales@gmail.com";

  const buildOrderTemplate = (planName, planPrice) => {
    if (planName === "Support & Inquiries" || planName === "General Inquiry") {
      return {
        subject: "Inquiry: VastraFlow Retail POS & Licensing",
        body: `Hello VastraFlow Team,

I have a question regarding VastraFlow Retail POS.

My Details:
- Name: 
- Shop / Business Name: 
- Phone / WhatsApp Number: 
- City / State: 
- Requirement or Question: 

Thank you.`
      };
    }

    const priceText = planPrice ? ` (${planPrice})` : "";
    return {
      subject: `License Order Request: VastraFlow ${planName}${priceText}`,
      body: `Hello VastraFlow Team,

I would like to order a license for VastraFlow ${planName}${priceText}.

Please find my store and contact details below:
- Shop Name: 
- Contact Person: 
- Phone / WhatsApp Number: 
- City / State: 
- Machine ID (HWID): 

Please share official UPI payment details and activation instructions.

Thank you.`
    };
  };

  const openOrderModal = (planName, planPrice) => {
    if (!orderModal) return;

    const templateData = buildOrderTemplate(planName, planPrice);
    if (orderPlanTitle) {
      orderPlanTitle.textContent = planPrice
        ? `Order VastraFlow ${planName} (${planPrice})`
        : `Contact VastraFlow Sales Desk`;
    }

    if (orderTemplatePre) {
      orderTemplatePre.textContent = templateData.body;
    }

    const encodedSubject = encodeURIComponent(templateData.subject);
    const encodedBody = encodeURIComponent(templateData.body);

    if (orderGmailBtn) {
      orderGmailBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${salesEmail}&su=${encodedSubject}&body=${encodedBody}`;
    }

    if (orderMailtoBtn) {
      orderMailtoBtn.href = `mailto:${salesEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    }

    orderModal.classList.add("active");
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  };

  const closeOrderModal = () => {
    if (orderModal) {
      orderModal.classList.remove("active");
    }
  };

  // Attach to all order trigger buttons
  const orderTriggers = document.querySelectorAll(".js-order-trigger");
  orderTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const plan = trigger.getAttribute("data-plan") || "Lifetime Pro";
      const price = trigger.getAttribute("data-price") || "";
      openOrderModal(plan, price);
    });
  });

  if (orderModalClose) {
    orderModalClose.addEventListener("click", closeOrderModal);
  }

  if (orderModalDismiss) {
    orderModalDismiss.addEventListener("click", closeOrderModal);
  }

  if (orderModal) {
    orderModal.addEventListener("click", (e) => {
      if (e.target === orderModal) {
        closeOrderModal();
      }
    });
  }

  // Copy Email Button
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(salesEmail).then(() => {
        const originalHtml = copyEmailBtn.innerHTML;
        copyEmailBtn.classList.add("copied");
        copyEmailBtn.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px;"></i> <span>Copied!</span>`;
        if (typeof lucide !== "undefined" && lucide.createIcons) {
          lucide.createIcons();
        }
        setTimeout(() => {
          copyEmailBtn.classList.remove("copied");
          copyEmailBtn.innerHTML = originalHtml;
          if (typeof lucide !== "undefined" && lucide.createIcons) {
            lucide.createIcons();
          }
        }, 2000);
      }).catch(() => {
        prompt("Copy Email Address:", salesEmail);
      });
    });
  }

  // Copy Template Button
  if (copyTemplateBtn) {
    copyTemplateBtn.addEventListener("click", () => {
      const textToCopy = orderTemplatePre ? orderTemplatePre.textContent : "";
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalHtml = copyTemplateBtn.innerHTML;
        copyTemplateBtn.classList.add("copied");
        copyTemplateBtn.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px;"></i> <span>Copied!</span>`;
        if (typeof lucide !== "undefined" && lucide.createIcons) {
          lucide.createIcons();
        }
        setTimeout(() => {
          copyTemplateBtn.classList.remove("copied");
          copyTemplateBtn.innerHTML = originalHtml;
          if (typeof lucide !== "undefined" && lucide.createIcons) {
            lucide.createIcons();
          }
        }, 2000);
      }).catch(() => {
        prompt("Copy Template:", textToCopy);
      });
    });
  }
});
