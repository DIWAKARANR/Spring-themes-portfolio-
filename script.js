document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add falling cherry blossoms
    const cherry_blossom = '🌺';
    const body = document.querySelector('body');

    function createCherryBlossom() {
        const blossom = document.createElement('div');
        blossom.classList.add('cherry-blossom');
        blossom.textContent = cherry_blossom;
        blossom.style.left = Math.random() * 100 + 'vw';
        blossom.style.animationDuration = Math.random() * 3 + 2 + 's';
        body.appendChild(blossom);

        setTimeout(() => {
            blossom.remove();
        }, 5000);
    }

    setInterval(createCherryBlossom, 300);

    // Add parallax effect to sections
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const speed = 0.5;
            const distance = window.scrollY;
            section.style.transform = `translateY(${distance * speed}px)`;
        });
    });

    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

// Add styles for cherry blossoms
const style = document.createElement('style');
style.textContent = `
    .cherry-blossom {
        position: fixed;
        top: -10px;
        font-size: 24px;
        user-select: none;
        pointer-events: none;
        animation: fall linear forwards;
        z-index: 1000;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);
