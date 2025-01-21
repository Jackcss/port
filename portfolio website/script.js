function toggleNav(){
   const hamburgerMenu = document.querySelector(".hamburger_nav");
   const androidLinks = document.querySelector(".android_links");
   androidLinks.classList.toggle("open");
   hamburgerMenu.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", () =>{
   const img = document.getElementById("work_display")
   const dynamicText = document.querySelectorAll(".dynamic_text > li");
   const totalItems = dynamicText.length;
   let currentIndex = 0;
 
   const displayCurrentItem = () =>{
      currentIndex = (currentIndex + 1) % totalItems;
       if(dynamicText[currentIndex].textContent === "Designer"){
         img.style.visibility = "visible";
         img.src = "designer.jpg";
         img.alt = "Wed designer"
       }
       else if(dynamicText[currentIndex].textContent === "Freelancer"){
         img.style.visibility = "visible";
         img.src = "freelancer.jpg";
         img.alt = "Freelancer"
       }
       else if(dynamicText[currentIndex].textContent === "Developer"){
         img.style.visibility = "visible";
         img.src = "devel.jpg";
         img.alt = "Wed developer"
       }
     
   }

    setInterval(() =>{
      displayCurrentItem();
     currentIndex = (currentIndex + 1) % totalItems;
    }, 1500)
})
alert(window.innerWidth)