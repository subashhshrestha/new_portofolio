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

    setTimeout(()=>{
        description = 'My name is subash shrestha';
        myVeryNewIntercal = setInterval(add,100);

        setTimeout(()=>
        {
        clearInterval(myVeryNewIntercal)

        },800)
        setTimeout(()=>
        {
        startBtn.style.opacity= 1;
        
        },900)


    },800)
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

function add(){
    index = index+1;
    let mystring =description.substr(0, index)
    myDescription.innerHTML = mystring;
}

document.getElementById('start-btn').addEventListener("click",function(){
    console.log("click");
    content.style.opacity=1;
    landing.style.top="-100vh";

})


