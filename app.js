setTimeout(start, 2000);

function start() {
    let description = 'My name is Subash Basnet';
    let landing = document.querySelector(".landing");
    let content = document.querySelector(".content");
    myDescription = document.getElementById('description');
    descriptionLength = description.length;

    startBtn = document.querySelector(".start-button");

    myInterval = setInterval(display, 100)
    setTimeout(() => clearInterval(myInterval), (descriptionLength * 100))

    setTimeout(() => {
        myNewInterval = setInterval(deletes, 100);

        setTimeout(() => clearInterval(myNewInterval), 600)

        setTimeout(() => {
            description = 'My name is Subash Shrestha';
            myVeryNewIntercal = setInterval(add, 100);

            setTimeout(() => {
                clearInterval(myVeryNewIntercal)

            }, 800)
            setTimeout(() => {
                startBtn.style.opacity = 1;

            }, 900)


        }, 800)
    }, ((descriptionLength + 4) * 100))

    index = 0
    function display() {
        index = index + 1;
        let mystring = description.substr(0, index);
        myDescription.innerHTML = mystring;
    }

    function deletes() {
        index = index - 1;
        let mystring = description.substr(0, index)
        myDescription.innerHTML = mystring;
    }

    function add() {
        index = index + 1;
        let mystring = description.substr(0, index)
        myDescription.innerHTML = mystring;
    }

    document.getElementById('start-btn').addEventListener("click", function () {
        console.log("click");
        content.style.opacity = 1;
        content.style.display = 'block';
        landing.style.top = "-100vh";

    })



}

// window.addEventListener("scroll",function(e){
//     content=document.querySelector(".content");
//     topimage=document.querySelector(".top-image");
//     about=document.querySelector(".about");
//     interest=document.querySelector(".interest");


//     this.console.log(content.scrollHeight,topimage.scrollHeight+about.scrollHeight +interest.scrollHeight);
// })

$(document).ready(function () {
    let previousScroll = 0;

    $("#nav-home").css({ "color": "white" });
    $("#nav-home").css({ "color": "rgba(255, 255, 255, 0.575)" })
    $("#nav-interest").css({ "color": "white" })

    $("#icon-about").css({ "color": "white" });
    $("#icon-home").css({ "color": "rgba(255, 255, 255, 0.575)" })
    $("#icon-interest").css({ "color": "white" })

    $(window).scroll(function () {
        let windowsscroll = $(window).scrollTop();
        let topimage = $(".top-image").offset().top;
        let about = $(".about").offset().top;
        let interest = $(".interest").offset().top;
        st = $(this).scrollTop();
        if (previousScroll < st) {
            console.log("Down Scroll")

            if (about - windowsscroll <= 20) {
                $("#nav-home").css({ "visibility": "hidden", "color": "white" });
                $("#nav-about").css({ "visibility": "visible", "color": "rgba(255, 255, 255, 0.575)" })
                $("#nav-interest").css({ "visibility": "hidden", "color": "white" })

                $("#icon-home").css({ "color": "white" });
                $("#icon-about").css({ "color": "rgba(255, 255, 255, 0.575)" })
                $("#icon-interest").css({ "color": "white" })

            }

            if (Math.floor($(".content").height()) == Math.floor(windowsscroll + $(window).height())) {
                $("#nav-home").css({ "visibility": "hidden", "color": "white" });
                $("#nav-about").css({ "visibility": "hidden", "color": "white" })
                $("#nav-interest").css({ "visibility": "visible", "color": "rgba(255, 255, 255, 0.575)" })

                $("#icon-home").css({ "color": "white" });
                $("#icon-about").css({ "color": "white" })
                $("#icon-interest").css({ "color": "rgba(255, 255, 255, 0.575)" })
            }
        } else {
            console.log("Top Scroll")

            if (about - windowsscroll >= about) {
                $("#nav-home").css({ "visibility": "visible", "color": "rgba(255, 255, 255, 0.575)" })
                $("#nav-about").css({ "visibility": "hidden", "color": "white" })
                $("#nav-interest").css({ "visibility": "hidden", "color": "white" })

                $("#icon-home").css({ "color": "rgba(255, 255, 255, 0.575)" })
                $("#icon-about").css({ "color": "white" })
                $("#icon-interest").css({ "color": "white" })

            }

            else if (about - windowsscroll >= 0) {
                $("#nav-home").css({ "visibility": "hidden", "color": "white" })
                $("#nav-about").css({ "visibility": "visible", "color": "rgba(255, 255, 255, 0.575)" })
                $("#nav-interest").css({ "visibility": "hidden", "color": "white" })

                $("#icon-home").css({ "color": "white" })
                $("#icon-about").css({ "color": "rgba(255, 255, 255, 0.575)" })
                $("#icon-interest").css({ "color": "white" })

            }
        }
        previousScroll = st;

    })

    $("#icon-home").click(function () {
        $('html,body').animate({
            scrollTop: $(".top-image").offset().top
        },
            'slow');
    });

    $("#icon-about").click(function () {
        $('html,body').animate({
            scrollTop: $(".about").offset().top
        },
            'slow');
    });

    $("#icon-interest").click(function () {
        $('html,body').animate({
            scrollTop: $(".interest").offset().top
        },
            'slow');
    });
})