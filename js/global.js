$(function(){
  displayCarousel();  
});

function displayCarousel(){
  $('.thumbs').children().each(function(i) {
    $(this).addClass( 'item'+i );
    $(this).children('a').click(function() {
      $('#carousel').trigger( 'slideTo', [i, 0, true] );
      return false;
    });
  });
  
  $('#carousel').carouFredSel({
    direction: 'up',
    circular: false,
    infinite: false,
    auto    : false,
    items   : 1,
    prev: '#carousel-prev',
    next: '#carousel-next',
    scroll: {
      fx: 'directscroll',
      onBefore: function() {
        var pos = $(this).triggerHandler('currentPosition');
        $('#web-thumbs .work-box').removeClass('selected');
        $('#web-thumbs .work-box.item'+pos).addClass('selected');
      }
    }    
  });
}
