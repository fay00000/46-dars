let h2 = document.querySelector("h2");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");

let count = h2.innerHTML;

plus.addEventListener("click", () =>{
    count++;
    h2.innerHTML = count;
})

minus.addEventListener("click", () =>{
if (count == 0) {
    h2.innerHTML = 0;
} else {
    count--;
    h2.innerHTML = count;
}
})