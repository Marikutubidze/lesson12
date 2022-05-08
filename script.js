// პირველი სავარჯიშო

let user1 = {
  firstName: "giorgi",
  lastName: "smith",
  age: 25,
  studentStatus: "active",
};

console.log(user1.studentStatus);

// მეორე სავარჯიშო

let students = ["Maka", "Giorgi", "Luka", "Mari", "Tamari"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

let i = 0;
while (i < students.length) {
  console.log(students[i]);
  i++;
}

// მესამე სავარჯიშო

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i]);
  }
}

// მეოთხე სავარჯიშო

let user = {
  name: "giorgi",
  age: 20,
  studentStatus: "active",
};

if (user.age < 18 && user.studentStatus === "active") {
  console.log("hello");
} else if (user.name === "giorgi") {
  console.log("hello, Giorgi!");
} else if (user.studentStatus === "active" || user.age < 25) {
  console.log("hello world");
} else {
  console.log("Error");
}

// მეხუთე სავარჯიშო

let array1 = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];

for (let i = 0; i < array1.length; i++) {
  if (typeof array1[i] === "string") {
    console.log(array1[i]);
  }
}

// მეექვსე სავარჯიშო

let array2 = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < array2[i].length; j++) {
    if (array2[i][j] > 0) {
      console.log(array2[i][j]);
    }
  }
}

// function logPositive(array) {
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (typeof element === "number") {
//     if (element > 0) {
//         console.log(element);
//     }
//     } else if (Array.isArray(element)) {
//     logPositive(element);
//     }
// }
// }

// მეშვიდე სავარჯიშო

let array3 = [32, 10, "hello", null, "hello2", 50];

for (let i = 0; i < array3.length; i++) {
  if (typeof array3[i] === "number" && array3[i] % 5 === 0) {
    console.log(array3[i]);
  }
}

// ფუნქციები
// პირველი დავალება

function numPositive(...nums) {
  let sum = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i]>0) {
      sum += nums[i];
    }
  }    
  return sum;
}

console.log(numPositive(2, -9, 5, 11, -30, 100, -8, -11, -4, -6, 8))

// მეორე დავალება

function numSum(...nums) {
  let sum=0;
  for (let i=0; i<nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

console.log(numSum(10, 50, 6, 7, 8, 11, 6, 3, 9))

// მესამე დავალება

let user5 = {
  firstName: 'giorgi',
  lastName: 'saakadze',
  age: 32,
  isLoggedIn: true
}

function userInfo(obj) {
  if (obj.isLoggedIn === true) {
    return obj.firstName + ' ' + obj.lastName;
  } return false
}

console.log(userInfo(user5))

// მეოთხე დავალება

// პირველი ამოხსნა
function maxNum(...nums) {
  let max = nums [0]
  for (let i=0; i<nums.length; i++) {
    if (nums[i] > max) {
      max = nums [i]
    }
  } return max;
}

console.log(maxNum(1,4,5,6,7,9,2,0,5,6,10,2))

// // მეორე ამოხსნა

function maxNums(...nums) {
  return Math.max(...nums)
}

console.log(maxNums(1, 4, 5, 6, 7, 9, 2, 0, 5, 6, 10, 15, 2));
