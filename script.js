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
    
    const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.add('inactive');
    page.style.transform = 'rotateY(0deg)';
  });

  if (index >= 0 && index < pages.length) {
    pages[index].classList.remove('inactive');
    pages[index].style.transform = 'rotateY(0deg)';
  }
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

showPage(currentPage); // Show the first page initially
