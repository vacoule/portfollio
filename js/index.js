function fasFunction() {
  document.getElementsByClassName("fs-1")[0].classList.toggle("fs1");
  document.getElementsByClassName("fs-2")[0].classList.toggle("fs2");
  document.getElementsByClassName("fs-3")[0].classList.toggle("fs3");
  document.getElementsByClassName("nav-res")[0].classList.toggle("nav-res-visibility");
}
function reverseFunction() {
  if( document.getElementsByClassName("nav-res")[0].classList.contains("nav-res-visibility"))
 {
    document.getElementsByClassName("nav-res")[0].classList.remove("nav-res-visibility");
    document.getElementsByClassName("fs-1")[0].classList.toggle("fs1");
    document.getElementsByClassName("fs-2")[0].classList.toggle("fs2");
    document.getElementsByClassName("fs-3")[0].classList.toggle("fs3");
  }
}
// =====END OF NAV=====


//=====Start of guessing game======>>>
function inputFunction() {
  let inputNumber = document.getElementById("guess-number").value;
  let myGuess = Math.floor(Math.random() * 5);
  let output1 = document.getElementById("congrats");
  let output2 = document.getElementById("congrats-text");
  let backAni = document.getElementById("output-background");
  if (inputNumber < 0 || inputNumber > 5) {
    output1.innerText = "O0ps!";
    output2.innerText = "Enter number between 0-5";
    backAni.classList.add("oops");
    if (
      backAni.classList.contains("sorry") ||
      backAni.classList.contains("congra")
    ) {
      backAni.classList.remove("congra");
      backAni.classList.remove("sorry");
    }
  } else if (inputNumber == myGuess) {
    output1.innerText = "Congrats!";
    output2.innerText = "your number matched with me";

    backAni.classList.add("congra");
    if (
      backAni.classList.contains("sorry") ||
      backAni.classList.contains("oops")
    ) {
      backAni.classList.remove("oops");
      backAni.classList.remove("sorry");
    }
  } else {
    output1.innerText = "Sorry!";
    output2.innerText = "The number didnt match";
    backAni.classList.add("sorry");
    if (
      backAni.classList.contains("oops") ||
      backAni.classList.contains("congra")
    ) {
      backAni.classList.remove("congra");
      backAni.classList.remove("oops");
    }
  }
}
//<<<=====END OF GUESSING GAME======
// =====Night mode settle=====>>>
let night = 0;
function nightFunction() {
night++
  let nightTogglerAncor = document.getElementsByTagName("a");
  let nightTogglerBG = document.getElementsByClassName("night-toggler-bg");
  let nightTogglerBGW= document.getElementsByClassName("night-toggler-bgW");
  let nightTogglerBorder = document.getElementsByClassName("night-toggler-border");
  let nightLogoNight = document.getElementsByClassName("night-logo")[0];
  let nightLogoDay = document.getElementsByClassName("day-logo")[0];
  document.body.classList.toggle("night-toggler-body")
  
  
    for (i = 0; i < nightTogglerBGW.length; i++){
      nightTogglerBGW[i].classList.toggle("night-toggler-bgw-on");
  }
    for (i = 0; i < nightTogglerBG.length; i++){
      nightTogglerBG[i].classList.toggle("night-toggler-bg-on");
  }
    for (i = 0; i < nightTogglerBorder.length; i++){
      nightTogglerBorder[i].classList.toggle("night-toggler-border-on");
    }
  
  
  for (i = 0; i < nightTogglerAncor.length; i++){
    nightTogglerAncor[i].classList.toggle("night-toggler-ancor-on");
 
  }




  if (night % 2 == 1) {
    nightLogoNight.style.display = "none";
    nightLogoDay.style.display = "block";

  } else {
    nightLogoNight.style.display = "block";
    nightLogoDay.style.display = "none";
 }

  




}
// notes -->
//          1.in night mode nav link color must be white
//              
//<<<=====end of night mode settle