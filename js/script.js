// document.addEventListener('DOMContentLoaded', () => {
//     const toggleNewsButton = document.getElementById('toggle-news');
//     const newsList = document.getElementById('news-list');
//
//     toggleNewsButton.addEventListener('click', () => {
//         if (newsList.style.display === 'none' || !newsList.style.display) {
//             newsList.style.display = 'block';
//         } else {
//             newsList.style.display = 'none';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const toggleNewsButton = document.getElementById('toggle-news');
    const newsList = document.getElementById('news-list');

    // Default to show news
    newsList.style.display = 'block';
    toggleNewsButton.textContent = 'Hide';

    toggleNewsButton.addEventListener('click', () => {
        if (newsList.style.display === 'none') {
            newsList.style.display = 'block';
            toggleNewsButton.textContent = 'Hide';
        } else {
            newsList.style.display = 'none';
            toggleNewsButton.textContent = 'Show';
        }
    });
});
