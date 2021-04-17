document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});


$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Maldives": null,
        "Indonesia": null,
        "Bali": null,
        "Carribean": null,
        "California": null,
        "Australia": null,
        "Sydney": null,
      },
    });
  });
        

  var slideIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 1000); // Change image every 2 seconds
  }

