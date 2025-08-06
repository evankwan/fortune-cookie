import fortunes from "./fortunes.js"
import { sleep } from "./utils/index.js"

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
        app.initializeSelectors()
        app.initializeListeners()
    },
    initializeSelectors: () => {
        app.selectors.fortuneCookieButton = document.getElementById("fortune-cookie-button")
        app.selectors.fortuneCookieImg = document.getElementById("fortune-cookie-img")
        app.selectors.fortuneText = document.getElementById("fortune")
        app.selectors.fortuneWrapper = document.getElementById("fortune-wrapper")
        app.selectors.resetButton = document.getElementById("reset-button")
    },
    initializeListeners: () => {
        app.selectors.fortuneCookieButton.addEventListener("click", app.handleButtonClick)
        app.selectors.resetButton.addEventListener("click", app.handleReset)
    },
    handleButtonClick: () => {
        app.state.currentFortune = app.generateFortune()
        app.showFortune()
    },
    generateFortune: (): string => {
        const randomIndex = Math.floor(Math.random() * fortunes.length)
        return fortunes[randomIndex]
    },
    showFortune: async() => {
        app.selectors.fortuneCookieButton.classList.add("fortune-cookie-animation");
        await sleep(150) // wait for animation
        app.selectors.fortuneCookieImg.setAttribute("src", "assets/fortune-cookie-broken-76x76.png")
        await sleep(150) // wait for animation
        await sleep(200) // allow opened cookie to show briefly
        app.selectors.fortuneText.innerText = app.state.currentFortune
        app.selectors.fortuneWrapper.classList.remove("hide")
        app.selectors.fortuneCookieButton.classList.add("hide")
        app.selectors.fortuneCookieButton.classList.remove("fortune-cookie-animation")
    },
    handleReset: () => {
        app.selectors.fortuneCookieImg.setAttribute("src", "assets/fortune-cookie-76x76.png")
        app.selectors.fortuneText.innerText = ""
        app.selectors.fortuneWrapper.classList.add("hide")
        app.selectors.fortuneCookieButton.classList.remove("hide")
        app.selectors.fortuneCookieButton.focus()
    }
}

window.addEventListener("load", app.init)