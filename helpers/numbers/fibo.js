function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      let c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  fibonacci(1000) // imprime os 10 primeiros números da sequencia de fibonacci
  