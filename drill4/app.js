//In this challenge, you'll implement a small web app that runs basic text analytics on user submitted text. We provide initial HTML and CSS files, and you'll be responsible for adding CSS classes to the HTML for your JavaScript code to hook into, and for writing JavaScript code that computes and displays 3 metrics:

// take submission as string
// split it at the spaces array.split(' ')
//
//Total word count of the submitted text
//function array.length



//Unique word count of the submitted text
//for loop iteration through the array
//if word is already in the new array, do nothing
//if (words[i] in wordFrequencies)
//wordFrequencies[words[i]]=1; push the actual word into the array as a key
//if we haven't seen the word before, push it to a new array



//Average word length in characters of the submitted text

//The program should print each of these metrics in the appropriate area in the results section.



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