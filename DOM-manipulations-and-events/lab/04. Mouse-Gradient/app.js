function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientPercent);
    function gradientPercent(ev) {
        document.getElementById('result').textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
}