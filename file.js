const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);
const optimizeNumber = (n) => (n + "").length >= 2 ? n : "0" + n;

const data = [];
const colors = ["#FE8072aa", "#7267E6aa", "#A3D8CFaa", "#F0B2ABaa", "#73615Eaa", "#73E667aa", "#02A298aa", "#FFE643aa", "#F0B2ABaa"];
let n = getNumber(41, 1);

while(n--) {
   data.push(getNumber(100))
}



console.log(data);

const box = document.querySelector(".box");

for (let val of data) {
    box.innerHTML += `<div 
        class="card" 
        style="background-color: ${colors[getNumber(colors.length - 1)]}"
    >${optimizeNumber(val)}</div>`;
}