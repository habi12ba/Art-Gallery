document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect for team member cards
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseover', () => {
            member.style.transform = 'translateY(-10px)';
            member.style.transition = 'transform 0.3s';
        });

        member.addEventListener('mouseout', () => {
            member.style.transform = 'translateY(0)';
            member.style.transition = 'transform 0.3s';
        });
    });

    // Add read more functionality
    const readMoreBtn = document.getElementById('readMoreBtn');
    const aboutContent = document.querySelector('.about-content p');
    const originalText = aboutContent.textContent;
    const moreText = originalText + ' Additional content to show when "Read More" is clicked.';

    readMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (readMoreBtn.textContent === 'Read More') {
            aboutContent.textContent = moreText;
            readMoreBtn.textContent = 'Read Less';
        } else {
            aboutContent.textContent = originalText;
            readMoreBtn.textContent = 'Read More';
        }
    });

    // Handle form submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });

    // Add hover effect for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.transition = 'transform 0.3s';
        });
    });
});


