$("document").ready(function(){

    AOS.init();
    

$(".header .nav ul li").eq(1).addClass("on");

let pro_chk = false;

    let Fullpage = new fullpage(".fullpage",{
        sectionsColor:[ "#fff","#fff","#fff","#fff","#fa9"],
        anchors: ["web1","web2","app"],
        navigation: true,
        navigationTooltips: ["web1","web2","app"],
        normalScrollElements:".window, .window-content",
        // 뒷면 스크롤 안움직이게 하는기능

        responsiveWidth: 1200,
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        
    })





})