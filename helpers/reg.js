const br = ["A",'B',"C","E","F"];
const order = 'ABCDEF'.split('').join(' ')

const va = order.match(new RegExp(`\\b(${br.join('|')})\\b`, 'gi'));
    