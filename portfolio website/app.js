const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercentage = [97 , 85 , 80 , 85 , 87 , 55];
const services = document.querySelectorAll(".service");
const servicess = document.querySelectorAll("i");

window.addEventListener("scroll" , () => {
   if(window.pageYOffset >= navbarOffsetTop){
       navbar.classList.add("sticky")
   }
   else{
       navbar.classList.remove("sticky");
   }
});

window.addEventListener("scroll" , ()=>{

    sections.forEach((section , i) =>{
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarlink =>{
                navbarlink.classList.remove("change");
            })
            navbarLinks[i].classList.add("change");
        }
    })

});


window.addEventListener("scroll" , ()=>{
  if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
      document.querySelectorAll(".progress-percent").forEach((el , i)=>{
          el.style.width = `${progressBarPercentage[i]}%`;
          el.previousElementSibling.lastChild.textContent = `${progressBarPercentage[i]} %`;
      })
  }
});



window.addEventListener("resize" , ()=>{
    window.location.reload();
})