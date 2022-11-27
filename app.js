function falsyOrTruthy (elem1, elem2) {
    if (!elem1){
        return elem1;
    }

    else{
        return elem2;
    }
}

console.log(falsyOrTruthy(1, 2));

function arrLength (arr) {
    let arrayLength = arr.length;
    return arrayLength;
}

console.log(arrLength([1, 2, 3, 4]));

function lastElem (arr1) {
    let i = arr1.length - 1
    return arr1[i]
}

console.log(lastElem([0, 1, 2, "z"]));


let sum = 0;
function arrSum (arr2) {
    for (i = 0; i<=arr2.length-1; i++) {
        sum = sum + arr2[i];
    }
    return sum;
}

console.log(arrSum([1, 2, 3]));

let sum1 = 0;
let arr3 = [];

function progressiveSum (num1) {
    for (i = 0; i <= num1; i++) {
        arr3.push(i);
    }
    for (i = 0; i<=arr3.length-1; i++) {
        sum1 = sum1 + arr3[i]
    }
    return sum1;

}

console.log(progressiveSum(600));

function calcTime (seconds) {
    let timerMinutes = Math.trunc(seconds/60);
    let timerSeconds = seconds % 60;
    if (timerSeconds.toString().length === 1 ) {
        timerSeconds = timerSeconds + "0";
    }
    if (timerMinutes.toString().length === 1) {
        timerMinutes = "0" + timerMinutes;
    }
    return timerMinutes+":"+timerSeconds;
}

console.log(calcTime(60));

function getMax (arr4) {
    let max = arr4[0];
    for (i = 0; i<=arr4.length-1; i++) {
        if (arr4[i] > max) {
            max = arr4[i]
    }
    return max;
}
}

console.log(getMax([12, 10, -20]));

function reverseArray (arr5) {
    let backwardsArr = [];
    for (i = arr5.length-1; i>=0; i--) {
        backwardsArr.push(arr5[i]);
    }
    return backwardsArr;
}

console.log(reverseArray([0, 1, 2, 3, 1]));

function reverseString (str1) {
    let backwardsString = "";
    for (i = str1.length-1; i>=0; i--) {
        backwardsString = backwardsString + str1[i];
    }
    return backwardsString;
}

console.log(reverseString("This is cool"));

function convertToZeroes (arr6) {
    for (i = 0; i<=arr6.length-1; i++) {
        arr6[i] = 0;
    }
    return arr6;
}

console.log(convertToZeroes([1, 2, 3, 4, 5, 6]));

function removeApples (arr7) {
    for (i = 0; i<=arr7.length-1; i++) {
        if (arr7[i] === "Apple") {
            arr7.splice(i, 1);
        }
    }
    return arr7;
}

console.log(removeApples(["Apple", "Banana", "Orange", "Apple", "Banana"]));

function filterOutFalsy (arr8) {
    for (i = 0; i<=arr8.length-1; i++) {
        if (!arr8[i]) {
            arr8.splice(i, 1);
        }
    }
    return arr8;
}

console.log(filterOutFalsy(["Tomato", "Orange", false]));

function showTruthy (arr9) {
    let truthyArr = [];
    for (i = 0; i<=arr9.length-1; i++) {
        if (!!arr9[i]) {
            truthyArr.push(arr9[i])
        }
    }
    return truthyArr;
}

console.log(showTruthy(["Tomato", "Orange", false]));

function convertToBoolean (arr10) {
    let boolArr = [];
    for (i = 0; i<=arr10.length-1; i++) {
        boolArr.push(!!arr10[i])
    }
    return boolArr;
}

console.log(convertToBoolean([500, 0, "David", "", []]));