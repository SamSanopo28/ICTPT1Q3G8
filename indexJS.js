let sectionAbout = document.querySelector('h2')
let diamond = document.getElementById('iconDiamond');
let home = document.getElementById('home')
let homeText = document.querySelector('#home h2')
let otherHomeText = document.querySelector('#home h2 unrelated')
document.addEventListener('scroll', sayScrollPosition)

if (pageYOffset >= 220) {

    home.style.boxShadow = `0 0 ${(220) * 10}px rgba(0, 0, 0, 1) inset`
    home.style.filter = `brightness(${100 - 220 / 2}%)`
    homeText.style.fontSize = `${6 + (220 / 5)}vw`
    diamond.style.top = 70 + 220 / 5 + 'vh'
    diamond.style.opacity = 1 - 220 / 100

}
else {
    diamond.style.opacity = 1
}
function sayScrollPosition() {


    if (pageYOffset < 220) {
        home.style.boxShadow = `0 0 ${(pageYOffset) * 10}px rgba(0, 0, 0, 1) inset`
        home.style.filter = `brightness(${100 - pageYOffset / 2}%)`
        homeText.style.fontSize = `${6 + (pageYOffset / 5)}vw`
        diamond.style.top = 70 + pageYOffset / 5 + 'vh'
        diamond.style.opacity = 1 - pageYOffset / 100

    }
    else {
        home.style.boxShadow = `0 0 ${(220) * 10}px rgba(0, 0, 0, 1) inset`
        home.style.filter = `brightness(${100 - 220 / 2}%)`
        homeText.style.fontSize = `${6 + (220 / 5)}vw`
        diamond.style.top = 70 + 220 / 5 + 'vh'
        diamond.style.opacity = 1 - 220 / 100
    }


}




const scrollers = document.querySelector(".scrollingImages");
const scrollersX = document.querySelector(".scrollingImagesX");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    {
       addAnimation()
       addAnimationX()
}

function addAnimation() {
    
        scrollers.setAttribute('data-animated', true)

        const scrollerInner = document.querySelector('#animateUL')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    
}

function addAnimationX() {
    
        scrollersX.setAttribute('data-animated', true)

        const scrollerInner = document.querySelector('#animateUL2')
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    
}