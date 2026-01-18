'use strict';


function smoothScrollTo(targetId, duration = 100) {
  const target = document.querySelector(targetId);
  if (!target) return;
  
  const headerHeight = document.querySelector('header')?.offsetHeight || 70;
  const startPosition = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top + startPosition - headerHeight;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = function(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
      
      window.scrollTo(0, startPosition + distance * ease(progress));
      
      if (progress < 1) {
          requestAnimationFrame(animation);
      }
  }
  
  requestAnimationFrame(animation);
}

document.getElementById('togglePaints')
    .addEventListener('click', () => {
      document
        .getElementById('paintsList')
        .classList
        .toggle('d-none');
    });

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          smoothScrollTo(targetId, 100);
      });
  });
   
    document.querySelectorAll('.faq-item__header')
    .forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.faq-item');

        document.querySelectorAll('.faq-item')
          .forEach(i => {
            if (i !== item) i.classList.remove('active');
          });

        item.classList.toggle('active');
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
      const btn = document.getElementById('togglePaints');
      const list = document.getElementById('paintsList');

   
  btn.addEventListener('click', function (e) {
    e.stopPropagation(); 
    list.classList.toggle('show');
    btn.style.zIndex="100";
  });
  list.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  document.addEventListener('click', function () {
    list.classList.remove('show');
  });
  });