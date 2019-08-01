onmessage = function(e) {
  console.log('Worker: Message received from main script');
  let inputData = e.data;
  if (isNaN(inputData)) {
    postMessage('Invalid Number');
  } else {
  	let baseNumber = inputData;

	console.time('mySlowFunction');
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
	console.timeEnd('mySlowFunction');
    let workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }
}
