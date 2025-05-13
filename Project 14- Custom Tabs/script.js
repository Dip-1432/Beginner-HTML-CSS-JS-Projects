const homeTab = document.getElementById("home");
const aboutMeTab = document.getElementById("aboutMe");
const projectsTab = document.getElementById("projects");
const portfolioTab = document.getElementById("portfolio");
const contactTab = document.getElementById("contact");

const signUpTab = document.getElementById("signUp");
const logInTab = document.getElementById("logIn");

const main = document.querySelector("main");

homeTab.addEventListener("click", () => {
   main.textContent = "This is the Home Section";
});
aboutMeTab.addEventListener("click", () => {
   main.textContent = "This is the section where you can know details about me";
});
projectsTab.addEventListener("click", () => {
   main.textContent = "This is the section where you can see my latest projects";
});
portfolioTab.addEventListener("click", () => {
   main.textContent = "This is the section where you can see all my works";
});
contactTab.addEventListener("click", () => {
   main.textContent = "This is the Contact Section";
});

signUpTab.addEventListener("click", () => {
   main.textContent = "This is the button for signing up to my website";
});
logInTab.addEventListener("click", () => {
   main.textContent = "This is the button for logging in to my website";
});
