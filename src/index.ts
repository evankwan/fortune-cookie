import { type Fortune, FORTUNE_TYPE, fortunes } from "./fortunes.js"
import { sleep } from "./utils/index.js"

const FORTUNE_TYPE_STYLE = {
    [FORTUNE_TYPE.DEV]: {
        setStyles: () => {
            app.selectors.main.classList.add("dev-mode")
            app.selectors.fortuneText.classList.add("fortune-text-dev")
        },
        removeStyles: () => {
            app.selectors.main.classList.remove("dev-mode")
            app.selectors.fortuneText.classList.remove("fortune-text-dev")
        }
    },
    [FORTUNE_TYPE.MISFORTUNE]: {
        setStyles: () => {
            app.selectors.fortuneText.classList.add("fortune-text-misfortune")
            app.selectors.fortuneWrapper.classList.add("fortune-wrapper-misfortune")
            app.selectors.resetButton.classList.add("reset-button-misfortune")
        },
        removeStyles: () => {
            app.selectors.fortuneText.classList.remove("fortune-text-misfortune")
            app.selectors.fortuneWrapper.classList.remove("fortune-wrapper-misfortune")
            app.selectors.resetButton.classList.remove("reset-button-misfortune")
        }
    },
    [FORTUNE_TYPE.NORMAL]: {
        setStyles: () => {},
        removeStyles: () => {}
    },
}

const app = {
    selectors: {
        fortuneCookieButton: undefined,
        fortuneCookieImg: undefined,
        fortuneText: undefined,
        fortuneWrapper: undefined,
        resetButton: undefined,
        main: undefined,
    },
    state: {
        currentFortune: null,
    },
    init: (): void => {
        app.initializeSelectors()
        app.initializeListeners()
    },
    initializeSelectors: (): void => {
        app.selectors.fortuneCookieButton = document.getElementById("fortune-cookie-button")
        app.selectors.fortuneCookieImg = document.getElementById("fortune-cookie-img")
        app.selectors.fortuneText = document.getElementById("fortune")
        app.selectors.fortuneWrapper = document.getElementById("fortune-wrapper")
        app.selectors.resetButton = document.getElementById("reset-button")
        app.selectors.main = document.getElementById("main")
    },
    initializeListeners: (): void => {
        app.selectors.fortuneCookieButton.addEventListener("click", app.handleButtonClick)
        app.selectors.resetButton.addEventListener("click", app.handleReset)
    },
    handleButtonClick: (): void => {
        app.state.currentFortune = app.generateFortune()
        app.showFortune()
    },
    generateFortune: (): Fortune => {
        const randomIndex = Math.floor(Math.random() * fortunes.length)
        return fortunes[randomIndex]
    },
    showFortuneOpeningAnimation: async(): Promise<void> => {
        app.selectors.fortuneCookieButton.classList.add("fortune-cookie-animation")
        await sleep(150) // wait for animation
        app.selectors.fortuneCookieImg.setAttribute("src", "assets/fortune-cookie-broken-76x84.png")
        await sleep(150) // wait for animation
    },
    showFortune: async(): Promise<void> => {
        await app.showFortuneOpeningAnimation()
        await sleep(200) // allow opened cookie to show briefly
        app.selectors.fortuneText.innerText = app.state.currentFortune.text
        FORTUNE_TYPE_STYLE[app.state.currentFortune.type].setStyles()
        app.selectors.fortuneCookieButton.classList.add("hide")
        app.selectors.fortuneWrapper.classList.remove("hide")
        app.selectors.fortuneText.classList.add("fortune-text-animation")
        app.selectors.fortuneCookieButton.classList.remove("fortune-cookie-animation")
        app.selectors.resetButton.classList.add("reset-button-fade-in")
    },
    handleReset: (): void => {
        app.selectors.fortuneCookieImg.setAttribute("src", "assets/fortune-cookie-76x76.png")
        app.selectors.fortuneText.innerText = ""
        FORTUNE_TYPE_STYLE[app.state.currentFortune.type].removeStyles()
        app.selectors.fortuneText.classList.remove(`fortune-text-${app.state.currentFortune.type}`)
        app.selectors.fortuneWrapper.classList.add("hide")
        app.selectors.fortuneCookieButton.classList.remove("hide")
        app.selectors.fortuneText.classList.remove("fortune-text-animation")
        app.selectors.resetButton.classList.remove("reset-button-fade-in")
        app.selectors.fortuneCookieButton.focus()
    }
}

window.addEventListener("load", app.init)