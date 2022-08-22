const butWork = document.querySelector('body:not(header div a)');
const work = document.querySelector('header div a');
const client = document.querySelector('.client');
const workIcon = document.querySelector('header div a i');
const magic = document.querySelector('footer .mail a');
const mail = document.querySelector('footer .mail');
work.addEventListener('mouseenter', () => {
    document.styleSheets[0].insertRule('.all::before{content: ""}');
    document.styleSheets[0].insertRule('.all::before{backdrop-filter: blur(5px);transition:1s}');
    work.style.cssText = `transform:translateX(5px)`;
})

work.addEventListener('mouseout', () => {
    document.styleSheets[0].deleteRule(0);
    window.setTimeout(() => { document.styleSheets[0].deleteRule(0); }, 1000);
    document.styleSheets[0].insertRule(`header div a i{transition:0.7s}`, 1);
    // workIcon.style.cssText = `transition:0.7s);`;
    work.style.cssText = `transform:translateX(-5px);`;
})

// let elem = magic.getBoundingClientRect();
// let bodyRect = document.body.getBoundingClientRect();
// let width = magic.offsetWidth;
// let height = magic.offsetHeight;
// magic.onmousemove = function (e) {
//     if (isTimeToUpdate) {

//         magic.style.cssText = `transform: rotateY(${(e.clientX - elem.left - (width / 2)) / 12}deg) rotateX(${-(e.pageY - magic.offsetTop - (height / 2)) / 10}deg) rotateZ(0deg) scale(1);`;
//     }

// }
magic.onmouseover = function (e) {
    document.styleSheets[0].insertRule('.all::before{content: ""}', 0);
    document.styleSheets[0].insertRule('.all::before{backdrop-filter: blur(5px);}');
    magic.style.cssText = 'transform:scale(1.1)';
}
magic.onmouseout = function () {
    document.styleSheets[0].deleteRule(0);
    window.setTimeout(() => { document.styleSheets[0].deleteRule(0); }, 1000);
    magic.style.cssText = `transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1);`;
}
// var counter = 0;
// var updateRate = 5;
// var isTimeToUpdate = function () {
//     return counter++ % updateRate === 0;
// };
// //////////////////////////////// test //////////////////////////////////////////

// ////////////////////// Intersection Animation /////////////////////////////
const fadeUp = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -50px 0px'
};
const fadeRight = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px 0px -30px'
};
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entery) => {
        if (entery.isIntersecting) {
            entery.target.classList.add('viewed');
        } else { entery.target.classList.remove('viewed'); }
    })
}, fadeUp)

const observerTwo = new IntersectionObserver((enteries) => {
    enteries.forEach((entery) => {
        if (entery.isIntersecting) {
            entery.target.classList.add('viewed');
        } else { entery.target.classList.remove('viewed'); }
    })
}, fadeRight)
const stuffy = document.querySelectorAll('.fade-up');
const lists = document.querySelectorAll('.client ul li');
window.addEventListener('DOMContentLoaded', () => {
    stuffy.forEach((el) => {
        observer.observe(el);
    });
    lists.forEach((list) => {
        observerTwo.observe(list);
    });
});
// //////////////////////// set time interval /////////////////////////////
const images = document.querySelectorAll('.images .image');
const sp = document.querySelector('.images .sp');
const imagesDad = document.querySelector('.images');
let i = 0;
window.setInterval(() => {
    // imagesDad.style.cssText = `height:${sp.clientHeight};`;
    if (i < images.length) {
        images.forEach((img) => {
            img.classList.remove('active');
        });
        images[i].classList.add('active');
        i++;
    } else { i = 0 };
}, 300)

images.forEach((img) => {
    img.onmouseover = function (e) {
        // e.target.parentElement.style.cssText = 'width:90%';
    }
});
