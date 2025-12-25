let latestScroll = 0;
const hero = document.querySelector(".hero");
const title = document.querySelector(".hero .text-content");

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;
});

function parallax() {
  if (hero && title) {
    const heroHeight = hero.offsetHeight;
    const scrollProgress = latestScroll / heroHeight;

    // Parallax for hero background
    hero.style.transform = `translateY(${latestScroll * -0.3}px)`;
    hero.style.transition = `unset`;

    // Parallax for text
    title.style.transform = `translateY(${latestScroll * -0.2}px)`;

    if (scrollProgress > 0.5) {
      const opacity = 1 - (scrollProgress - 0.5) * 2;
      title.style.opacity = Math.max(0, opacity);
    } else {
      title.style.opacity = 1;
    }
  }

  requestAnimationFrame(parallax);
}

requestAnimationFrame(parallax);


const togglebtn = document.querySelector(".toggleBtn");
const sidebarLink = document.querySelectorAll(".sidebar-link");
const body = document.body;

togglebtn.addEventListener('click', ()=>{
  body.classList.toggle('sidebar-show');
  if (body.classList.contains("sidebar-show")) {
    body.style.overflow = 'hidden';
  } else{
    body.style.overflow = "";
  }
})

sidebarLink.forEach((link) => {
  link.addEventListener('click', () =>{
    body.classList.remove("sidebar-show");
    body.style.overflow = "";
  })
});

