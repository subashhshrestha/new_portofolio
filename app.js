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
    let flag = 1;
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
        let skill = $(".skills").offset().top;
        st = $(this).scrollTop();
        // console.log(Math.floor($(".content").height()), Math.floor(windowsscroll + $(window).height()))
        if (previousScroll < st) {
            // console.log("Down Scroll")

            if (about - windowsscroll <= 20) {
                $("#nav-home").css({ "visibility": "hidden", "color": "white" });
                $("#nav-about").css({ "visibility": "visible", "color": "rgba(255, 255, 255, 0.575)" })
                $("#nav-interest").css({ "visibility": "hidden", "color": "white" })

                $("#icon-home").css({ "color": "white" });
                $("#icon-about").css({ "color": "rgba(255, 255, 255, 0.575)" })
                $("#icon-interest").css({ "color": "white" })

            }

            if (skill - windowsscroll <= 150 && flag == 1) {
                flag = 0;
                jswidth = 0;
                let javascript = $("#javascript");
                let jsinterval = setInterval(() => {
                    jswidth = jswidth + 1;
                    javascript.css({ "width": `${jswidth}%` });
                    javascript.html(`${jswidth}%`)
                    if(jswidth == 75){
                        clearInterval(jsinterval)
                    }
                }, 50);

                ngwidth = 0;
                let angular = $("#angular");
                let nginterval = setInterval(() => {
                    ngwidth = ngwidth + 1;
                    angular.css({ "width": `${ngwidth}%` });
                    angular.html(`${ngwidth}%`)
                    if(ngwidth == 80){
                        clearInterval(nginterval)
                    }
                }, 50);

                reactwidth = 0;
                let react = $("#react");
                let reactinterval = setInterval(() => {
                    reactwidth = reactwidth + 1;
                    react.css({ "width": `${reactwidth}%` });
                    react.html(`${reactwidth}%`)
                    if(ngwidth == 53){
                        clearInterval(reactinterval)
                    }
                }, 50);

                htmlwidth = 0;
                let html = $("#html");
                let htmlinterval = setInterval(() => {
                    htmlwidth = htmlwidth + 1;
                    html.css({ "width": `${htmlwidth}%` });
                    html.html(`${htmlwidth}%`)
                    if(htmlwidth == 79){
                        clearInterval(htmlinterval)
                    }
                }, 50);

                csswidth = 0;
                let css = $("#css");
                let cssinterval = setInterval(() => {
                    csswidth = csswidth + 1;
                    css.css({ "width": `${csswidth}%` });
                    css.html(`${csswidth}%`)
                    if(csswidth == 69){
                        clearInterval(cssinterval)
                    }
                }, 50);

                nodewidth = 0;
                let node = $("#node");
                let nodeinterval = setInterval(() => {
                    nodewidth = nodewidth + 1;
                    node.css({ "width": `${nodewidth}%` });
                    node.html(`${nodewidth}%`)
                    if(nodewidth == 50){
                        clearInterval(nodeinterval)
                    }
                }, 50);

                javawidth = 0;
                let java = $("#java");
                let javainterval = setInterval(() => {
                    javawidth = javawidth + 1;
                    java.css({ "width": `${javawidth}%` });
                    java.html(`${javawidth}%`)
                    if(javawidth == 43){
                        clearInterval(javainterval)
                    }
                }, 50);

                pythonwidth = 0;
                let python = $("#python");
                let pythoninterval = setInterval(() => {
                    pythonwidth = pythonwidth + 1;
                    python.css({ "width": `${pythonwidth}%` });
                    python.html(`${pythonwidth}%`)
                    if(pythonwidth == 40){
                        clearInterval(pythoninterval)
                    }
                }, 50);

                gitwidth = 0;
                let git = $("#git");
                let gitinterval = setInterval(() => {
                    gitwidth = gitwidth + 1;
                    git.css({ "width": `${gitwidth}%` });
                    git.html(`${gitwidth}%`)
                    if(gitwidth == 40){
                        clearInterval(gitinterval)
                    }
                }, 50);

                mysqlwidth = 0;
                let mysql = $("#mysql");
                let mysqlinterval = setInterval(() => {
                    mysqlwidth = mysqlwidth + 1;
                    mysql.css({ "width": `${mysqlwidth}%` });
                    mysql.html(`${mysqlwidth}%`)
                    if(mysqlwidth == 60){
                        clearInterval(mysqlinterval)
                    }
                }, 50);


                

            }



            // if (Math.floor($(".content").height()) == Math.floor(windowsscroll + $(window).height()) || Math.floor($(".content").height())-1 == Math.floor(windowsscroll + $(window).height()) || Math.floor($(".content").height())+1 == Math.floor(windowsscroll + $(window).height())) {
            //     $("#nav-home").css({ "visibility": "hidden", "color": "white" });
            //     $("#nav-about").css({ "visibility": "hidden", "color": "white" })
            //     $("#nav-interest").css({ "visibility": "visible", "color": "rgba(255, 255, 255, 0.575)" })

            //     $("#icon-home").css({ "color": "white" });
            //     $("#icon-about").css({ "color": "white" })
            //     $("#icon-interest").css({ "color": "rgba(255, 255, 255, 0.575)" })
            // }
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