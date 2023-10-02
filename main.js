
// Image Slider
   
const slideshowImages = document.querySelectorAll(".intro-slideshow img");
const nextImageDelay = 5000;
let currentImageCounter = 0; 

slideshowImages[currentImageCounter].style.opacity = 1;
setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}


const inputs = document.querySelectorAll("input");
const c = document.querySelector("#cel");
const f = document.querySelector("#fra");
const k = document.querySelector("#kel");

inputs.forEach(input=>{
    input.addEventListener("input",e =>{
        const unit = e.target.id;
        const v = parseInt(e.target.value);


        if(unit === "cel"){
            f.value=parseFloat((v*1.8)+32).toFixed(4)*1;
            k.value=parseFloat(v+273.15).toFixed(4)*1;
        }

        else if(unit === "fra"){
            c.value=parseFloat((v-32)*5/9).toFixed(4)*1;
            k.value=parseFloat(((v-32)*5/9)+273.15).toFixed(4)*1;  
              }
        
        else if(unit === "kel"){
            c.value=parseFloat(v-273.15).toFixed(4)*1;
            f.value=parseFloat((v-273.15)*9/5+32).toFixed(4)*1;
        }
    });
});

  