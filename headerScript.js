let previousScrollPos = 0;
let nav = document.querySelector('fullNav')
let allowNavDisappear = true;
let allowNavAppear = true;
document.addEventListener('scroll', doScrollFunc)

function doScrollFunc() {


    if ((pageYOffset > previousScrollPos) && allowNavDisappear === true) {
        allowNavAppear = true
        nav.style.position = 'absolute'
        nav.style.top = 0;
        console.log("nav Disappear")
    }

    if ((pageYOffset < previousScrollPos) && allowNavAppear === true) {
        let subtractant = 200;
        allowNavDisappear = false
        allowNavAppear = false




        appearNav()

        function appearNav(topx = -1600) {


            nav.style.top = topx + 'px';

            console.log(nav.style.top)
            topx += subtractant

            if (topx == -100) {
                subtractant /= 2

            }

            if (topx > 0) {
                nav.style.position = 'fixed';

                setTimeout(function () {
                    allowNavDisappear = true;
                }, 1000)
                return;

            }
            requestAnimationFrame(function () {
                appearNav(topx)

            })
        }



    }

    previousScrollPos = pageYOffset

}