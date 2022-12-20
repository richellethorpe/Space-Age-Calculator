

export default class Haiku {
constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;

}
//need to run this first to lop off any e's at the end of a word
sliceE (line) {
  let stringPoem = line.split(" ");
  let silentEArray = [];
  stringPoem.forEach(word => {
    let splitWord = word.split('');
    if (splitWord[splitWord.length - 1] === "e"){
      let newWord = splitWord.slice(0,splitWord.length -1);
      silentEArray.push(newWord.join("").toString());
    } else {
      silentEArray.push(splitWord.join("").toString());
    }
  })
  
  let stringSilentEArray = silentEArray.join(" ").toString();
  return stringSilentEArray;
}

syllableCounter(noEline) {
  const splitLine = noEline.split(" ");
  let syllableCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  splitLine.forEach(word => {
    let splitword =word.split("");
    if (word.length < 4){
      syllableCount ++;
    }else{
    splitword.forEach(element => {
          vowels.forEach(vowel => {
            if (element === vowel) {
              syllableCount ++;
            } 
          })
  })
}
  })
  return syllableCount;
  }
}
