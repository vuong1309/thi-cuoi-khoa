let a = parseFloat(prompt(`Nhập vào số a: `));
let b = parseFloat(prompt(`Nhập vào số b: `));
let j = null;
let k = null;
let l = null;
let m = null;
let sumBetweena = 0;
let sumBetweenb = 0;
if (a >= b) {
    console.log(`Nhập lại giá trị`);
} else {
    for (let j = 2; j <= a; j++) {
        let prime = j;
        for (let k = 2; k <= Math.sqrt(j); k++) {
            if (j % k === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            sumBetweena += j;
        }
    }
    for (let l = 2; l <= b; l++) {
        let prime = l;
        for (let m = 2; m <= Math.sqrt(l); m++) {
            if (l % m === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            sumBetweenb += l;
        }
    }
    document.write(`Kết quả: ${sumBetweenb - sumBetweena}`);
}
