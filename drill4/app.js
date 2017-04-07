function averageLength(input1){
  let results1 = [];
  let inputs = input1.split(' ');
  let j = 0;
  let x = inputs.length;
  for (let i = 0; i < x; i++){
    j += inputs[i].length;
  }
  return j / x;
  
}
function uniqueCount(input2){
  let results2 = {};
  let inputArr = input2.split(' ');
  for (let i=0 ; i < inputArr.length ; i++){
    if (inputArr[i] in results2){
      results2[inputArr[i]]++;
    } else {
      results2[inputArr[i]] = 1;
    }
  }
  return Object.keys(results2).length;
}
function wordCount(input3){
  let inputArr = [];
  inputArr = input3.split(' ');
  return inputArr.length;
}
$('#overallForm').submit(function(event){
  event.preventDefault();
  let list = $('#user-text').val();
  let average = averageLength(list);
  let unique = uniqueCount(list);
  let count = wordCount(list);
  $('.wordCount').html(`\n \t ${count}`);
  $('.uWordCount').html(`\n \t ${unique}`);
  $('.averageLength').html(`\n \t ${average} characters`);
  $('dl').removeClass('hidden');
  
})