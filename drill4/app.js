//In this challenge, you'll implement a small web app that runs basic text analytics on user submitted text. We provide initial HTML and CSS files, and you'll be responsible for adding CSS classes to the HTML for your JavaScript code to hook into, and for writing JavaScript code that computes and displays 3 metrics:
//

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

function uniqueCount(input){
  let results = [];
  let inputArr= input.split(' ');
  for (let i=0;i<=inputArr.length;i++){
    if (!(inputArr[i] in results)){
      results.push(inputArr[i]);
    } else {
      continue;
    }
  }
  return results.length;
}



function wordCount(input){
  let inputArr = [];
  inputArr = input.split(' ');
  return inputArr.length;
}
let testSubmit = 'blue dog blue dog blue dog blue dog red';
let test1 = uniqueCount(testSubmit);
console.log(test1);