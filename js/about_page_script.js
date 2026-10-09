// Keep News visible initially; the control only affects this About wrapper.
document.addEventListener('DOMContentLoaded', () => {
    const aboutPage = document.querySelector('.about-page');
    if (!aboutPage) return;

    const toggleNewsButton = aboutPage.querySelector('#toggle-news');
    const newsList = aboutPage.querySelector('#news-list');
    if (!toggleNewsButton || !newsList) return;

    toggleNewsButton.addEventListener('click', () => {
        newsList.hidden = !newsList.hidden;
        toggleNewsButton.textContent = newsList.hidden ? 'Show' : 'Hide';
        toggleNewsButton.setAttribute('aria-expanded', String(!newsList.hidden));
    });
});
