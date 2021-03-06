function playSound(e) {
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	if (!audio) return; //stop the function from running all together
	audio.currentTime = 0; //rewind to the start
	audio.play();
}

window.addEventListener('keydown', playSound);
