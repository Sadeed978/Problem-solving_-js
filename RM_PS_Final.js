/**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
 var solveMeFirst = function(a, b) {
 	return a+b;
};

/**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
 var multiply = function(a, b) {
 	return a*b;
};

/**
  * @param {number} number
  * @return {string}
  */
 var evenOrOdd = function(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};


/**
  * @param {number} number
  * @return {number}
  */
 var makeNegative = function(number) {
    if (number >= 0) {
        return number;
    } else {
        return 0 - number;
    }
};


/**
  * @param {number} number
  * @return {number}
  */
 var opposite = function(number) {
    return 0-number;
};

var simpleArraySum = function(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    return sum;
}; 

var sleepIn = function(weekday, vacation) {
    if (!weekday || vacation) {
        return true;
    } else {
        return false;
    }
};

var monkeyTrouble = function(aSmile, bSmile) {
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
};

var sumDouble = function(a, b) {
    if (a === b) {
        return (a + b) * 2;
    } else {
        return a + b;
    }
};

var diff21 = function(n) {
    if (n > 21) {
        return (n - 21) * 2;
    } else {
        return 21 - n;
    }
};


var parrotTrouble = function(talking, hour) {
    if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
};


var makes10 = function(a, b) {
    if (a === 10 || b === 10 || a + b === 10) {
        return true;
    } else {
        return false;
    }
};


var nearHundred = function(n) {
    if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10) {
        return true;
    } else {
        return false;
    }
};


var posNeg = function(a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    } else {
        return (a < 0 && b > 0) || (a > 0 && b < 0);
    }
};


var notString = function(str) {
    if (str.startsWith("not")) {
        return str;
    } else {
        return "not " + str;
    }
};


var compareTriplets = function(a, b) {
    let aScore = 0;
    let bScore = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aScore++;
        } else if (a[i] < b[i]) {
            bScore++;
        }
    }

    return [aScore, bScore];
};



var aVeryBigSum = function(ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    return sum;
};


var staircase = function(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let hashes = "#".repeat(i);

        result = result + spaces + hashes;

        if (i < n) {
            result = result + "\n";
        }
    }

    return result;
};


var gradingStudents = function(grades) {
    let result = [];

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];

        if (grade < 38) {
            result.push(grade);
        } else {
            let nextMultiple = Math.ceil(grade / 5) * 5;

            if (nextMultiple - grade < 3) {
                result.push(nextMultiple);
            } else {
                result.push(grade);
            }
        }
    }

    return result;
};



var timeConversion = function(s) {
    let hour = parseInt(s.substring(0, 2));
    let period = s.substring(8, 10);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour = hour + 12;
        }
    }

    let hourString = String(hour).padStart(2, "0");

    return hourString + s.substring(2, 8);
};



var repeatStr = function(n, s) {
    return s.repeat(n);
};



var solution = function(str) {
    return str.split("").reverse().join("");
};


var positiveSum = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
};


var summation = function(num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }

    return sum;
};


var booleanToString = function(b) {
    return String(b);
};




