//
//$('.thumbnails').click(function(event) {
//  let clicked = $(event.target).attr('src');
//  $('.hero').find('img').attr('src', clicked);
//});
$('#number-chooser').submit(function(event){
  event.preventDefault();
  let input = $('#number-choice').val();
  console.log(input);
  let results = [];
  for (i=1;i<=input;i++){
    if(i%15===0){
      results.push('fizzbuzz');
    } else if (i%5===0) {
      results.push('buzz');
    } else if (i%3===0){
      results.push('fizz');
    } else {
      results.push(i);
    }
  }
  results.forEach(function(result){
     $('.js-results').append(`<div class="fizz-buzz-item"><span>${result}</span></div>`);
  })
})