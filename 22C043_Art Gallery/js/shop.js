document.addEventListener('DOMContentLoaded', () => {
    // Handle quantity increment and decrement
    document.querySelectorAll('.quantity').forEach(quantityDiv => {
        const incrementBtn = quantityDiv.querySelector('.increment');
        const decrementBtn = quantityDiv.querySelector('.decrement');
        const quantityInput = quantityDiv.querySelector('input[type="number"]');
        
        incrementBtn.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        decrementBtn.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
    });

    // Select all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const popupMessage = document.getElementById('popup-message');

    // Add click event listener to each 'Add to Cart' button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Change button style and text temporarily
            button.textContent = "Added!";
            button.style.backgroundColor = "#4CAF50";

            // Show the popup message
            popupMessage.classList.add('show');
            
            // Hide the popup message after 2 seconds
            setTimeout(() => {
                popupMessage.classList.remove('show');
                button.textContent = "Add to Cart"; // Reset button text
                button.style.backgroundColor = "#333"; // Reset button color
            }, 2000);
        });
    });

    // Handle image hover effects
    document.querySelectorAll('.image-wrapper').forEach(wrapper => {
        wrapper.addEventListener('mouseover', () => {
            wrapper.style.transform = "scale(1.05)";
            wrapper.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.2)";
        });

        wrapper.addEventListener('mouseout', () => {
            wrapper.style.transform = "scale(1)";
            wrapper.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        });
    });

    // Handle ratings
    document.querySelectorAll('.rating').forEach(ratingDiv => {
        const stars = ratingDiv.querySelectorAll('.fa-star');

        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                highlightStars(star.dataset.value, ratingDiv);
            });

            star.addEventListener('mouseout', () => {
                resetStars(ratingDiv);
            });

            star.addEventListener('click', () => {
                setRating(star.dataset.value, ratingDiv);
            });
        });

        function highlightStars(rating, ratingDiv) {
            const stars = ratingDiv.querySelectorAll('.fa-star');
            stars.forEach(star => {
                if (star.dataset.value <= rating) {
                    star.classList.add('highlighted');
                } else {
                    star.classList.remove('highlighted');
                }
            });
        }

        function resetStars(ratingDiv) {
            const stars = ratingDiv.querySelectorAll('.fa-star');
            stars.forEach(star => {
                star.classList.remove('highlighted');
            });

            const currentRating = ratingDiv.getAttribute('data-rating');
            if (currentRating) {
                highlightStars(currentRating, ratingDiv);
            }
        }

        function setRating(rating, ratingDiv) {
            ratingDiv.setAttribute('data-rating', rating);
            highlightStars(rating, ratingDiv);
        }
    });
});
