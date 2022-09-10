import { onlyText } from "./utils.js";
// @ts-check
class Palabras {
  palabras = [];

  constructor(palabras) {
    if (!palabras) throw Error("Necesitamos el array de palabras!");
    this.palabras = palabras.map(w=> onlyText(w))
  }

  getWords() {
    return this.palabras;
  }

  addWord(word) {
    const wordFiltered = onlyText(word)
    this.palabras.push(wordFiltered);
  }

  print() {
    console.log(this.palabras);
  }
}

export default Palabras;
