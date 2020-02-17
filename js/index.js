// Your code goes here

// Mouseover event
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseenter', () => {
    logo.style.transform = "scale(1.2)";
    logo.style.transition = "all 0.3s";
})
logo.addEventListener('mouseleave', () => {
    logo.style.transform = "scale(1.0)";
    logo.style.transition = "all 0.3s";
})
// keydown event
const anchor = document.querySelectorAll('a');
anchor.forEach(item => {
    item.addEventListener('keydown', () => {
        anchor.style.color = "blue"
        console.log("is this working?");
    });
})


// wheel event
const intro = document.querySelector(".intro");
intro.addEventListener("wheel", () => {
    if (intro.style.background === "red") {
        intro.style.background = "white";
    } else {
        intro.style.background = "red";
    }
})

// drag/drop
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener("drag", () => {
        btn.textcontent = "dragging";
    })
    item.addEventListener('drop', () => {
        btn.textcontent = "Sign Me Up!";
    })
})



// load
window.addEventListener('load', () => {
    console.log('page is loaded');
})

// focus
const destination = document.querySelectorAll(".destination");
destination.forEach(item => {
    item.addEventListener('focus', () =>{
        item.target.style.color = "pink";
    })
})

// resize
window.addEventListener('resize', ()=>{
    console.log("Looking better now?")
})
// scroll
let last_known_scroll_position = 0;
window.addEventListener('scroll', (e)=>{
    last_known_scroll_position = window.scrollY;
    
})

// select
const content = document.querySelector('.content-section')
content.addEventListener('select', ()=>{
    console.log("Having fun over there?");
})

// dblclick
const footer = document.querySelector(".footer");
footer.addEventListener('dblclick', () => {
    if(footer.style.background === "red"){
       footer.style.background= "#FFEBCD";
    }else{
        footer.style.background = "red";
    }
})