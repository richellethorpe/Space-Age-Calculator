// rmmmt

export default class Haiku {
constructor(poem){
    this.poem = poem;
    this.lines = 1;
    this.validLines;
    
  }


countLines(poem) {
let stringPoem = poem.split(" ");
stringPoem.forEach(word => {
  if (word === "\n"){
    this.lines +=1;
}
})
}

checkLines(){
  if (this.lines !== 3){
    this.validLines = false;
  }else {
    this.validLines = true;
  }

}
}