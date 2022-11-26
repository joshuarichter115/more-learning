function sumOfTwoNumbers(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

console.log(sumOfTwoNumbers(1, 10));

function hoursIntoSeconds(hours) {
    let seconds = hours*3600
    return seconds;
}

console.log(hoursIntoSeconds(10));

function calcPerimeter (length, width) {
    let perimeter = 2*length + 2*width;
    return perimeter;
}

console.log(calcPerimeter(2, 9));

function appendFrontEnd (string) {
    let newString = string+"Frontend";
    return newString
}

console.log(appendFrontEnd("Apple"));

function sumGreaterThanHundred(num1, num2) {
    let sum1 = num1 + num2
    if (sum1 > 100) {
        return true;
    }

    else {
        return false;
    }
}

console.log(sumGreaterThanHundred(60, 50));

function lessThanOrEqualToZero (testNum) {
    if (testNum <= 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(lessThanOrEqualToZero(-3));

function oppositeBoolean(boolean) {
    if (boolean === true) {
        return false;
    }

    else {
        return true;
    }
}

console.log(oppositeBoolean(true));

function isNotZero(exNum) {
    if (exNum !== 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isNotZero(5));

function calcRemainder (numb1, numb2) {
    let remainder = numb1 % numb2
    return remainder
}

console.log(calcRemainder(4, 2));

function isOdd (maybeOddNum) {
    if (maybeOddNum % 2 !== 0) {
        return true;
    }

    else {
        return false;
    }
}

console.log(isOdd(4));

function booleanInteger(number) {
    if (number % 2 === 0) {
        return 1;
    }

    else {
        return -1;
    }
}

console.log(booleanInteger(6));

function isLoggedInAndSubscribed (logStatus, subStatus) {
    if (logStatus === "LOGGED_IN" && subStatus === "SUBSCRIBED") {
        return true;
    }

    else {
        return false;
    }
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));

function isLoggedInOrSubscribed(loggedIn, subbedIn) {
    if (loggedIn === "LOGGED_IN" || subbedIn === "SUBSCRIBED") {
        return true;
    }

    else{
        return false;
    }
}

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));