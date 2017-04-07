$('#number-chooser').submit(function(event){
  event.preventDefault();
  $('.js-results').empty();
  let input = $('#number-choice').val();
    console.log(input);
    let newClass = '';

  for (i=1;i<=input;i++){
    if(i%15===0){
      result='fizzbuzz';
      newClass='fizzbuzz';
    } else if (i%5===0) {
      result='buzz';
      newClass='buzz';
    } else if (i%3===0){
      result='fizz';
      newClass='fizz';
    } else {
      result =i;
    }
    if (result=='fizz'||result=='buzz'||result=='fizzbuzz'){
      $('.js-results').append(`<div class="fizz-buzz-item ${newClass}"><span>${result}</span></div>`)
    } else {
      $('.js-results').append(`<div class="fizz-buzz-item"><span>${result}</span></div>`) 
    } 
  }
})