$("document").ready(function(){

    AOS.init();

$(".header .nav ul li").eq(2).addClass("on");

const work_img = [
    // "../이미지 폴더이름/파일명.확장",
    // "../이미지 폴더이름/파일명.확장"
    "../images/bom-detail.jpg",
    "../images/poster.png",
    "../images/cheesebone-detail.jpg",
    "../images/detail-page.jpg",
    
]


$(".design-img .imgs .img01 a span").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    
    
    $(".window").fadeIn()
    $(".window-content").show();
    $(".window-content img").attr("src", work_img[0])
    $("html, body").css("overflow", "hidden")


})
$(".design-img .imgs .img02 a span").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    
    
    $(".window").fadeIn()
    $(".window-content").show();
    $(".window-content img").attr("src", work_img[1])
    $("html, body").css("overflow", "hidden")


})
$(".design-img .imgs .img03 a span").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    
    
    $(".window").fadeIn()
    $(".window-content").show();
    $(".window-content img").attr("src", work_img[2])
    $("html, body").css("overflow", "hidden")


})
$(".design-img .imgs .img04 a span").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    
    
    $(".window").fadeIn()
    $(".window-content").show();
    $(".window-content img").attr("src", work_img[3])
    $("html, body").css("overflow", "hidden")


})

$(".window-content i, .window").click(function(){
    $(".window").fadeOut()
    $(".window-content").scrollTop(0).hide();
    // $("html, body").css("overflow","scroll")
    $("html, body").css("overflow","")
    // ""는 없는게아니라 초기값으로 돌아가는것
    $("html, body").css("overflow","visible")

})

let close = parseInt($(".window-content i").css("top"));

$(".window-content").scroll(function(){
    let pos = $(".window-content").scrollTop();
    $(".window-content i").css("top", close+pos+"px")
    // 최초 닫기 버튼의 위치가 20px (탑값) 모달창이 스크롤 되면 해당 값 + 20을 더해주면 해당 위치에 고정되는 원리
})

})

