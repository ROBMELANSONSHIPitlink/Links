/**
 * Global Timezone Clock
 * Displays current time in multiple timezones with real-time updates
 */

function updateClocks() {
    const clockCards = document.querySelectorAll('.clock-card');

    clockCards.forEach(card => {
        const timezone = card.getAttribute('data-timezone');
        const clockElement = card.querySelector('.clock');

        // Get current time in specified timezone
        const time = new Date().toLocaleString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        clockElement.textContent = time;
    });
}

// Update clocks immediately and then every second
updatClocks();
setInterval(updateClocks, 1000);

// Add smooth animation on page load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.clock-card');
    cards.forEach((card, index) => {
        card.style.animation = `slideIn 0.5s ease forwards`;
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);