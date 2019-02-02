function myFunction1() {
    document.querySelector('#par').style.fontStyle = "normal";
    document.querySelector('#par').style.fontWeight = "normal";
    document.querySelector('#par').style.textDecoration="initial"; 
}

function myFunction4() {

  //  document.querySelector('#par').style.fontWeight = "bold";
  document.querySelector('p').classList.toggle("bold")
     
}
function myFunction5() {
    //document.querySelector('#par').style.fontStyle = "italic";
    document.querySelector('p').classList.toggle("italic");
    document.getElementById("5").classList.toggle("action");
}
 
function myFunction6() {
   // document.querySelector('#par').style.textDecoration="underline";
   document.querySelector('p').classList.toggle("underline") 
}
