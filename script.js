// Track which presents have been opened
const openedPresents = new Set();

// Open present and show content
function openPresent(stepNumber) {
  const contentContainer = document.getElementById(`content-${stepNumber}`);
  const step = document.querySelector(`[data-step="${stepNumber}"]`);
  const present = step.querySelector('.present');
  const sparkles = step.querySelector('.sparkles');
  
  // If already opened, do nothing
  if (openedPresents.has(stepNumber)) {
    return;
  }
  
  // Mark as opened
  openedPresents.add(stepNumber);
  
  // Animate sparkles
  sparkles.classList.add('sparkle-burst');
  
  // Hide the present emoji with animation
  present.classList.add('opened');
  
  // Show the content
  setTimeout(() => {
    contentContainer.classList.add('visible');
  }, 300);
  
  // Create confetti burst
  createConfetti(present);
}

// Create confetti effect
function createConfetti(element) {
  const rect = element.getBoundingClientRect();
  const colors = ['#c41e3a', '#ff6b6b', '#ffd700', '#90EE90', '#fff'];
  
  for (let i = 0; i < 20; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = rect.left + rect.width / 2 + 'px';
    confetti.style.top = rect.top + rect.height / 2 + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
    confetti.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
    confetti.style.setProperty('--r', Math.random() * 720 + 'deg');
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 1000);
  }
}

// Create snowflakes animation
function createSnow() {
  const snowContainer = document.getElementById('snow');
  const snowflakeCount = 60;
  
  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = Math.random() > 0.5 ? '❄' : '❅';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;
    snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';
    snowflake.style.animationDelay = Math.random() * 5 + 's';
    snowContainer.appendChild(snowflake);
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  createSnow();
  
  // Add staggered animation to presents
  const presents = document.querySelectorAll('.present');
  presents.forEach((present, index) => {
    present.style.animationDelay = (index * 0.2) + 's';
  });
});
