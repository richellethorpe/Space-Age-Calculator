

export default class Haiku {
  constructor(line1, line2, line3){
      this.line1 = line1;
      this.line2 = line2;
      this.line3 = line3;
  
  }


syllableCounter(line) {
const splitLine = line.split(" ");
let syllableCount = 0;
splitLine.forEach(function(word) {
 if (word){
  syllableCount ++;
 }
})
 return syllableCount;
}


}
// endingE (poem) {
//   let stringPoem = poem.split(" ");
//   silentEArray = [];
//   stringPoem.forEach(word => {
//     let splitWord = word.split('');
//     if (splitWord[splitWord.length - 1] === "e"){
//       let newWord = splitWord.slice(0,splitWord.length -1);
//       silentEArray.push(newWord);
//     } else {
//       silentEArray.push(splitWord);
//     }
//   })
//   return silentEArray;
// }

// syllableCounter() {
//   let stringPoem = poem.split(" ");
//   const vowels = ["a", "e", "i", "o", "u"]
//   stringPoem.forEach(word => {
//     for (let i= 0; i<word.length; i++)

//   })
// }
// }

//STEPS:count 1 for each word, 2. add one for each vowel, 3. 


