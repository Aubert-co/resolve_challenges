function permute(arr) {
    let result = [];
  
    function permuteRecursive(arr, current) {
      if (arr.length === 0) {
        result.push(current);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let newArr = arr.slice();
          let newCurrent = current.slice();
          newCurrent.push(newArr.splice(i, 1)[0]);
          permuteRecursive(newArr, newCurrent);
        }
      }
    }
  
    permuteRecursive(arr, []);
  
    return result;
  }
  

  class DocumentParser {
    constructor() {
      this.wordCount = 0;
      this.charCount = 0;
      this.lineCount = 0;
    }
  
    parse(text) {
      // Quebrar o texto em linhas usando o método split
      let lines = text.split('\n');
  
      // Atualizar o contador de linhas
      this.lineCount = lines.length;
  
      // Percorrer cada linha do texto
      for (let line of lines) {
        // Remover espaços em branco no início e no final da linha
        line = line.trim();
  
        // Atualizar o contador de caracteres
        this.charCount += line.length;
  
        // Quebrar a linha em palavras usando o método split
        let words = line.split(' ');
  
        // Atualizar o contador de palavras
        this.wordCount += words.length;
      }
    }
  }
  
  let parser = new DocumentParser();
  parser.parse("You can try, but you'll never catch me.\nBazinga!")
/**
 * 
 * function permute(elements, numPlaces) {
  // Caso base: se numPlaces for 1, retornamos os elementos
  if (numPlaces === 1) return elements;

  // Inicializamos um array de permutações vazio
  let permutations = [];

  // Iteramos sobre cada elemento do array de elementos
  for (let i = 0; i < elements.length; i++) {
    // Pegamos o elemento atual
    let currentElement = elements[i];

    // Criamos um novo array de elementos com todos os elementos, exceto o atual
    let remainingElements = elements.slice(0, i).concat(elements.slice(i + 1));

    // Geramos as permutações com o elemento atual e os demais elementos
    let subPermutations = permute(remainingElements, numPlaces - 1);

    // Adicionamos cada permutação à lista de permutações, desde que não tenha elementos repetidos
    for (let j = 0; j < subPermutations.length; j++) {
      let permutation = [currentElement].concat(subPermutations[j]);
      if (!hasDuplicates(permutation)) permutations.push(permutation);
    }
  }

  // Retornamos as permutações
  return permutations;
}
function hasDuplicates(array) {
  // Criamos um conjunto a partir do array
  let set = new Set(array);

  // Se o tamanho do conjunto for menor que o do array, então há elementos repetidos no array
  return set.size < array.length;
}

 */