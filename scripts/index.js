var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fortunes from "./fortunes.js";
import { sleep } from "./utils/index.js";
const app = {
    selectors: {
        fortuneCookieButton: undefined,
        fortuneCookieImg: undefined,
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
        app.selectors.fortuneCookieImg = document.getElementById("fortune-cookie-img");
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
    showFortuneOpeningAnimation: () => __awaiter(void 0, void 0, void 0, function* () {
        app.selectors.fortuneCookieButton.classList.add("fortune-cookie-animation");
        yield sleep(150); // wait for animation
        app.selectors.fortuneCookieImg.setAttribute("src", "assets/fortune-cookie-broken-76x84.png");
        yield sleep(150); // wait for animation
    }),
    showFortune: () => __awaiter(void 0, void 0, void 0, function* () {
        yield app.showFortuneOpeningAnimation();
        yield sleep(200); // allow opened cookie to show briefly
        app.selectors.fortuneText.innerText = app.state.currentFortune;
        app.selectors.fortuneCookieButton.classList.add("hide");
        app.selectors.fortuneWrapper.classList.remove("hide");
        app.selectors.fortuneText.classList.add("fortune-text-animation");
        app.selectors.fortuneCookieButton.classList.remove("fortune-cookie-animation");
        app.selectors.resetButton.classList.add("reset-button-fade-in");
    }),
    handleReset: () => {
        app.selectors.fortuneCookieImg.setAttribute("src", "assets/fortune-cookie-76x76.png");
        app.selectors.fortuneText.innerText = "";
        app.selectors.fortuneWrapper.classList.add("hide");
        app.selectors.fortuneCookieButton.classList.remove("hide");
        app.selectors.fortuneText.classList.remove("fortune-text-animation");
        app.selectors.resetButton.classList.remove("reset-button-fade-in");
        app.selectors.fortuneCookieButton.focus();
    }
};
window.addEventListener("load", app.init);
