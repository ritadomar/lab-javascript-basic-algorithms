// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = 'Carolina';
// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = 'Rita';
// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driverToUppercase = hacker1[0].toUpperCase();
for (let i = 1; i < hacker1.length; i++) {
  driverToUppercase += ' ' + hacker1[i].toUpperCase();
}

console.log(driverToUppercase);

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigatorReversed = '';
for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorReversed += hacker2[j];
}

console.log(navigatorReversed);

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
}

// BONUS

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet ornare ex in dapibus. Nunc efficitur egestas mauris. Vivamus et fermentum ligula. Vivamus condimentum sagittis ex at sollicitudin. Pellentesque hendrerit sed nisl eget auctor. Aliquam lobortis euismod dolor, ut viverra turpis sagittis ac. Sed in justo libero.

Sed mollis lacus magna, eget cursus nisl sagittis vitae. Aliquam euismod rutrum nisi, quis tincidunt eros lobortis in. Praesent tincidunt elit ac metus rhoncus laoreet. Nullam vel orci massa. Maecenas ultricies bibendum velit ut rutrum. Morbi in augue in tellus lobortis mollis vel et urna. Ut euismod nibh sed odio commodo blandit. Suspendisse laoreet molestie ipsum sit amet sagittis. Proin hendrerit, odio sed feugiat finibus, libero nisl sollicitudin magna, ac hendrerit ante augue venenatis turpis. Nunc nisi sapien, luctus sed tortor nec, mattis tempus nibh.

Donec neque elit, bibendum nec suscipit eget, consequat fringilla felis. Phasellus hendrerit leo eleifend blandit ultrices. Integer dictum, ex nec elementum faucibus, eros odio condimentum eros, ac consequat mauris nisl suscipit velit. Morbi ut ultrices ante, eget dapibus mauris. Nulla ante eros, iaculis in massa ut, varius cursus ex. Fusce convallis sem magna. Cras sagittis velit ipsum, a ornare sapien suscipit non. In sagittis eget justo vel vehicula.`;

// Test loop to confirm that line breaks don't count as spaces. Test string has 3 " " & 2 line breaks
/* let spaceCount = 0;
const testString = `Space 
Space 
Space `;

for (let i = 0; i < testString.length; i++) {
  if (testString[i] === ' ') {
    spaceCount++;
  }
}
console.log('Printing spaceCount:', spaceCount); // 3 */

// Every word except for the first one is preceded by a space " ". Start counter at 1 and add the number of spaces.
let wordCount = 1;

for (let k = 0; k < longText.length; k++) {
  if (longText[k] === ' ') {
    wordCount++;
  }
}

console.log(`The string longText has ${wordCount} words`);

// Bonus 2
const phraseToCheck = 'A man, a plan, a canal, Panama!';

// removing extra characters from the string -> "!" "?" "," """" " "
let cleanStr = '';
for (let l = 0; l < phraseToCheck.length; l++) {
  switch (phraseToCheck[l]) {
    case '!':
    case '?':
    case ',':
    case '"':
    case "'":
    case ' ':
      continue;
    default:
      cleanStr += phraseToCheck[l].toLowerCase();
  }
}

// reversing the string
let reversedStr = '';
for (let m = cleanStr.length - 1; m >= 0; m--) {
  reversedStr += cleanStr[m];
}

// checking if the strings are equal
if (reversedStr === cleanStr) {
  console.log(`The string submitted is a palindrome`);
} else {
  console.log(`The string submitted is not a palindrome`);
}
