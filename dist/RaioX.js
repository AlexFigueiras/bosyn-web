/**
 * BOSYN Raio-X Component Logic
 * Controls the clip-path and handle position based on slider input
 */

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('raioXSlider');
    const imageB = document.getElementById('imageB');
    const handle = document.getElementById('sliderHandle');

    const updateSlider = () => {
        const value = slider.value;
        
        // Atualiza o clip-path da imagem superior (Image B)
        // O valor do slider inverte o comportamento do clip-path:
        // 0% -> Imagem B invisível (100% clip)
        // 100% -> Imagem B totalmente visível (0% clip)
        imageB.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        
        // Atualiza a posição do handle visual
        handle.style.left = `${value}%`;
    };

    // Event listener para interação em tempo real
    slider.addEventListener('input', updateSlider);

    // Inicializa na posição padrão (50%)
    updateSlider();
});
