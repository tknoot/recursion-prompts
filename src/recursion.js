/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    let input = array.slice();
    if (input.length === 0) {
        return 0;
    }
    if (input.length === 1) {
        return array[0];
    }
    let n = input.pop();
    return n + sum(input);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    let input = array.slice();
    if (input.length === 0) {
        return 0;
    }
    let n = input.pop();
    if (Array.isArray(n)) {
        return arraySum(n) + arraySum(input);
    }
    if (typeof n === 'number' && input.length === 0) {
        return n;
    }
    if (typeof n === 'number') {
        return n + arraySum(input);
    }
    
};

// 4. Check if a number is even.
var isEven = function(n) {
    n = Math.abs(n);
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) {
        return n;
    }
    let sign = Math.sign(n);
    n -= sign;
    return n + sumBelow(n);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    let result = [];
    if (x === y) {
        return result;
    }
    if (x > y) {
        x -= 1;
        if (x === y) {
            return result;
        }
        result.push(x)
        return result.concat(range(x, y));
    }
    if (x < y) {
        x += 1;
        if (x === y) {
            return result;
        }
        result.push(x)
        return result.concat(range(x, y));
    }
    // return result.concat(range(x, y?));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp < 0) {
        return 1 / base * exponent(base, exp + 1);
    }
    if (exp % 2 === 0) {
        exp /= 2;
        let result = exponent(base, exp);
        return result * result;
    }
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1) {
        return true;
    }
    if (n >= 2) {
        return powerOfTwo(n / 2);
    }
    return false;
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (string === '') {
        return string;
    }
    let strArr = string.split('');
    let result = strArr.pop();
    return result + reverse(strArr.join('')); 
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if (string === '' || string.length === 1) {
        return true;
    }
    let strArr = string.toLowerCase().split('');
    let first = strArr.shift();
    let last = strArr.pop();
    if (first === last) {
        return palindrome(strArr.join(''));
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    if (x === 0) {
        return x;
    }
    if (x > 0) {
        if (x < y) {
            return x;
        }
        x -= y;
        return modulo(x, y);
    }
    if (x < 0) {
        if (y < 0) {
            if (x - y > 0) {
                return x;
            }
            x -= y;
            return modulo(x, y);
        }
        if (y > 0) {
            if (x + y > 0) {
                return x;
            }
            x += y;
            return modulo(x, y);
        }
    }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }
    if (x > 0 && y < 0) {
        [x, y] = [y, x];
    }
    if (y > 0) {
        return x + multiply(x, y - 1);
    }
    return multiply(-x, -y);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    if (x === 0) {
        return 0;
    }
    if (x < 0 && y < 0) {
        return divide(-x, -y);
    }
    if (x < 0) {
        if (x + y < 0) {
            return -1 + divide(x + y, y);
        }
        return 0;
    }
    if (x >= y) {
        if (x - y >= y) {
            return 1 + divide(x - y, y);
        }
        return 1;
    }
    return 0;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) {
        return null;
    }
    if (x === 0) {
        return y;
    }
    if (y === 0) {
        return x;
    }
    if (x < y) {
        [x, y] = [y, x];
    }
    let rem = x % y;
    return gcd(y, rem);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
    let strArr1 = str1.split('');
    let strArr2 = str2.split('');
    let char1 = strArr1.shift();
    let char2 = strArr2.shift();
    if (char1 === char2) {
        return compareStr(strArr1.join(''), strArr2.join(''));
    }
    return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    let result = [];
    if (str.length === 0) {
        return result;
    }
    result.push(str.substr(0,1));
    str = str.slice(1);
    return result.concat(createArray(str));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    let result = [];
    if (array.length === 0) {
        return result;
    }
    result.push(array.pop());
    return result.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    let result = [];
    if (length === 0) {
        return result;
    }
    result.push(value);
    return result.concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    if (n === 1) {
        return ['1'];
    }
    let result = [];
    let string = '';
    let modded = false;
    if (n % 3 === 0) {
        string += 'Fizz';
        modded = true;
    }
    if (n % 5 === 0) {
        string += 'Buzz';
        modded = true;
    }
    if (!modded) {
        string += n;
    }
    result.push(string);
    result.splice(0, 0, ...fizzBuzz(n - 1));
    return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length === 0) {
        return 0;
    }
    let test = array.pop();
    if (test === value) {
        return 1 + countOccurrence(array, value);
    }
    return 0 + countOccurrence(array, value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    let result = [];
    if (array.length === 0) {
        return [];
    }
    let shallow = array.slice();
    let item = shallow.shift();
    result.push(callback(item));
    return result.concat(rMap(shallow, callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    let count = 0;
    for (let k in obj) {
        let value = obj[k];
        if (typeof value === 'object') {
            count += countKeysInObj(value, key);
        }
        if (k === key) {
            count++;
        }
    }
    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    let count = 0;
    for (let k in obj) {
        let val = obj[k];
        if (typeof val === 'object') {
            count += countValuesInObj(val, value);
        }
        if (val === value) {
            count++;
        }
    }
    return count;
};

// 24. Find all keys in an object (and nested oxbjects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    for (let k in obj) {
        let val = obj[k];
        if (typeof val === 'object') {
            val = replaceKeysInObj(val, oldKey, newKey);
        }
        if (k === oldKey) {
            obj[newKey] = obj[oldKey]
            delete obj[oldKey];
        }
    }
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return null;
    }
    if (n === 1) {
        return [0, 1];
    }
    let Fn1 = fibonacci(n - 1);
    let Fn2 = fibonacci(n - 2);
    if (Fn2 === null) {
        Fn2 = [0];
    }
    let Fn = Fn1[n - 1] + Fn2[n - 2];
    Fn1.push(Fn);
    return Fn1;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    let result = [];
    if (array.length === 0) {
        return result;
    }
    result.push(array.shift().toUpperCase());
    return result.concat(capitalizeWords(array));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    let result = [];
    if (array.length === 0) {
        return result;
    }
    let string = array.shift();
    let capStr = '';
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            capStr += string[i].toUpperCase();
        } else {
            capStr += string[i];
        }
    }
    result.push(capStr);
    return result.concat(capitalizeFirst(array));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    let sum = 0;
    for (let k in obj) {
        let val = obj[k];
        if (typeof val === 'object') {
            sum += nestedEvenSum(val);
        }
        if (typeof val === 'number' && val % 2 === 0) {
            sum += val;
        }
    }
    return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (Array.isArray(value)) {
            result = result.concat(flatten(value));
        } else {
            result.push(value);
        }
    }
    return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
    if (obj === undefined) {
        obj = {};
    }
    if (str.length === 0) {
        return obj;
    }
    let strArr = str.split('');
    let char = strArr.shift();
    if (char in obj) {
        obj[char]++;
    } else {
        obj[char] = 1;
    }
    return letterTally(strArr.join(''), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    if (list.length <= 1) {
        return list;
    }
    let shallow = list.slice();
    let result = [];
    let curr = shallow.shift();
    result.push(curr);
    let next = shallow[0];
    if (curr !== next) {
        return result.concat(compress(shallow));
    }
    while (curr === next) {
        curr = shallow.shift();
        next = shallow[0];
    }
    return result.concat(compress(shallow));
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    let result = [];
    if (array.length === 0) {
        return result;
    }
    let val = array.shift();
    val.push(aug);
    result.push(val);
    return result.concat(augmentElements(array, aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    let result = [];
    if (array.length === 0) {
        return result;
    }
    let curr = array.shift();
    result.push(curr);
    let next = array[0];
    if (curr === 0) {
        if (curr !== next) {
            return result.concat(minimizeZeroes(array));
        }
        while (curr === next) {
            curr = array.shift();
            next = array[0];
        }
    }
    return result.concat(minimizeZeroes(array));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    let result = [];
    if (array.length === 0) {
        return result;
    }
    let shallow = array.slice();
    let curr = Math.abs(shallow.shift());
    result.push(curr);
    let next = -1 * Math.abs(shallow.shift());
    if (isNaN(next)) {
        return result;
    }
    result.push(next);
    return result.concat(alternateSign(shallow));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    let result = [];
    if (str.length === 0) {
        return result;
    }
    const ref = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let strArr = str.split(' ');
    let word = strArr.shift();
    let num = parseInt(word);
    if (isNaN(num)) {
        result.push(word);
    } else {
        result.push(ref[num]);
    }
    return result.concat(numToText(strArr.join(' '))).join(' ');
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
