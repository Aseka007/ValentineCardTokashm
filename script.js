const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const envelope = document.getElementById('envelope');
const note = document.querySelector('.note');
const heartsContainer = document.getElementById('hearts');
const bgMusic = document.getElementById('bgMusic');

// Нажатие Yes
yesBtn.addEventListener('click', () => {
    envelope.classList.remove('hidden');
    bgMusic.play();
    startHearts();
});

// Кнопка No убегает
noBtn.addEventListener('mouseenter', () => {

    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();

    const maxX = cardRect.width - noBtn.offsetWidth;
    const maxY = cardRect.height - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // Супер быстрый рост кнопки "Иә"
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 15) + 'px'; // +15 = очень быстрый рост
});


// Открытие конверта
envelope.addEventListener('click', () => {
    note.classList.remove('hidden');
});

// Падающие разноцветные сердечки
function startHearts() {
    const colors = ['#ff4b6e', '#ff69b4', '#ff1493', '#ff8da1', '#ff0000', '#ff66cc'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerText = '❤️';

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 35) + "px";
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        const duration = 2 + Math.random() * 3;
        heart.style.animationDuration = duration + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }, 100); // 100 = очень много сердечек
}
