'use strict';

/*
 * Compare a and b values
 * @param {string} a - The a value
 * @param {string} b - The b value
 */
const comparator = (a, b) => {
  return a.localeCompare(b);
}

/*
 * Sort letters inside word
 * @param {string} inputString - Words that will be sorted
 * @return {string} Sorted words
 */
const sortInsideWords = inputString => {
  return [...inputString]
                  .sort(comparator)
                  .join('');
}

/*
 * Capitalize first letters of input words
 * @param {string} inputString - Words in which first letters will be turned to upper case
 */
const capitalizeFirstLetter = inputString => inputString[0].toUpperCase() 
                                           + inputString.slice(1).toLowerCase();

/*
 * Sorts input string using letter order in each word
 * @param {string} inputString - string that will be sorted
 * @return {string} Full sorted string
 */
const sort = inputString => {

  if (typeof inputString !== 'string') {
    return console.log("Non string input");
  }
    return inputString
                    .split(' ')
                    .map(sortInsideWords)
                    .map(capitalizeFirstLetter)
                    .sort(comparator)
                    .join(' ');
}


//tests
console.log(sort('fedcba fedcba fedcba'));
console.log(sort('тест тест тест'));
console.log(sort('Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmodtempor incididunt ut labore et dolore magna aliqua'));
console.log(sort(1));