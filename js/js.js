document.addEventListener("DOMContentLoaded", function(){
const girl1 = document.querySelector('.girl1');
if (girl1) {
    setInterval(() => {
        girl1.style.opacity = '0';
        
        setTimeout(() => {
            girl1.style.opacity = '1';
        }, 200);
        
    }, 2000);
}
});

document.addEventListener("DOMContentLoaded", function(){
    // Мигание girl1
    const girl1 = document.querySelector('.girl1');
    if (girl1) {
        setInterval(() => {
            girl1.style.opacity = '0';
            setTimeout(() => {
                girl1.style.opacity = '1';
            }, 200);
        }, 2000);
    }
    
    // Анимация цветка
    const flower1 = document.querySelector('.flower1');
    const maxScroll = 800; // максимальный скролл для анимации
    
    window.addEventListener('scroll', function() {
        if (!flower1) return;
        
        // Берем позицию скролла
        let scrollY = window.scrollY;
        
        // Ограничиваем скролл для анимации
        let progress = Math.min(scrollY, maxScroll) / maxScroll;
        
        // Для возвращения (после maxScroll начинаем уменьшать)
        if (scrollY > maxScroll) {
            progress = 2 - (scrollY / maxScroll);
            progress = Math.max(0, progress);
        }
        
        // Параметры анимации:
        const translateX = progress * -200;      // влево (отрицательное значение)
        const translateY = progress * 300;       // вниз
        const scale = 1 + (progress * 0.3);      // увеличение только на 30%
        const rotate = progress * 180;            // поворот на 180°
        
        // Применяем трансформацию
        flower1.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`;
        
        console.log('Progress:', progress);
    });
});