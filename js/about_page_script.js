// Keep News visible initially; the control only affects this About wrapper.
document.addEventListener('DOMContentLoaded', () => {
    const aboutPage = document.querySelector('.about-page');
    if (!aboutPage) return;

    // Try the identical local copy once if an About R2 image fails.
    aboutPage.querySelectorAll('img[data-local-fallback]').forEach((image) => {
        const fallback = image.dataset.localFallback;
        const useLocalFallback = () => {
            image.removeEventListener('error', useLocalFallback);
            image.removeAttribute('data-local-fallback');
            image.src = fallback;
        };
        image.addEventListener('error', useLocalFallback, { once: true });
        // A primary image may have failed before this deferred script ran.
        if (image.complete && image.naturalWidth === 0) useLocalFallback();
    });

    const toggleNewsButton = aboutPage.querySelector('#toggle-news');
    const newsList = aboutPage.querySelector('#news-list');
    if (!toggleNewsButton || !newsList) return;

    toggleNewsButton.addEventListener('click', () => {
        newsList.hidden = !newsList.hidden;
        toggleNewsButton.textContent = newsList.hidden ? 'Show' : 'Hide';
        toggleNewsButton.setAttribute('aria-expanded', String(!newsList.hidden));
    });
});
