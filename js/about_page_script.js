// ========= News: Hide / Show =========
document.addEventListener('DOMContentLoaded', () => {
    const toggleNewsButton = document.getElementById('toggle-news');
    const newsList = document.getElementById('news-list');

    if (!toggleNewsButton || !newsList) return;

    // Default: show
    newsList.style.display = 'block';
    toggleNewsButton.textContent = 'Hide';

    toggleNewsButton.addEventListener('click', () => {
        const hidden = newsList.style.display === 'none';
        newsList.style.display = hidden ? 'block' : 'none';
        toggleNewsButton.textContent = hidden ? 'Hide' : 'Show';
    });
});


