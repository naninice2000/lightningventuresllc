
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = encodeURIComponent(formData.get("name") || "");
    const email = encodeURIComponent(formData.get("email") || "");
    const topic = encodeURIComponent(formData.get("topic") || "General Inquiry");
    const message = encodeURIComponent(formData.get("message") || "");

    const subject = `Lightning Ventures LLC Inquiry: ${decodeURIComponent(topic)}`;
    const body = `Name: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0ATopic: ${decodeURIComponent(topic)}%0D%0A%0D%0AMessage:%0D%0A${decodeURIComponent(message)}`;
    window.location.href = `mailto:support@lightningventuresllc.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  });
}
