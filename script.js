 const typingElement = document.getElementById("typing");
    const words = ["designer", "developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000); // Pause before deleting
          return;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(type, isDeleting ? 80 : 100);
    }

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(type, 500); // Start typing after short delay
    });
    
  document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view"); // remove on exit
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
});

let currentIndex = 0;
  const scrollContainer = document.querySelector(".projects-scroll");
  const totalProjects = document.querySelectorAll(".project-card").length;

  document.getElementById("scrollRight").addEventListener("click", () => {
    if (currentIndex < totalProjects - 1) {
      currentIndex++;
      scrollToCard();
    }
  });

  document.getElementById("scrollLeft").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToCard();
    }
  });

  function scrollToCard() {
    const scrollWidth = document.querySelector(".projects-scroll-wrapper").offsetWidth;
    scrollContainer.style.transform = `translateX(-${scrollWidth * currentIndex}px)`;
  }

  // Optional: Update layout on window resize
  window.addEventListener("resize", scrollToCard);

  // Toggle nav on hamburger click
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.navbar ul');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close nav on link click (for mobile view)
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
      }
    });
  });



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

