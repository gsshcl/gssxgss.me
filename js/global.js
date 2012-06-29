$(function(){
  displayCarousel();  
});

function displayCarousel(){
  $('#carousel').carouFredSel({
    auto    : false,
    prev    : {
      button  : "#carousel-prev",
      key     : "left"
    },
    next    : {
      button  : "#carousel-next",
      key     : "right"
    }
  });
}
