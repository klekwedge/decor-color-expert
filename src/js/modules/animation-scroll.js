function animationScroll() {
  const animItems = document.querySelectorAll('._anim-item');
  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i += 1) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.scrollY > animItemOffset - animItemPoint
        && window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      }
    }
  }

  if (animItems.length > 0) {
    animOnScroll();
    window.addEventListener('scroll', animOnScroll);
  }
}

export default animationScroll;
