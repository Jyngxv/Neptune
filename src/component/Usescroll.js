import { useEffect } from 'react';

export function useScroll() {
  useEffect(() => {
    const expandDiv = document.querySelector('#expand');
    console.log(expandDiv);
    const speed = 15;
    function expanding() {
      const scrollTop = window.pageYOffset + 700;
      const scrollAndSpeed = scrollTop / speed;
      expandDiv.style.width = Math.min(Math.max(scrollAndSpeed, 50), 100) + '%';
    }
    window.addEventListener(
      'scroll',
      function () {
        this.requestAnimationFrame(expanding);
      },
      false
    );
  });
}
