//Task1
function countDown(num) {
  var id = setInterval(function () {
    if (num <= 0) {
      console.log("DONE!");
      clearInterval(id);
    } else {
      console.log(num--);
    }
  }, 1000);
}
//countDown(5);

//Task2node
function isEven(num) {
  if (num % 2 == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
//isEven(5);

//Task3
function isOdd(num) {
  if (num % 2 != 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
//isOdd(3);

//task4

function isPrime(num) {
  var flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//isPrime(13);

//Task5

function numberFact(num, f) {
  f(num);
}
//numberFact(5, isEven);
//numberFact(5, isOdd);
//numberFact(5, isPrime);

//Task6
var v;
function find(arr, f) {
  for (idx in arr) {
    v = f(arr[idx]);
    if (v == true) {
      console.log(arr[idx]);
      break;
    }
  }
}
// find([8, 11, 4, 27], function (val) {
//   return val >= 10;
// }); // 11
// find([8, 11, 4, 27], function (val) {
//   return val === 5;
// });

//Task7
function findIndex(arr, f) {
  for (idx in arr) {
    v = f(arr[idx]);
    if (v == true) {
      console.log(idx);
      break;
    }
  }
}
// findIndex([8, 11, 4, 27], function (val) {
//   return val >= 10;
// });

//Task8
function specialMultiply(num1, num2) {
  if (num1 && num2) {
    console.log(num1 * num2);
  } else {
    var fun = function (n) {
      let sum = num1 * n;
      console.log(sum);
    };
    return fun;
  }
}

//specialMultiply(2, 2);
//specialMultiply(2)(2);

//Task10

const printFirstAndLast = (arr) => {
  arr.forEach((element) => {
    console.log(element.slice(0, 1) + element.slice(-1));
  });
};
//printFirstAndLast(["asd", "wed", "eds"]);

//Task11 &Task16
function addKeyAndValue(arr_Obj, key, value) {
  arr_Obj.forEach((element) => {
    element[key] = value;
  });
  return arr_Obj;
}
// let a = addKeyAndValue(
//   [{ name: "Elie" }, { name: "Tim" }, { name: "Elie" }],
//   "isInstructor",
//   true
// );
// a.forEach((i) => console.log(i));

//Task12
function valTimesIndex(arr) {
  for (idx in arr) {
    arr[idx] = idx * arr[idx];
  }
  return arr;
}
//console.log(valTimesIndex([1, 2, 3]));

//Task13
const extractKey = (arr, key) => {
  arr.forEach((element) => {
    console.log(element[key]);
  });
};
// extractKey([{name: "Elie", isInstructor:true},{name: "Tim",
// isInstructor:true},{name: "Matt", isInstructor:true}], "name")

//Task14
function filterLetters(arr) {
  var res = [];
  var ob = {};
  var uniqueArray = Array.from(new Set(arr));
  for (idx in uniqueArray) {
    ob[uniqueArray[idx]] = arr.filter((x) => x === uniqueArray[idx]).length;
  }
  res.push(ob);
  return res;
}

//Task15
function filterKey(arr, key) {
  var res = [];

  arr.forEach((element) => {
    if (element.hasOwnProperty(key)) {
      if (element[key] == true) {
        res.push(element);
      }
    }
  });
  return res;
}

//Task17

let users = [
  {
    username: "larry",
    email: "larry@foo.com",
    yearsExperience: 22.1,
    favoriteLanguages: ["Perl", "Java", "C++"],
    favoriteEditor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
      city: "San Francisco",
      state: "CA",
    },
  },
  {
    username: "jane",
    email: "jane@test.com",
    yearsExperience: 33.9,
    favoriteLanguages: ["Haskell", "Clojure", "PHP"],
    favoriteEditor: "Emacs",
    hobbies: ["Swimming", "Biking", "Hiking"],
    hometown: {
      city: "New York",
      state: "NY",
    },
  },
  {
    username: "sam",
    email: "sam@test.com",
    yearsExperience: 8.2,
    favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
    favoriteEditor: "Atom",
    hobbies: ["Golf", "Cooking", "Archery"],
    hometown: {
      city: "Fargo",
      state: "SD",
    },
  },
  {
    username: "anne",
    email: "anne@test.com",
    yearsExperience: 4,
    favoriteLanguages: ["C#", "C++", "F#"],
    favoriteEditor: "Visual Studio Code",
    hobbies: ["Tennis", "Biking", "Archery"],
    hometown: {
      city: "Albany",
      state: "NY",
    },
  },
  {
    username: "david",
    email: "david@test.com",
    yearsExperience: 12.5,
    favoriteLanguages: ["JavaScript", "C#", "Swift"],
    favoriteEditor: "VS Code",
    hobbies: ["Volunteering", "Biking", "Coding"],
    hometown: {
      city: "Los Angeles",
      state: "CA",
    },
  },
];
//Task17a
var printEmails = (arr, key) => {
  arr.forEach((element) => {
    console.log(element[key]);
  });
};
//Task17b
var printHobbies = (arr, key) => {
  arr.forEach((element) => {
    console.log(element[key]);
  });
};

//Task17c
function findHometownByState(arr, key) {
  for (const iterator of arr) {
    if (iterator.hometown.state === key) {
      return iterator;
    }
  }
}
//Task17d
function allLanguages(arr) {
  var uniqueArray = [];
  for (var idx in arr) {
    uniqueArray[idx] = Array.from(new Set(arr[idx].favoriteLanguages));
  }
  return uniqueArray.flat();
}

//Task17e
function hasFavoriteEditor() {
  var re = [];
  users.forEach((element) => {
    if (element.favoriteEditor) {
      re.push(true);
    }
  });
  return re;
}
//Task17f
function findByUsername(str) {
  users.forEach((element) => {
    if (element.username === str) {
      console.log(element);
    }
  });
}

//Task18
function vowelCount(str) {
  var ob = {};
  var arr = str.split("");
  var v = ["a", "e", "i", "o", "u"];

  for (idx in v) {
    ob[v[idx]] = arr.filter((x) => x === v[idx]).length;
  }
  return ob;
}

//Task19
function removeVowels(str) {
  var res = [];
  var arr = str.split("");
  for (const ch of arr) {
    if (!(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u")) {
      res.push(ch);
    }
  }

  return res;
}
