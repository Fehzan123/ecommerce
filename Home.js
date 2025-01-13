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
        title:" Analogue Resin Strap ",
        src: "imgfolder/cardFeaturedProductsimg1.png",
        src2:"imgfolder/cardFeaturedProductsimg1back.png",
        class:"icondiv",
        className:"icondi",
        price:895

    },
    {
        title:" Ridley High Waist ",
        src:"imgfolder/cardFeaturedProductsimg2.png",
        src2:"imgfolder/cardFeaturedProductsimg2back.png",
        price:895
    },
    {
        title:" Blush Beanie ",
        src:"imgfolder/cardFeaturedProductsimg3.png",
        src2:"imgfolder/cardFeaturedProductsimg3back.png",
        price:895
    },
    {
        title:" Mercury Tee ",
        src:"imgfolder/cardFeaturedProductsimg4.png",
        src2:"imgfolder/cardFeaturedProductsimg4full.png",
        price:895
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
const icons = [
    { name: "Home", icon: "🏠" },
    { name: "Search", icon: "🔍" },
    { name: "Settings", icon: "⚙️" },
    { name: "Profile", icon: "👤" }
  ];

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

function cardProducts() {
    let cardFeaturedProducts = document.querySelector(".cardFeaturedProducts");

    arr2.map((item) => {
        // Create card div
        let div = document.createElement("div");
        div.className = "cardFeaturedProductsdiv";

        // Create and append image
        let icondiv = document.createElement("div");
        icondiv.className = "icondiv";


        div.addEventListener("mouseover", () => {
            img.src = item.src2; // Update with your hover image source
        });

        div.addEventListener("mouseout", () => {
            img.src = item.src; // Revert back to the original image
        });

        // Create the image
        let img = document.createElement("img");
        img.src = item.src;
        img.alt = item.title;
        img.className = "cardFeaturedProductsimg";
        div.appendChild(img);

        // Create anchor tag for title
        let anchor = document.createElement("a");
        anchor.href = "#";  // You can set this to a specific URL
        anchor.className = "product-title";
        anchor.draggable = true;

        // Create title
        let title = document.createElement("h3");
      
        title.innerText = item.title;
        title.style.color = "black";  // Styling the title color
        anchor.appendChild(title);  // Append title to anchor

        // Create an array with 4 stars
        const stars = [1, 2, 3, 4]; // Array with 4 items, each representing a star icon

        // Map through the array and create star icons
        stars.map((star) => {
            let starIcon = document.createElement("i");
            starIcon.className = "fa fa-star";  // Assuming you're using Font Awesome for the star icon
            starIcon.style.marginLeft = "5px"; // Optional: add some space between the stars
            starIcon.style.marginTop = "15px"; // Optional: add some space between the stars
            starIcon.style.color = "#FFD700";  // Gold color for the star icon (you can change this)
            anchor.appendChild(starIcon); // Append the star icon to the anchor tag
        });

        // Append anchor tag to the card div
       
        
        div.appendChild(anchor);
        let price = document.createElement("div");
       price.innerHTML=`$${item.price}`;
       div.appendChild(price);
        // Styling the title color
        
        // Append the card to the container
        cardFeaturedProducts.appendChild(div);
    });
}


function addfasion(){
    let fasion1=document.querySelector(".fasion1");
    fasion1.style.backgroundImage = "url('imgfolder/fasion1.png')";
}
function createHoverHandler(div, img, icondiv, item) {
    div.addEventListener("mouseover", () => {
        if (!div.contains(icondiv)) div.appendChild(icondiv);
        img.src = item.src2; // Hover image source
    });
    div.addEventListener("mouseout", () => {
        if (div.contains(icondiv)) div.removeChild(icondiv);
        img.src = item.src; // Original image source
    });
}

function NewArrivalsproduct() {
    let cardFeaturedProducts = document.querySelector(".NewArrivals");
    arr2.map((item) => {
        let div = document.createElement("div");
        div.className = "cardFeaturedProductsdiv";

        let icondiv = document.createElement("div");
        icondiv.className = "icondiv";

        let img = document.createElement("img");
        img.src = item.src;
        img.alt = item.title;
        img.className = "cardFeaturedProductsimg";
        div.appendChild(img);

        let title = document.createElement("h3");
        title.innerText = item.title;
        div.appendChild(title);

        let prostar = document.createElement("div");
        prostar.className = "prostar";

        const stars = [1, 2, 3, 4];
        stars.forEach((star) => {
            let starIcon = document.createElement("i");
            starIcon.className = "fa fa-star";  // Ensure Font Awesome is loaded
            starIcon.style.marginLeft = "5px";
            starIcon.style.marginTop = "15px";
            starIcon.style.color = "#FFD700";
            prostar.appendChild(starIcon);
        });
        div.appendChild(prostar);
        let pricediv = document.createElement("div");
        pricediv.innerHTML=`$${item.price}`;
        div.appendChild(pricediv);
        createHoverHandler(div, img, icondiv, item); // Ensure createHoverHandler is defined
        cardFeaturedProducts.appendChild(div);
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
