function arrangeWithRepetition(n, k) {
    return Math.pow(n, k);
}


function generateArrangementsWithRepetition(n, k, idx, curr, res) {
    if(idx === k) {
        res.push(curr.slice());
        return;
    }
    for(let i = 0; i < n; i++) {
        curr[idx] = i;
        generateArrangementsWithRepetition(n, k, idx+1, curr, res);
    }
}

function arrangeWithRepetition(n, k) {
    let res = []
    generateArrangementsWithRepetition(n, k, 0, new Array(k), res);
    return res;
}

console.log(arrangeWithRepetition(4, 2));
/* Output:
[ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 1, 0 ], [ 1, 1 ], [ 1, 2 ], [ 2, 0 ], [ 2, 1 ], [ 2, 2 ] ]
*/
