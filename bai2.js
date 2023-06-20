let value = parseFloat(prompt(`Nhấp vào 1 số bất kỳ trong khoảng từ 1 đến 10:`));
let triangle = "";

//in ra HTML
function numberOneTriangle(i) {
    for (let j = 1; j <= i; j++) {
        for (let k = 1; k <= j; k++) {
            triangle += "*";
        }
        triangle += "<br />";
    }
    return triangle;
}
document.write(numberOneTriangle(value));

//in ra console log
// let triangle = "";
// function numberOneTriangle(i) {
//     for (let j = 1; j <= i; j++) {
//         for (let k = 1; k <= j; k++) {
//             triangle += "*";
//         }
//         triangle += "<br />";
//     }
//     return triangle;
// }
// console.log(numberOneTriangle(value));