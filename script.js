const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

console.log(bar)


// Open
bar.addEventListener('click', () => {
        nav.classList.add('active')
})

// Close 
close.addEventListener("click", () => {
        nav.classList.remove('active')
})