import { formatCurrency } from '../scripts/utils/money.js'; 

console.log("Test suite: formatCurrency");

console.log('Converts cents into dollars');
if (formatCurrency(2995) === '29.95' ) {
  console.log('Test passed');
} else {
  console.log('Test failed');
}

console.log('Works with Zero');
if (formatCurrency(0) === '0.00' ) {
  console.log('Test passed');
} else {
  console.log('Test failed');
}

console.log('Rounds up to the nearest cent');
if (formatCurrency(1000.5) === '10.01' ) {
  console.log('Test passed');
} else {
  console.log('Test failed');
}

console.log('Rounds down to the nearest cent');
if (formatCurrency(20000.4) === '200.00' ) {
  console.log('Test passed');
} else {
  console.log('Test failed');
}