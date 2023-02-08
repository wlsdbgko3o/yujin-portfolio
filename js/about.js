$("document").ready(function(){

    AOS.init();

$(".header .nav ul li").eq(0).addClass("on");



let count = 0;
$(window).on("mousewheel DOMMouseScroll", function(e){
    let delta=e.originalEvent.wheelDelta;
    let firefox=e.originalEvent.detail;
    
    
    if($(".about").is(":animated")){
        return
    } 
    
    
    if(delta<0 || firefox<0){
        
        count++;
        if(count>$(".about").length-1){
            count=$(".about").length-1;
        }
    }else{
        
        count--;
        if(count<0){
            count=0;
        }
    }






})








    let bar = new ProgressBar.Line("#pro1",{
        strokeWidth:3,
        duration:3000, 
        color:"#f9857b",
        trailWidth: 3,
        trailColor: "rgba(249, 133, 123,.2)"
        
    }) //bar1
    bar.animate(0.9)

    bar = new ProgressBar.Line("#pro2",{
        strokeWidth:3,
        duration:3000,
        color:"#f9857b",
        trailWidth: 3,
        trailColor: "rgba(249, 133, 123,.2)"
    }) //bar2
    bar.animate(0.9)

    bar=new ProgressBar.Line("#pro3",{
        strokeWidth:3,
        duration:3000,
        color:"#f9857b",
        trailWidth: 3,
        trailColor: "rgba(249, 133, 123,.2)"
    }) //bar3
    bar.animate(0.8)

    
})