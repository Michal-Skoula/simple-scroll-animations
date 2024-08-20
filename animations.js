// Check default behaviour for reanimating
const rootElement = document.documentElement;
const reanimate = getComputedStyle(rootElement).getPropertyValue('--reanimate-on-scroll-by-default');
reanimate.trim();

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    }
    else if(reanimate == 1 && !entry.target.classList.contains('once')) {
      entry.target.classList.remove('show')
    }
    else if(reanimate == 0 && entry.target.classList.contains('always')) {
      entry.target.classList.remove('show')
    }
    else if(reanimate == 0) {}
  });
});


const toBeAnimated = document.querySelectorAll('.animate');
setTimeout(() => {
  toBeAnimated.forEach((element) => {observer.observe(element)});
}, 400);
