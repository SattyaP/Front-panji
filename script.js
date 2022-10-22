let hero = document.querySelector(".btn-hero").getBoundingClientRect(),
    heroHover = document.querySelector(".btn-hero-hover");
heroHover.style.transform = `translate(${hero.x}px, ${hero.y}px)`
heroHover.classList.add("hero-transform")