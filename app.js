//$('.thumbnails').click(function(event) {
//  console.log(event.target);
//  //$('.hero').find('img').remove();
//  //event.stopPropagation();
//  let clicked = $(this).find('img').clone();
//  $('.hero').find('img').replaceWith(clicked);
//});
//
////use src retrieve attr from thumbnail and 
////change attr for hero

$('.thumbnails').click(function(event) {
  let clicked = $(event.target).attr('src');
  $('.hero').find('img').attr('src', clicked);
});
