$(function(){
  displayCarousel();  
});

function displayCarousel(){
	
  $('.thumbs').children().each(function(i) {
    $(this).addClass( 'item'+i );
		$(this).children('a').click(function() {
      if($('.showcase-wrapper').css('display') === 'none'){
				$('#portfolio header').slideUp();
				$('.showcase-wrapper').slideDown();
			}
			$('#carousel').trigger( 'slideTo', [i, 0, true] );
      return false;
    });
  });
  
  $('#carousel').carouFredSel({
    width: 960,
		height: 320,
		direction: 'left',
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
