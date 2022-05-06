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
