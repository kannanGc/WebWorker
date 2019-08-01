const numberMainThread = document.querySelector('#number1');
const numberSeparateThread = document.querySelector('#number2');

const result = document.querySelector('.result');
const resultHeavyCalculations = document.querySelector('.resultHeavyCalculations');
const resultHeavyCalculationsWorker = document.querySelector('.resultHeavyCalculationsWorker');


const luckyButton = document.querySelector("#clickMe");
const mainThreadButton = document.querySelector("#mainThread");
const separateThreadButton = document.querySelector("#separateThread");

luckyButton.onclick = function () {
	result.textContent =  Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
}

mainThreadButton.onclick = function () {
	let baseNumber = numberMainThread.value;
	console.time('mySlowFunction');
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
	console.timeEnd('mySlowFunction');
	resultHeavyCalculations.textContent = result;

}

if (window.Worker) {
	
	const myWorker = new Worker("worker.js");

	separateThreadButton.onclick = function() {
	  myWorker.postMessage(numberSeparateThread.value);
	  console.log('Message posted to worker');
	}
	
	myWorker.onmessage = function(e) {
		resultHeavyCalculationsWorker.textContent = e.data;
		console.log('Message received from worker');
	}

} else {
	console.log('Your browser doesn\'t support web workers.')
}
