$('.thumbnails').click(function(event) {
 let clicked = $(event.target).attr('src');
 $('.hero').find('img').attr('src', clicked);
});