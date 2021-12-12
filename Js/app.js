// Login page password Hide/Show
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


// Seat view details

var acc = document.getElementsByClassName("table_single_row");
// var acc2=document.getElementsByClassName("table_single_row2");




var buttonText = document.getElementById('button_text');
// var buttonText2 = document.getElementById('button_text2');

var i;
// var j;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    if(buttonText.innerHTML === "View Seat"){
      buttonText.innerHTML = "Hide Seat" ;
      console.log('buttonText ===========>', buttonText);
      console.log("hello");
    }
    else{
      buttonText.innerHTML = "View Seat";
    }

    var details_panel = this.nextElementSibling;
    if (details_panel.style.maxHeight) {
      details_panel.style.maxHeight = null;
    }
    else {
      details_panel.style.maxHeight = "100%";
      details_panel.style.transition = "max-height 0.2s ease-out";
    }
  });
}

// for (j = 0; j < acc.length; j++) {
//   acc2[j].addEventListener("click", function() {
//     if(buttonText2.innerHTML === "View Seat"){
//       buttonText2.innerHTML = "Hide Seat" ;
     
//     }
//     else{
//       buttonText2.innerHTML = "View Seat";
//     }

//     var details_panel2 = this.nextElementSibling;
//     if (details_panel2.style.maxHeight) {
//       details_panel2.style.maxHeight = null;
//     }
//     else {
//       details_panel2.style.maxHeight = "100%";
//       details_panel2.style.transition = "max-height 0.2s ease-out";
//     }
//   });
// }