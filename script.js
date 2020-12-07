/* movie titles */

let movie1 = document.querySelector(".m-1")
let movieTitle1 = document.querySelector(".title-1")

let movie2 = document.querySelector(".m-2")
let movieTitle2 = document.querySelector(".title-2")

let movie3 = document.querySelector(".m-3")
let movieTitle3 = document.querySelector(".title-3")

let movie4 = document.querySelector(".m-4")
let movieTitle4 = document.querySelector(".title-4")

function showText(mov, title) {
    mov.onmouseenter = function(evt) { 
        title.classList.remove('hidden')
        
    }    
}

function hideText(mov, title) {
    mov.onmouseleave = function(evt) { 
        title.classList.add('hidden')
        
    }    
}

showText(movie1, movieTitle1)
hideText(movie1, movieTitle1)

showText(movie2, movieTitle2)
hideText(movie2, movieTitle2)

showText(movie3, movieTitle3)
hideText(movie3, movieTitle3)

showText(movie4, movieTitle4)
hideText(movie4, movieTitle4)



/* making arrow red */

let button = document.querySelector(".button")
let img = document.getElementById("arrow")

button.onmouseenter = function(evt) {
   img.src = "img/arrow_red.png" 
}

button.onmouseleave = function(evt) {
    img.src = "img/arrow_white.png" 
}



/* movie-info section */

let infoSection = document.querySelector(".movie-info")
let movieSection = document.querySelector(".movies")
let movieHeader = document.querySelector("h2")
let movieDesc = document.querySelector(".movie-description")
let screenshot = document.querySelector(".screenshot")

movie1.onclick = function() {
    screenshot.classList.add("scr1")
    movieHeader.textContent = "魔女の宅急便/Kiki’s Delivery Service (1989)"
    movieDesc.textContent = "Kiki follows family tradition and settles for a year in a foreign city to serve as resident witch. She makes friends, finds room and board, and uses her broom-flying ability to launch a delivery service."
    movieSection.classList.add("hidden")
    infoSection.classList.remove("hidden")
}

movie2.onclick = function() {
    screenshot.classList.add("scr2")
    movieHeader.textContent = "もののけ姫/Princess Mononoke (1997)"
    movieDesc.textContent = "In 15th century Japan Ashitaka, a young prince from a remote tribe, is cursed by a dying boar god from the forest region of western Japan. His journey to the source of the curse takes him to Iron Town. There Lady Eboshi runs an operation that smelts ore taken from the surrounding mountains once dominated by wolves and boars."
    movieSection.classList.add("hidden")
    infoSection.classList.remove("hidden")
}


movie3.onclick = function() {
    screenshot.classList.add("scr3")
    movieHeader.textContent = "千と千尋の神隠し/Spirited Away (2001)"
    movieDesc.textContent = "Chihiro wanders into a world ruled by witches and monsters. When her parents gorge themselves on enchanted food, they turn into pigs and Chihiro must overcome herself in order to enter the spirit world and win them back. "
    movieSection.classList.add("hidden")
    infoSection.classList.remove("hidden")
}

movie4.onclick = function() {
    screenshot.classList.add("scr4")
    movieHeader.textContent = "ハウルの動く城/Howl's Moving Castle (2004)"
    movieDesc.textContent = "When Sophie is turned into a 90-year-old by a spiteful witch, her only chance of breaking the spell lies with a mysterious wizard Howl and his companions, leading her to his magical walking castle."
    movieSection.classList.add("hidden")
    infoSection.classList.remove("hidden")
}


button.onclick = function() {
    if (screenshot.classList.contains('scr1')) {
        screenshot.classList.remove('scr1')
    } else if (screenshot.classList.contains('scr2')) {
        screenshot.classList.remove('scr2')
    } else if (screenshot.classList.contains('scr3')) {
        screenshot.classList.remove('scr3')
    } else if (screenshot.classList.contains('scr4')) {
        screenshot.classList.remove('scr4')
    }

    infoSection.classList.add("hidden")
    movieSection.classList.remove('hidden')   
}

/* back to top button */

let topButton = document.querySelector(".top")

window.onscroll = function() {
    if (window.pageYOffset > 200) {
        topButton.classList.add('shown')
    } else {
        topButton.classList.remove('shown')
    }
}

topButton.onclick = function() {
    window.scrollTo(0,0)
}

topButton.onmouseenter = function(evt) {
    topButton.classList.remove("white")
    topButton.classList.add("red")
 }
 
 topButton.onmouseleave = function(evt) {
    topButton.classList.remove("red")
    topButton.classList.add("white")
 }
