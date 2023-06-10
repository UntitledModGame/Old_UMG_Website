const scrollableImages = document.getElementsByClassName ("scrollableImage")

window.addEventListener ("scroll", () => {
    for (var i = 0; i < scrollableImages.length; i++) {
        const element = scrollableImages[i]
        const currentScrollPosition = document.documentElement.scrollTop
        const elementStartPosition = element.getBoundingClientRect().y + window.scrollY;
        const windowSize = window.innerHeight
        const scrollProgress = (currentScrollPosition - elementStartPosition) / windowSize
        const clampledScrollProgress = Math.max(0, Math.min(1, scrollProgress))
        element.style.left = (-10 * clampledScrollProgress) + "%" 
    }
})