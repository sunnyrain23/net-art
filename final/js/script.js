document.addEventListener('click', (event) => {
    const flowers = ['🌻', '🌷', '🌼', '🌸', '🌺', '🌹'];
    
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];

    const flowerElement = document.createElement('span');
    flowerElement.classList.add('flower');
    flowerElement.textContent = randomFlower;


    flowerElement.style.left = `${event.clientX}px`;
    flowerElement.style.top = `${event.clientY}px`;

    document.body.appendChild(flowerElement);
});
