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