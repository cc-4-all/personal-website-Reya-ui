var img = document.getElementById ('gallery-img')
var prev = document.getElementById('prev')
var next = document.getElementById('next')

var images =  ["hello-kitty-credit-sanrio.jpg", "funny-sleeping-cat-positions-coverimage.jpg", "helo kitty pink.webp", "hellokitttty.jpg"]

var currentimage = 0;

function changeimage (e) {
    if(e.target.id == "next" && currentimage !== images.length-1 ){
    currentimage = currentimage +1

    }

    if (e.target.id == 'prev' && currentimage !== 0) {
    currentimage = currentimage -1
    }

    img.setAttribute("src", "images/" + images[currentimage])
}

prev.addEventListener("click", changeimage);
next.addEventListener("click", changeimage);