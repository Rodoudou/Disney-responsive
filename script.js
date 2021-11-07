const logoNav = document.querySelector(".logo-nav");
const banner = document.querySelector(".banner");
const nav = document.querySelector(".nav");
const signup = document.querySelector(".btn-primary");
let lastScrollY = window.scrollY;
// console.log("lastScrollY",lastScrollY);
// console.log("signup",signup);

window.addEventListener("scroll", function () {
    //  faire apparaitre la navbar dans le scrolldown niveau 620 sur l'axe des Y
    if(lastScrollY > 553){
        nav.classList.add('transparent');
    }else{
        nav.classList.remove('transparent');
    }

    // faire apparaitre le signup et le logo de la nav dans le scrolldown niveau 620 sur l'axe des Y
    if(lastScrollY > 553 ){
        signup.classList.remove('hidden-signup');
        logoNav.classList.remove('hidden-logoNav');
    }else{
        signup.classList.add('hidden-signup');
        logoNav.classList.add('hidden-logoNav');
        console.log(logoNav);
        console.log(signup);
    }
      
    lastScrollY = this.window.scrollY;
  });