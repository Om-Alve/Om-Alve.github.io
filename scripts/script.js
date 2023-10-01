const introNav = document.getElementById('introNav');
const techStackNav = document.getElementById('techStackNav');
const projectsNav = document.getElementById('projectsNav');
// const contactMe = document.querySelector('.nav-link');

introNav.addEventListener('click',(e) => {
  e.preventDefault();
  document.getElementById('intro').scrollIntoView({
    behavior: 'smooth'
  });
})
techStackNav.addEventListener('click',(e) => {
  e.preventDefault();
  document.getElementById('techstack').scrollIntoView({
    behavior: 'smooth'
  });
})
projectsNav.addEventListener('click',(e) => {
  e.preventDefault();
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });
})