import ContactForm from "./Js_Screens/contactform.js";
import HeroSection from "./Js_Screens/herosection.js";


const heroSectionRouter = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.innerHTML = HeroSection.render();
}

const contactFormRouter = () => {
    const contactForm = document.getElementById("contact-me-section");
    contactForm.innerHTML = ContactForm.render();
}


const footerRouter = () => {
    const footer = document.getElementById("footer-section");
    footer.innerHTML = Footer.render();
}


window.addEventListener("load", heroSectionRouter);
window.addEventListener("load", contactFormRouter);
window.addEventListener("popstate", footerRouter);
