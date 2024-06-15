window.addEventListener('load', () => {
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        setTimeout(() => {
            feature.style.transform = 'scale(1.1)';
            feature.style.transition = 'transform 0.5s';
            setTimeout(() => {
                feature.style.transform = 'scale(1)';
            }, 500);
        }, index * 300);
    });
});