const startTime = new Date().getTime();

const start = 1;
const end = 12;

let tableString = '';

for (let tableDigit = start; tableDigit <= end; tableDigit++) {
  const lastValue = (tableDigit * 12);

  for (var nthValue = tableDigit; nthValue <= lastValue; nthValue = nthValue + tableDigit)
  {
    tableString = tableString + ' ' +  nthValue;
  }

  tableString = tableString + '\n'
}

console.log(tableString);

var totalTImeTaken = (new Date().getTime()) - startTime;
console.log('Time Taken: ' + totalTImeTaken + 'ms');