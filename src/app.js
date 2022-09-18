import AboutMe from "./Js_Screens/aboutme.js";
import ContactForm from "./Js_Screens/contactform.js";
import DesignUX from "./Js_Screens/designUX.js";
import Education from "./Js_Screens/education.js";
import HeroSection from "./Js_Screens/herosection.js";
import Remarks from "./Js_Screens/remarks.js";
import Skills from "./Js_Screens/skills.js";
import Projects from "./Js_Screens/projects.js";


const heroSectionRouter = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.innerHTML = HeroSection.render();
}

const aboutMeRouter = () => {
    const aboutMeSection = document.getElementById("aboutme");
    aboutMeSection.innerHTML = AboutMe.render();
    AboutMe.after_render_aboutMeTimeLine();
}

const skillsRouter = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection.innerHTML = Skills.render();
}

const educationRouter = () => {
    const educationSection = document.getElementById("education");
    educationSection.innerHTML = Education.render();
    Education.after_render_flipCard();
    Education.after_render_showHideContent();
    Education.after_render_timeLine();
}

const designUXRouter = () => {
    const designUXSection = document.getElementById("uxdesigns");
    designUXSection.innerHTML = DesignUX.render();
    DesignUX.after_render_designUxCard_modal();
}

const projectsRouter = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.innerHTML = Projects.render();
    Projects.after_render_projectsModal();
    Projects.after_render_modalsImgChange();
}

const remarksRouter = () => {
    const remarksSection = document.getElementById("remarks-section");
    remarksSection.innerHTML = Remarks.render();
}

const contactFormRouter = () => {
    const contactForm = document.getElementById("contact-me-section");
    contactForm.innerHTML = ContactForm.render();
}


const footerRouter = () => {
    const footer = document.getElementById("footer-section");
    footer.innerHTML = footer.render();
}


// function add()
// {
// let myfirstNumber = document.getElementById("firstNumber").value;
// let mysecondNumber = document.getElementById("secondNumber").value;

// let result = parseFloat(myfirstNumber) + parseFloat(mysecondNumber);



// document.getElementById("result").value = result;


// }



window.addEventListener("load", heroSectionRouter);
window.addEventListener("load", aboutMeRouter);
window.addEventListener("load", skillsRouter);
window.addEventListener("load", educationRouter);
window.addEventListener("load", designUXRouter);
window.addEventListener("load", projectsRouter);
window.addEventListener("load", remarksRouter);
window.addEventListener("load", contactFormRouter);
window.addEventListener("popstate", footerRouter);
