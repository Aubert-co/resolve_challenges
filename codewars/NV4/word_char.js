/*class DocumentParser {
    constructor() {
      this.wordCount = 0;
      this.charCount = 0;
      this.lineCount = 0;
    }
    parse(text) {
     
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
*/
  function DocumentParser(reader)
{
  this.reader = reader;
  this.reset();
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;

  this.parser()
}
DocumentParser.prototype.parser = function(){

let ln = this.reader.split('\n')
this.lineCount = ln.length

for(let lines of ln){
    lines = lines.trim()
    this.charCount += lines.length
    let w = lines.split(' ')

    this.wordCount += w.length
}
}
DocumentParser.prototype.reset = function()
{
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

const parser =  new DocumentParser("Hello World")
parser.parser("Hello World")

console.log(parser.charCount)