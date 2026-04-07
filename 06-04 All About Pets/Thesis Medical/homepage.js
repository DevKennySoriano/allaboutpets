let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); 
}

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.home');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
});


window.addEventListener('scroll', function() {
    const element = document.querySelector('.about');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

    
    const revealStart = windowHeight * 0.50; 

    
    const hideStart = windowHeight * 1.2; 

    
    if (scrollPosition > revealStart && scrollPosition < hideStart) {
        element.classList.add('reveal');
    } else {
        element.classList.remove('reveal');
    }
});

window.addEventListener('scroll', function() {
    const servicesSection = document.querySelector('.services');
    const serviceBoxes = document.querySelectorAll('.services .box-container');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

    
    const revealStart = servicesSection.offsetTop - windowHeight * .65; 

    
    const revealEnd = servicesSection.offsetTop + servicesSection.offsetHeight - windowHeight * 0.80; 

    
    if (scrollPosition > revealStart && scrollPosition < revealEnd) {
       
        servicesSection.classList.add('reveal');
    } else {
        
        servicesSection.classList.remove('reveal');
    }

  
});

window.addEventListener('scroll', function() {
    const doctorsSection = document.querySelector('.doctors');
    const doctorCards = document.querySelectorAll('.doctors .card');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

    const revealStart = doctorsSection.offsetTop - windowHeight * .90; 
    const revealEnd = doctorsSection.offsetTop + doctorsSection.offsetHeight - windowHeight * 0.65; 

    if (scrollPosition > revealStart && scrollPosition < revealEnd) {
        doctorsSection.classList.add('reveal');
    } else {
        doctorsSection.classList.remove('reveal');
    }

    doctorCards.forEach(function(card, index) {
        const cardRevealStart = revealStart + (index * 50);
        const cardRevealEnd = cardRevealStart + 1500;
        if (scrollPosition > cardRevealStart && scrollPosition < cardRevealEnd) {
            card.classList.add('reveal');
        } else {
            card.classList.remove('reveal');
        }
    });
});



window.addEventListener('scroll', function() {
    const reviewSection = document.querySelector('.review');
    const reviewBoxes = document.querySelectorAll('.review .box');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

    const revealStart = reviewSection.offsetTop - windowHeight * 1; 
    const revealEnd = reviewSection.offsetTop + reviewSection.offsetHeight - windowHeight * 0.65;

    if (scrollPosition > revealStart && scrollPosition < revealEnd) {
        reviewSection.classList.add('reveal');
    } else {
        reviewSection.classList.remove('reveal');
    }

    reviewBoxes.forEach(function(box, index) {
        const boxRevealStart = revealStart + (index * 150); 
        const boxRevealEnd = boxRevealStart + 1200; 

        if (scrollPosition > boxRevealStart && scrollPosition < boxRevealEnd) {
            box.classList.add('reveal');
        } else {
            box.classList.remove('reveal');
        }
    });
});

window.addEventListener('scroll', function() {
    const reviewSection = document.querySelector('.review');
    const reviewItems = document.querySelectorAll('.review .review-item');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

    const revealStart = reviewSection.offsetTop - windowHeight * 1.2;
    const revealEnd = reviewSection.offsetTop + reviewSection.offsetHeight - windowHeight * 0.60; 
    if (scrollPosition > revealStart && scrollPosition < revealEnd) {
        reviewSection.classList.add('reveal');
    } else {
        reviewSection.classList.remove('reveal');
    }

    reviewItems.forEach(function(item, index) {
        const itemRevealStart = revealStart + (index * 100); 
        const itemRevealEnd = itemRevealStart + 300; 

        if (scrollPosition > itemRevealStart && scrollPosition < itemRevealEnd) {
            item.classList.add('reveal');
        } else {
            item.classList.remove('reveal');
        }
    });
});

window.addEventListener('scroll', function() {
    const blogsSection = document.querySelector('.blogs');
    const blogBoxes = document.querySelectorAll('.blogs .box');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

    const revealStart = blogsSection.offsetTop - windowHeight * 0.50; 
    const revealEnd = blogsSection.offsetTop + blogsSection.offsetHeight - windowHeight * 0.50; 

    if (scrollPosition > revealStart && scrollPosition < revealEnd) {
        blogsSection.classList.add('reveal');
    } else {
        blogsSection.classList.remove('reveal');
    }

    blogBoxes.forEach(function(box, index) {
        const boxRevealStart = revealStart + (index * 2000); 
        const boxRevealEnd = boxRevealStart + 1000; 

        if (scrollPosition > boxRevealStart && scrollPosition < boxRevealEnd) {
            box.classList.add('reveal');
        } else {
            box.classList.remove('reveal');
        }
    });
});


