let hero = document.querySelector(".btn-hero").getBoundingClientRect(),
    heroHover = document.querySelector(".btn-hero-hover");
heroHover.style.transform = `translate(${hero.x}px, ${hero.y}px)`
heroHover.classList.add("hero-transform")

// var a;
// function show()
// {
//     if(a==1)
//     {
//         document.getElementById("crd-event").style.display="block"
//         return a=0;
//     }
//     else 
//     {
//         document.getElementById("crd-event").style.display="none";
//         return a=1;
//     }
// }

// Nanti dulu ini