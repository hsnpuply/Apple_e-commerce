// Common js
 document.querySelectorAll('.watch-control, .controls a').forEach(control=>{
    control.addEventListener('click',(e)=>{
        e.preventDefault();
    })
 })
// End Of Common js

// Slideshow
const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++) {
        const div = document.createElement('div')

        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')

let a = 1

const slideshow = () => {
    setInterval(() => {
        a++

        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if(a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 20000)
    
}

slideshow()
// End of Slideshow

// Cube
const cube = document.querySelector('.cube')

document.querySelector('.top-x-control').addEventListener('click',()=>{
    cube.style.transform= `rotateX(${x+=20}deg)
     rotateY(${y}deg) rotateZ(${z}deg)`;
})

document.querySelector('.bottom-x-control').addEventListener('click',()=>{
    cube.style.transform= `rotateX(${x-=20}deg)
     rotateY(${y}deg) rotateZ(${z}deg)`;
})

// top and left ↑

// left and right 

document.querySelector('.left-y-control').addEventListener('click',()=>{
    cube.style.transform= `rotateY(${y-=20}deg)
     rotateX(${x}deg) rotateZ(${z}deg)`;
})

document.querySelector('.right-y-control').addEventListener('click',()=>{
    cube.style.transform= `rotateY(${y+=20}deg)
     rotateX(${x}deg) rotateZ(${z}deg)`;
})

// Z 

document.querySelector('.top-z-control').addEventListener('click',()=>{
    cube.style.transform= `rotateY(${y}deg)
     rotateX(${x}deg) rotateZ(${z-=20}deg)`;
})

document.querySelector('.bottom-z-control').addEventListener('click',()=>{
    cube.style.transform= `rotateY(${y}deg)
     rotateX(${x}deg) rotateZ(${z+=20}deg)`;
})


let y=20
let x=0;
let z=0;
let bool=true;
let interval;

const playPause= ()=>{
    if(bool){
        interval = setInterval(()=>{
            cube.style.transform= `rotateY(${y++}deg) rotateX(${x}) rotateZ(${z})`;
            
        },65)
    }else{
        clearInterval(interval);
    }
    }


playPause();

 document.querySelector('.controls').
 addEventListener('mouseover',()=>{
    bool = false;
    playPause();
 });

 document.querySelector('.controls').
 addEventListener('mouseout',()=>{
    bool = true;
    playPause();
 });


// End Cube

// Section 3
const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2){
        section3Content.classList.add('change')
    }
})

// End Section 3


// Section 4
const watchBands = document.querySelector('.watch-bands')
const watchCases = document.querySelector('.watch-cases')

const watchTopControl = document.querySelector('.watch-top-control')
const watchRightControl = document.querySelector('.watch-right-control')
const watchBottomControl = document.querySelector('.watch-bottom-control')
const watchLeftControl = document.querySelector('.watch-left-control')

let axisY = 0
let axisX = 0


watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 60}rem`
    hideControl()
})

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 60}rem`
    hideControl()
})

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 60}rem`
    hideControl()
})

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 60}rem`
    hideControl()
})


const hideControl = () => {
    if(axisY <= -210) {
        watchTopControl.classList.add('hideControl')
    } else {
        watchTopControl.classList.remove('hideControl')
    }

    if(axisY >= 210) {
        watchBottomControl.classList.add('hideControl')
    } else {
        watchBottomControl.classList.remove('hideControl')
    }

    if(axisX >= 210) {
        watchRightControl.classList.add('hideControl')
    } else {
        watchRightControl.classList.remove('hideControl')
    }

    if(axisX <= -210) {
        watchLeftControl.classList.add('hideControl')
    } else {
        watchLeftControl.classList.remove('hideControl')
    }
}
hideControl()
// End of Section 4
