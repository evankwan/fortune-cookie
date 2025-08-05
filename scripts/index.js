import fortunes from "./fortunes.js";
const app = {
    selectors: {
        fortuneCookieButton: undefined,
        fortuneText: undefined,
        fortuneWrapper: undefined,
        resetButton: undefined,
    },
    state: {
        currentFortune: null,
    },
    init: () => {
        app.initializeSelectors();
        app.initializeListeners();
    },
    initializeSelectors: () => {
        app.selectors.fortuneCookieButton = document.getElementById("fortune-cookie-button");
        app.selectors.fortuneText = document.getElementById("fortune");
        app.selectors.fortuneWrapper = document.getElementById("fortune-wrapper");
        app.selectors.resetButton = document.getElementById("reset-button");
    },
    initializeListeners: () => {
        app.selectors.fortuneCookieButton.addEventListener("click", app.handleButtonClick);
        app.selectors.resetButton.addEventListener("click", app.handleReset);
    },
    handleButtonClick: () => {
        app.state.currentFortune = app.generateFortune();
        app.showFortune();
    },
    generateFortune: () => {
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        return fortunes[randomIndex];
    },
    showFortune: () => {
        app.selectors.fortuneText.innerText = app.state.currentFortune;
        app.selectors.fortuneWrapper.classList.remove("hide");
        app.selectors.fortuneCookieButton.classList.add("hide");
    },
    handleReset: () => {
        app.selectors.fortuneText.innerText = "";
        app.selectors.fortuneWrapper.classList.add("hide");
        app.selectors.fortuneCookieButton.classList.remove("hide");
    }
};
window.addEventListener("load", app.init);
