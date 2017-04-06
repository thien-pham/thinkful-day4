$('.thumbnails').click(function(event) {
  console.log(event.target);
  //$('.hero').find('img').remove();
  //event.stopPropagation();
  let clicked = $(this).find('img').attr('src');
  $('.hero').find('img').attr(clicked);
});

//use src retrieve attr from thumbnail and 
//change attr for hero