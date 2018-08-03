const ARROW_CODES = {
	37: 'left',
	38: 'up',
	39: 'right'
}

let arrows = trackKeys(ARROW_CODES);

function trackKeys(keyCodes) {
	let pressedKeys = {};

	function handler (event) {
		// hasOwnProperty checks if one property exists inside an object
		if (keyCodes.hasOwnProperty(event.keyCode)) {
			let downPressed = event.type === 'keydown';
			pressedKeys[keyCodes[event.keyCode]] = downPressed;
			event.preventDefault();
		}
	}
	addEventListener('keydown', handler);
	addEventListener('keyup', handler);

	return pressedKeys;
}

function runAnimation (frameFunction) {
	let lastTime = null;

	function frame (time) {
		let stop = false;
		
		if (lastTime !== null) {
			let timeStep = Math.min(time - lastTime, 100);
			stop = frameFunction(timeStep) === false;
		}
		lastTime = time;

		if (!stop) {
			// requestAnimationFrame is a method of the browser 
			requestAnimationFrame(frame);
		}
		requestAnimationFrame(frame)
	}
}

let level = new Level(GAME_LEVELS);
let display = new DOMDisplay(document.body, level);