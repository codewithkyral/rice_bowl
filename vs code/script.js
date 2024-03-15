var tl = gsap.timeline()



tl.from(".navbar h1,.navbar ul li " , {
    y:-100,
    duraction:1,
    delay:1,
    opacity:1,
    
},"kuch")
tl.from("#two",{
    sacle:0,
    delay:1,
    duration:2,
    rotate:360,

},"kuch")
tl.from("h2,h6,span,#firstbutton",{
    x:-600,
       duration:1,
    stagger:0.5
    
},"kuch")
tl.from("#images img",{
    x:500,
    duration:.5,
    scrollTrigger:{
        trigger:"#images img",
        scroll:"body",
        start:"top70%",
         // markers:true,
        scrub:4
       }
  
})
var h5Text = document.querySelector("h5").textContent

var splittedText = h5Text.split(" ")
var clutter = ""
splittedText.forEach(function(elem){
    clutter +=` <span>${elem}</span>`
})
document.querySelector("h5").innerHTML = clutter
gsap.from("h5 span",{
    y:40,
    opacity:0,
    stagger:0.3,
    delay:4,
    duration:0.1,
})


