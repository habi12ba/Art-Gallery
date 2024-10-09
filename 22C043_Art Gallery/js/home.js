document.addEventListener("DOMContentLoaded", function() {
    const artImages = document.querySelectorAll('.art-image img');
    artImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
            img.parentElement.style.backgroundColor = 'grey'; 
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
            img.parentElement.style.backgroundColor = 'transparent'; 
        });
    });

    const musImages = document.querySelectorAll('.mus-image img');
    musImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
            img.parentElement.style.backgroundColor = 'grey'; 
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
            img.parentElement.style.backgroundColor = 'transparent'; 
        });
    });
});


