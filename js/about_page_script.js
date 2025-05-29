// ========= News部分的 Hidden 按钮 =========
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



/* ========= 🌍访客地图组件 ========= */
document.addEventListener('DOMContentLoaded', () => {

    // 1. init map
    const map = L.map('leaflet-map', { zoomControl:false, attributionControl:false })
        .setView([20,0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom:6 }).addTo(map);

    // 2. pin THIS visitor (first time only)
    if (!localStorage.getItem('about-visit-pinned')) {
        // Use navigator.geolocation where allowed; fall back to ipinfo.io
        function pinHere(lat, lon) {
            L.marker([lat, lon], { icon: L.divIcon() }).addTo(map);
            localStorage.setItem('about-visit-pinned', 'yes');
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                pinHere(pos.coords.latitude, pos.coords.longitude);
            }, geoErr, { timeout: 4000 });
        } else {
            geoErr(); // go straight to IP lookup
        }

        function geoErr () {
            fetch('https://ipinfo.io/json?token=9f57fa21fc6bd0')
                .then(r => {
                    if (!r.ok) throw new Error('ipinfo ' + r.status);
                    return r.json();
                })
                .then(d => {
                    const [lat, lon] = d.loc.split(',');
                    pinHere(lat, lon);
                })
                .catch(err => console.warn('Geo-fallback failed:', err));
        }
    }

    Promise.race([
        new Promise(res => navigator.geolocation &&
            navigator.geolocation.getCurrentPosition(
                p => res([p.coords.latitude, p.coords.longitude]),
                () => res(null), { timeout:4000 })),
        fetch('https://ipapi.co/json/')
            .then(r => r.ok ? r.json() : null)
            .then(d => d ? [d.latitude, d.longitude] : null)
    ]).then(pos => {
        if (pos) pinHere(...pos);
        else console.info('Visitor location unavailable');
    });
    // 3. load seeds (optional starter dots)
    const seeds = [
        [31.2, 121.5],  // Shanghai
        [29.7, -95.4],  // Houston
        [45.5, -73.6],  // Montréal
    ];
    seeds.forEach(([lat, lon]) =>
        L.marker([lat, lon], { icon: L.divIcon() }).addTo(map)
    );
});
