import Slider from "./Slider.js";

const slider = new Slider();

window.addEventListener("mousewheel", (e) => {
	const {wheelDelta} = e;

	if(wheelDelta > 0) {
		slider.next();
	}else if(wheelDelta < 0) {
		slider.prev();
	}
},true);

window.addEventListener("keydown", (e) => {
	const {keyCode} = e;

	if(keyCode == 38) {
		slider.next();
	}else if(keyCode == 40) {
		slider.prev();
	};
});
