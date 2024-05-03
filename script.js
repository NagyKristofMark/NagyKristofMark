//Star creation (random coords for real feeling)
const numStars = 1000;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('span');
  star.className = 'star';
  star.style.top = `${Math.random() * 1050}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(star);
}

//loader

var loading = document.getElementById("loader");
  window.addEventListener("load", function() {
    setTimeout(function(){
      loading.classList.add("animload")
    },1000)
  })