$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');

                if($(this).hasClass('active')) {
                	console.log("hello");
                	$('#sub-content').css('margin-left', 1.5 + 'em');
                }
                else {
                	$('#sub-content').css('margin-left', 0.0 + 'em');
                }
                console.log("hello1");

            });
        });


var links = document.querySelectorAll(".icon");

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("mouseover",function(event){
		this.style.fontSize = "3em";
	});
	links[i].addEventListener("mouseout", function( event ){
		this.style.fontSize = "2.5em";
	});
}

$(".hov").mouseover(function(){
    $(this).addClass("glow");
});

$(".hov").mouseout(function(){
    $(this).removeClass("glow");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("profile_pic");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

$(document).keydown(function(e) {
     if (e.key === "Escape") {
        if(modal.style.display !== "none") {
            modal.style.display = "none";
        }
    }
});
var esc = $.Event("keydown", { keyCode: 27 });
modal.trigger(esc);