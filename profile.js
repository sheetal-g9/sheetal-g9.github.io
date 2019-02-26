// alert("Connected");
var links = document.querySelectorAll(".icon");

console.log("Connected");
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("mouseover",function(event){
		this.style.fontSize = "3em";
		// alert("mouseover");
	});
	links[i].addEventListener("mouseout", function( event ){
		this.style.fontSize = "2.5em";
	});
}
