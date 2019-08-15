var navTitleImg = document.querySelector(".navTitleImg");
var navTitle = document.querySelector(".nav-a")
function imgChange(){
    var navTitleImgSrc = navTitleImg.getAttribute("src");    
    if(navTitleImgSrc === "images/波波小獅王li.jpg"){  
        navTitleImg.setAttribute("src","images/星貓logo.png");
    }else{
        navTitleImg.setAttribute("src","images/波波小獅王li.jpg");
    }

}
navTitle.addEventListener("mouseover",imgChange);


var navIcon = document.querySelector(".icon");


navIcon.addEventListener("click",mobileNavSwitch);



function mobileNavSwitch(){
    var navUl = document.querySelectorAll(".ul li");
    
    for(i = 0; i < navUl.length; i++){    
    if(navUl[i].style.display === "block"){
        navUl[i].style.display = "none";
        
    }else {
        navUl[i].style.display = "block";
    }
    }   
    
}


var iconDy = navIcon.getAttribute("style");
if(iconDy === "none"){
    var navUl = document.querySelectorAll(".ul li");
    for(i = 0; i < navUl.length; i++){
        navUl[i].style.display = "block";
    }


}











// var navLi = document.querySelector(".ul li");
// var navIcon = document.querySelector(".icon");








//  var bgBtn = document.querySelector(".bgbtn");
//  var mainSection = document.querySelector(".main-section");


//  bgBtn.addEventListener("click",clearBg);

//  function clearBg(){
//      var mainVy = mainSection.style.visibility;
//      if(mainVy !== "hidden"){
//          mainSection.style.visibility = "hidden";
//          bgBtn.textContent = "恢復頁面";
//      }else {
//         mainSection.style.visibility = "visible";
//         bgBtn.textContent = "觀看背景";         
//      }
//  }






