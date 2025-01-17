document.addEventListener('DOMContentLoaded', () => {
    const toggleNewsButton = document.getElementById('toggle-news');
    const newsList = document.getElementById('news-list');

    toggleNewsButton.addEventListener('click', () => {
        if (newsList.style.display === 'none' || !newsList.style.display) {
            newsList.style.display = 'block';
        } else {
            newsList.style.display = 'none';
        }
    });
});
