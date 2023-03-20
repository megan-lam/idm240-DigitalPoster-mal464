var audioPlayerObj = document.getElementById('audioplayer');
var text_cloverObj = document.getElementById('text_clover');

var sndPlaying = false;

function audioToggle(msg) {
	// alert(msg);
	if (sndPlaying) {
		audioPlayerObj.pause();
		sndPlaying = false;
	} else {
		audioPlayerObj.play();
		sndPlaying = true;
	}
}
var svg = document.getElementById("text_clover");
    svg.addEventListener("click",function(){
        if (svg.style.animationPlayState == "running") {
            svg.style.animationPlayState = "paused";
            } else {
            svg.style.animationPlayState = "running";
            }
        })


