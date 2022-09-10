import { filtrarNumeros } from "./utils.js";
// @ts-check
class Palabras {
  palabras = [];

  constructor(palabras) {
    if (!palabras) throw Error("Necesitamos el array de palabras!");
    const newPalabras = palabras.map((w) => filtrarNumeros(w)); // filtrado de numeros
    this.palabras = newPalabras.map((w) => w.toUpperCase()); // pasar a mayusculas
  }

  getWords() {
    return this.palabras;
  }

  addWord(word) {
    const newWord = filtrarNumeros(word)
    this.palabras.push(newWord.toUpperCase());
  }

  print() {
    console.log(this.palabras);
  }
}

export default Palabras;
