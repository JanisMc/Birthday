const main = document.getElementById("main");
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const fourth = document.getElementById("fourth")
const fifth = document.getElementById("fifth")
const sixth = document.getElementById("sixth")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const e = document.getElementById("e")

main.style.display = "none"
sixth.style.display = "none"
a.style.display = "none"
b.style.display = "none"
c.style.display = "none"
d.style.display = "none"
e.style.display = "none"

first.addEventListener("click", () => {
    main.style.display = "inline-flex"
    a.style.display = "inline-flex";
})

second.addEventListener("click", () => {
    b.style.display = "inline-flex";
})

third.addEventListener("click", () => {
    c.style.display = "inline-flex";
})

fourth.addEventListener("click", () => {
    d.style.display = "inline-flex";
})

fifth.addEventListener("click", () => {
    e.style.display = "inline-flex";
    sixth.style.display = "inline-flex"
})

sixth.addEventListener("click", () => {
    main.style.display = "none"
})
