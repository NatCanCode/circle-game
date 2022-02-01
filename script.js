// Cursor coloured animation
const cursor = document.querySelector('.cursor')
let timeout 

// follow cursor on mousemove
document.addEventListener('mousemove', (e) => {
    // let x = e.pageX
    // let y = e.pageY
    // if issues when hovering over links or scrolling, replace with:
    let x = e.clientX
    let y = e.clientY
    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
    cursor.style.display = 'block'

    // cursor effects on mouse stopped
    function mouseStopped(){
        cursor.style.display = 'none'
    }
    clearTimeout(timeout)
    timeout = setTimeout(mouseStopped, 1000)
})

// cursor effects on mouseout
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none'  
})


// Circle counter //
// Au clic (event) sur le cercle (element), //
// le compteur (element) augmente de 1 (action) //

// Je sélectionne et je stocke //
const circlePink = document.getElementById('circle-pink');
// console.log(circlePink, 'pink circle')
const circleCream = document.getElementById('circle-cream');
// console.log(circleCream, 'cream circle')
const circlePinkish = document.getElementById('circle-pinkish');
// console.log(circlePinkish, 'pinkish circle')

// Je fais partir le compter de 0 //
let clickCount = 0;
// console.log(clickCount, 'Counter starts')

// Je soumets le pink circle à une action //
circlePink.addEventListener('click', function(){
    // clickCount = clickCount + 1
    // console.log(clickCount, 'counter clicked')
    // J'appelle la function add //
    add()
})
// Je soumets le cream circle à une action //
circleCream.addEventListener('click', function(){
    add()
})

// Je soumets le pinkish circle à une action //
circlePinkish.addEventListener('click', function(){
    add()
})

// Je déclare une function pour ne pas me répéter DRY //
function add(){
    clickCount = clickCount + 1
    console.log(clickCount, 'counter clicked')
    // J'affiche le compteur //
    result.innerText = clickCount
}

setTimeout(function(){
    console.log('Counter ends')
    circlePink.remove()
    circleCream.remove()
    circlePinkish.remove()
}, 10000) // 10s //

// J'affice le compteur sur la page //
let result = document.getElementById('number');


// Cookies //
// Je sélectionne et je stocke
const btnAcceptDeny = document.querySelector('.cookies-btn')
console.log(btnAcceptDeny)
// div Cookies
const cookies = document.querySelector('.cookies')
console.log(cookies)

btnAcceptDeny.addEventListener('click', function(){
    console.log('button ckicked')
    // Je fais disparaître la bannière cookies au click avec opacity + transition
    cookies.style.opacity = "0"
})