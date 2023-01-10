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
console.log(parser.lineCount)