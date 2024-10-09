document.addEventListener("DOMContentLoaded", function() {
    const artImages = document.querySelectorAll('.art-image img');
    artImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.1)';
            img.parentElement.style.backgroundColor = 'pink'; 
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
            img.parentElement.style.backgroundColor = 'pink'; 
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
            img.parentElement.style.backgroundColor = 'transparent'; 
        });
    });

    document.querySelectorAll('.menus a').forEach(anchor => {
        if (anchor.getAttribute('href').startsWith('#')) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });

    const backToTopButton = document.getElementById('back-to-top');
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const images = document.querySelectorAll(".exh_img img");

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };
});


