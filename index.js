var myAudio = new Audio('./sounds/about.mp3');
document.querySelector(".speaker").addEventListener("click",function(){
    myAudio.play();
    // this.innerHTML="▷";
    this.classList.add("speaker-pressed");
})
$(".nav-about").on("click",function(){
    $(".hero-section").slideToggle();
})
$(".nav-contact").on("click",function(){
    $(".hero-section").slideToggle();
    $(".about-section").slideToggle();
    
})

