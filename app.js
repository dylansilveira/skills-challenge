let map = new Map();

function viraVira(arr, seq) {
    let b = arr.filter(x => x == 0).length;
    let c = arr.filter(x => x == 1).length;
    if (map.get(`${b}b${c}c`)) return [];
    if (arr.every(x => x == -1)) return seq;
    if (!arr.includes(0)) return [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            seq.push(i+1);
            arr = turn([...arr], i);
            let res = viraVira(arr, seq);
            if (res.length) return res;
            seq.pop();
            b = arr.filter(x => x == 0).length;
            c = arr.filter(x => x == 1).length;
            map.set(`${b}b${c}c`, true)
        }
    }

    return [];
}

function turn(arr, pos) {
    var leftNeighbourIndex = -1;
    var rightNeighbourIndex = -1;
    arr[pos] = -1;

    if (pos == 0) {
        leftNeighbourIndex = arr.length - 1;
        rightNeighbourIndex = pos + 1;
    } else if (pos == arr.length - 1) {
        leftNeighbourIndex = pos - 1;
        rightNeighbourIndex = 0;
    } else {
        leftNeighbourIndex = pos - 1;
        rightNeighbourIndex = pos + 1;
    }

    if (arr[leftNeighbourIndex] != -1) arr[leftNeighbourIndex] = arr[leftNeighbourIndex] == 0 ? 1 : 0;
    if (arr[rightNeighbourIndex] != -1) arr[rightNeighbourIndex] = arr[rightNeighbourIndex] == 0 ? 1 : 0;

    return arr;
}

// var test = viraVira([0, 1, 1, 1, 0, 1], []);
// var test2 = viraVira([0, 1, 1, 0], []);
// //var test3 = viraVira([1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0], []);
// // var input = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
// //              1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
// //              1,1,1,1];
// var input = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,//0,0,0,0,0,0,
//              //0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
//              //0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
//              //0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
//              //0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
//              0,1,0,0];
// //input = [1,1,1,1,1,1,1,1,1,0];
// var test3 = viraVira(input, []);
// console.log('test', test);
// console.log('test2', test2);
// console.log('test3', test3);

function calcula(arr) {
    map = new Map();
    if (arr.length > 15) return;

    if (arr.length > 2)
        res.push({n: arr.length, brancas: arr.filter(x => x == 0).length, cinzas: arr.filter(x => x == 1).length, isPossible: !!viraVira(arr, []).length, initialState: arr.map(x => x == 1 ? 'C' : 'B')});

    calcula([...arr, 0]);
    calcula([...arr, 1]);

    return;
}

let res = [];
calcula([]);
res.sort((a, b) => a.n - b.n).map(x => console.log(`n = ${x.n}`, `\t\tbrancas = ${x.brancas}`, `\tcinzas = ${x.cinzas}`, x.isPossible ? '\t\x1b[92mPOSSÍVEL\x1b[0m' : '\t\x1b[91mIMPOSSÍVEL\x1b[0m', `\t\t${x.initialState}`));
//console.log(JSON.stringify({testedCases: res.length, possibleCases: res.filter(x => x.isPossible).length, impossibleCases: res.filter(x => !x.isPossible).length, cases: res.sort((a, b) => a.n - b.n)}, undefined, 2).replaceAll('",\n', '",').replaceAll('[\n        ', '[ ').replaceAll('\n      ]', ' ]').replaceAll('",        "', '", "'));

console.log(res.filter(x => x.isPossible).length);
console.log(res.filter(x => x.brancas % 2 == 0 && x.isPossible).length);
