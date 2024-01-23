const gameName = new String('Fahadd-hdfc-com')

console.log(gameName.charAt('4'));

console.log(gameName.indexOf('d'));


 // THESE TWO METHODS ARE USED TO TRIM THE GIVEN STRING

const newString = gameName.substring(0,4); // TRIMS FROM N TO N-1 AND IGNORE THE -VE VALUES
console.log(newString);

const newString1 = gameName.slice(-8,4); // TRIMS FROM N TO N-1 AND CAN TRIM REVERSELY BY GIVING -VE VALUES
console.log(newString1);


const newString2 = "    fahad     " // TRIM() METHOD REMOVES THE UNWANTED SPECES IN THE STRING
console.log(newString2.trim());

const url = "https://fahad.com/fahad%20khan"

console.log(url.replace('%20', '-'));

console.log(url.includes('khan'))

console.log(gameName.split('-'))