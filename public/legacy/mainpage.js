function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  document.getElementById("other-checkbox").addEventListener("change", function() {
    var textbox = document.getElementById("other-textbox");
    if (this.checked) {
      textbox.style.display = "block";
    } else {
      textbox.style.display = "none";
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener('click', ()=>{
    
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });
  
      
      hamburger.classList.toggle("toggle");
  });

  window.addEventListener('scroll', function() {
    const servicesSection = document.querySelector('.services');
    const serviceBoxes = document.querySelectorAll('.services .box');
    let scrollPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;

   
    const revealStart = windowHeight * 0.75; 

    
    const revealEnd = windowHeight * 1.5; 

    
    if (scrollPosition > revealStart && scrollPosition < revealEnd) {
       
        servicesSection.classList.add('reveal');
    } else {
        
        servicesSection.classList.remove('reveal');
    }

    
    serviceBoxes.forEach(function(box, index) {
        
        const boxRevealStart = revealStart + (index * 200); 
        const boxRevealEnd = boxRevealStart + 150; 

       
        if (scrollPosition > boxRevealStart && scrollPosition < boxRevealEnd) {
            
            box.classList.add('reveal');
        } else {
            
            box.classList.remove('reveal');
        }
    });
});

  
  
  