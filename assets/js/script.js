document.addEventListener("DOMContentLoaded", function () {
    const caisse = document.getElementById("caisse");
    let cln;
    let count = 1;


        document.addEventListener("scroll", function () { 
            if ($(window).height() + $(window).scrollTop() >= $(document).height()) {

            let i = 1;
            while (i <= 1) {
                cln = caisse.cloneNode(true);
                document.querySelector("#voiture").appendChild(cln);
                cln.querySelector(".carousel").id = "carousel"+ count;  
                cln.querySelector(".carousel-control-prev").setAttribute("data-bs-target","#carousel"+ count); 
                cln.querySelector(".carousel-control-next").setAttribute("data-bs-target","#carousel"+ count); 
                count++; 
                i++;
                
            }
        };     
    })

    const images = ["./assets/img/background.jpg","./assets/img/unnamed.jpg","./assets/img/812757__1_.jpg"];
   
      var img = document.querySelector('#header');
      var index = 0;
      var iterations = 0;
      
      var updateImage = function() {

        if (index >= images.length) {
          index = 0;
          iterations++;
        }

        img.style.backgroundImage = 'url(' + images[index] + ')';
      
        
        if (iterations >= 2) {
          clearInterval(interval);
        } else {
          index++;
        }
      }
      updateImage();
      var interval = setInterval(updateImage, 15000);
});