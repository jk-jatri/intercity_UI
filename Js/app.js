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



// table view details

const view = document.getElementById('view_button');
const hiddenRow = document.getElementById('hide_row');
const buttonText = document.getElementById('button_text');
view.addEventListener('click', function(){
  hiddenRow.classList.toggle('d-block');
  if(buttonText.innerHTML === "View Seat"){
    buttonText.innerHTML = "Hide Seat";
  }
  else{
    buttonText.innerHTML = "View Seat";
  }
})