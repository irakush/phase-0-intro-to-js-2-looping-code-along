// Code your solutions in this file
let newArray = [];

function writeCards(array, text){
  for (let index = 0; index < array.length; index++) {
    // const element = array[index];
    newArray[index] = `Thank you, ${array[index]}, for the wonderful ${text} gift!`;
  };
  return newArray;
};

function countDown(num){
  let count = 0;
  while (count <= num) {
    console.log(count++);
  };
};