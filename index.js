const franc = require("franc");
const colors = require("colors");
const langs = require("langs");

const input = process.argv[2];
const guess=franc(input);
if (guess === 'und')
{
console.log('SORRY! but this is not a language or might be we are not able to recognise it.'.red);
}
else{
console.log('And your language is'.green,langs.where("3", guess).name.rainbow);
}

