// Example: Hero Button Action
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Start your Netflix journey!');
});

// Add hover effects to movies
const movies = document.querySelectorAll('.movie img');
movies.forEach((movie) => {
    movie.addEventListener('mouseover', () => {
        movie.style.cursor = 'pointer';
    });
});
// Toggle FAQ answers
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.toggle');

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === 'block';

        // Close all answers
        faqItems.forEach(el => {
            el.querySelector('.faq-answer').style.display = 'none';
            el.querySelector('.toggle').textContent = '+';
        });

        // Open the clicked one
        if (!isOpen) {
            answer.style.display = 'block';
            toggle.textContent = '–';
        }
    });
});

// Language Selector Dropdown
const languageButton = document.getElementById('language-button');
const languageDropdown = document.getElementById('language-dropdown');

languageButton.addEventListener('click', () => {
    languageDropdown.classList.toggle('hidden');
    languageDropdown.classList.toggle('visible');
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
    if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
        languageDropdown.classList.add('hidden');
        languageDropdown.classList.remove('visible');
    }
});

// Email Validation on Button Click
const emailInput = document.getElementById('email');
const emailButton = document.querySelector('.btn-red');

emailButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert(`Email submitted: ${email}`);
    }
});

// Validate Email Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
