// Input: array = [3,10,100]
// Output: "310100"

function findMaxNumber(arr) {
	var stringArr = [];
	for(let i = 0; i < arr.length; i++) {
		stringArr.push(String(arr[i]));
	}

	
	for(let j = 0; j < stringArr.length; j++) {
		for(let x = 0; x < stringArr.length; x++) {
			if(stringArr[x] + stringArr[x+1] < stringArr[x] + stringArr[x+1]) {
			// "310" > "301"
				// biggestNum += stringArr[j] + stringArr[j+1];
				swap(stringArr[x], stringArr[x+1]);
			}

		}
	}
	console.log(stringArr);

	// var biggestNum = "";
	// for(let y = 0; y < stringArr.length; y++) {
	// 	biggestNum += stringArr[y];
	// }
	// console.log(biggestNum);
	// return biggestNum;
}

function swap(item1,item2) {
	var temp;
	temp = item1;
	item1 = item2;
	item2 = temp;
}

findMaxNumber([100,30,10,20])
