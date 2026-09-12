const fs = require('fs');

const teContent = fs.readFileSync('d:/SKDC 2/delish-visuals-web/src/i18n/te.ts', 'utf8');

// Find all strings in the values of the te object
const englishCharsRegex = /[a-zA-Z]+/g;
let match;
const words = new Set();
while ((match = englishCharsRegex.exec(teContent)) !== null) {
    words.add(match[0]);
}

console.log("English words/characters found in te.ts:");
console.log(Array.from(words).filter(w => !['export', 'const', 'te', 'Record', 'string', 'unknown'].includes(w) && !teContent.includes(` ${w}: `) && !teContent.includes(`${w}: {`)).join(', '));
