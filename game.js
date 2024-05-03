// scrollspeed
let scrollspeed = 2;

// apollo11 controls
const obj = document.getElementById('apollo11')
window.addEventListener('keydown',function(e){
    console.log(e.key)
    console.log(scrollspeed)
    if (e.key == 'w'){
        scrollspeed += 0.1;
    }
    if (e.key =='s'){
        scrollspeed -= 0.1;
    }
    if (e.key == 'a'){ 
        obj.style.left = `${obj.offsetLeft - 10}px`;
    }
    if (e.key == 'd'){
        obj.style.left = `${obj.offsetLeft + 10}px`;
    }
})

// autoscroller
function scroller() {
    window.scroll(0,window.scrollY+scrollspeed)
    requestAnimationFrame(scroller)
}
  
setTimeout(setInterval(requestAnimationFrame(scroller), 1000),1000);




//Collider events




// Error handlers
// Error handlers
// Error handlers


// disable scroll by mousewheel
function preventDefault(e) {
    e.preventDefault();
}

function disableMouseWheel() {
    document.addEventListener('mousewheel', preventDefault, { passive: false });
    document.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
}
disableMouseWheel();


// Speed & control
function errorhandler(){
    if (scrollspeed > 3){
        console.log("debug scrollspeed: " + scrollspeed);
        scrollspeed = 3;
    }
    if (scrollspeed <= 1){
        console.log("debug scrollspeed: " + scrollspeed);
        scrollspeed = 1.1;
    }
    if (obj.offsetLeft < 50){
        console.log("debug control: " + obj.offsetLeft);
        obj.style.left = `${50}px`;
    }
    if (obj.offsetLeft > window.innerWidth - 50){
        console.log("debug control: " + obj.offsetLeft);
        obj.style.left = `${window.innerWidth - 50}px`;
    }

}
setInterval(errorhandler,100)