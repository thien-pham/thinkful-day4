$('#number-chooser').submit(function(event){
  event.preventDefault();
  let input = $('#number-choice').val();
    console.log(input);

  for (i=1;i<input;i++){
    if(i%15===0){
      result='fizzbuzz';
    } else if (i%5===0) {
      result='buzz';
    } else if (i%3===0){
      result='fizz';
    } else {
      result =i;
    }
    $(.js-results).append(`<div class="fizz-buzz-item"><span>${result}</span></div>`) 

  }
})