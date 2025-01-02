const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slider.children.length;
const slideWidth = slider.clientWidth / totalSlides;
let arr1=[
    {
        title:"Smartphone",
        src:"categories1.png"
    },
    {
        title:"Watches",
        src:"categories2.png"
    },
    {
        title:"Electronics",
        src:"categories3.png"
    },
    {
        title:"furnitures",
        src:"categories4.png"
    },
    {
        title:"Colliction",
        src:"categories5.png"
    },
    {
        title:"Fashion",
        src:"categories6.png"
    }
]

let arr2=[
    {
        title:"Smartphone",
        src: "imgfolder/cardFeaturedProductsimg1.png",
        src2:"imgfolder/cardFeaturedProductsimg1back.png",
        class:"icondiv",
        className:"icondi"
    },
    {
        title:"Watches",
        src:"imgfolder/cardFeaturedProductsimg2.png",
        src2:"imgfolder/cardFeaturedProductsimg2back.png"
    },
    {
        title:"Electronics",
        src:"imgfolder/cardFeaturedProductsimg3.png",
        src2:"imgfolder/cardFeaturedProductsimg3back.png"
    },
    {
        title:"furnitures",
        src:"imgfolder/cardFeaturedProductsimg4.png",
        src2:"imgfolder/cardFeaturedProductsimg4full.png"
    },
    
]

let iconarr=[
    {
        
    },
    {
        title:"Watches",
        src:"imgfolder/cardFeaturedProductsimg2.png",
        src2:"imgfolder/cardFeaturedProductsimg2back.png"
    },
    {
        title:"Electronics",
        src:"imgfolder/cardFeaturedProductsimg3.png",
        src2:"imgfolder/cardFeaturedProductsimg3back.png"
    },
    {
        title:"furnitures",
        src:"imgfolder/cardFeaturedProductsimg4.png",
        src2:"imgfolder/cardFeaturedProductsimg4back.png"
    },
    
]
let arr3=[
    {
        title:"Smartphone",
        src: "imgfolder/blog1.jpg",
       
    },
    {
        title:"Watches",
        src:"imgfolder/blog2.jpg",
        
    }, 
    {
        title:"Watches",
        src:"imgfolder/blog3.jpg",
      
    },
  
    
]
// Set slider to loop automatically
const autoSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
};

// Update slider position
const updateSliderPosition = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Go to next slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
};

// Go to previous slide
const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
};

// Event listeners
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide interval
let slideInterval = setInterval(autoSlide, 3000);

// Pause on hover
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume on mouse leave
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 3000);
});


function creatcard(){
    let carcontainer=document.querySelector(".cardcontainer");
    arr1.map((item) => {
        // Create card div
        let div = document.createElement("div");
        div.className = "cardcategory";

        // Create and append image
        let img = document.createElement("img");
       
        img.src = item.src;
        img.alt = item.title;
        img.className="catagoryimg";
        div.appendChild(img);

        // Create and append title
        let title = document.createElement("h3");
        title.innerText = item.title;
        div.appendChild(title);

        // Append the card to the container
        carcontainer.appendChild(div);
      });
}

function cardProducts(){
    let cardFeaturedProducts=document.querySelector(".cardFeaturedProducts");
    arr2.map((item) => {
        // Create card div
        // Create card div
        let div = document.createElement("div");
        div.className = "cardFeaturedProductsdiv";
        
        // Create and append image
        let icondiv = document.createElement("div");
        icondiv.className = "icondiv";
        // div.appendChild(icondiv);
        div.addEventListener("mouseover", () => {
          if(!div.contains(icondiv)){
            div.appendChild(icondiv);
          }  
        
          });
          div.addEventListener("mouseout", () => {
            if(div.contains(icondiv)){
                div.removeChild(icondiv);
            } // Revert back to the original image
         
          });
        div.addEventListener("mouseover", () => {
            img.src = item.src2; // Update with your hover image source
                    
                
        
          });
          div.addEventListener("mouseout", () => {
            img.src = item.src; // Revert back to the original image
         
          });
        let img = document.createElement("img");
          img.src = item.src;
          img.alt = item.title;
          img.className="cardFeaturedProductsimg";
          div.appendChild(img);
          
          // Create and append title
          let title = document.createElement("h3");
          title.innerText = item.title;
          div.appendChild(title);
          cardFeaturedProducts.appendChild(div);

        // Append the card to the container
      });
}
function addfasion(){
    let fasion1=document.querySelector(".fasion1");
    fasion1.style.backgroundImage = "url('imgfolder/fasion1.png')";
}
function NewArrivalsproduct(){
    let cardFeaturedProducts=document.querySelector(".NewArrivals");
    arr2.map((item) => {
        // Create card div
        // Create card div
        let div = document.createElement("div");
        div.className = "cardFeaturedProductsdiv";
        
        // Create and append image
        let icondiv = document.createElement("div");
        icondiv.className = "icondiv";
        // div.appendChild(icondiv);
        div.addEventListener("mouseover", () => {
          if(!div.contains(icondiv)){
            div.appendChild(icondiv);
          }  
        
          });
          div.addEventListener("mouseout", () => {
            if(div.contains(icondiv)){
                div.removeChild(icondiv);
            } // Revert back to the original image
         
          });
        div.addEventListener("mouseover", () => {
            img.src = item.src2; // Update with your hover image source
                    
                
        
          });
          div.addEventListener("mouseout", () => {
            img.src = item.src; // Revert back to the original image
         
          });
        let img = document.createElement("img");
          img.src = item.src;
          img.alt = item.title;
          img.className="cardFeaturedProductsimg";
          div.appendChild(img);
          
          // Create and append title
          let title = document.createElement("h3");
          title.innerText = item.title;
          div.appendChild(title);
          cardFeaturedProducts.appendChild(div);

        // Append the card to the container
      });
}

function ourblogproduct(){
    let cardFeaturedProducts=document.querySelector(".ourblog");
    arr3.map((item) => {
        // Create card div
        // Create card div
        let div = document.createElement("div");
        div.className = "cardFeaturedourblog";
        
        // Create and append image
        let icondiv = document.createElement("div");
        icondiv.className = "ourblogdiv";
        // div.appendChild(icondiv);
       
        let img = document.createElement("img");
          img.src = item.src;
          img.alt = item.title;
          img.className="cardFeaturedProductsimg";
          div.appendChild(img);
          
          // Create and append title
          let title = document.createElement("h3");
          title.innerText = item.title;
          div.appendChild(title);
          cardFeaturedProducts.appendChild(div);

        // Append the card to the container
      });
}


creatcard();
cardProducts();
addfasion();
NewArrivalsproduct();
ourblogproduct();