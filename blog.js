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

ourblogproduct();