//Task1
var raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
//var obj = raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"]);
//console.log(obj);
//Task2
function createAnimal(species, verb, noise) {
  var ob = {};
  ob["species"] = species;
  ob[verb] = () => {
    return noise;
  };
  return ob;
}
// let d = createAnimal("dog", "bark", "Woooof!");
// console.log(d);
// console.log(d.bark());
//Task3
// let extend = (ar1, ar2) => {
//   return [...ar1,...ar2]= res;
// };
//  console.log(extend([1, 2], [3, 4]));
let addKeyValue = (ob, key, val) => {
  ({ ...re } = ob);
  re[key] = val;
  return re;
};
// console.log(addKeyValue({ name: "dhanesh", cms: "021- 19-0024" }, "dpt", "Cs"));

const removeKey = (obj, key) => {
  let { [key]: _, ...newObj } = obj;
  return newObj;
};
// let obj = {fname:'abc',lname:'def',oname:'ghi'}
// console.log(removeKey(obj,'fname'))

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
// let obj1 = {fname:'abc',lname:'def'}
// let obj2 = {fnamee:'abcc',lnamee:'deff'}
// let obj3 = combine(obj1,obj2)
// console.log(obj3)

//part-5
const update = (obj, key, val) => {
  return { ...obj, [key]: val };
};
// let obj = {fname:'abc',lname:'def',oname:'ghi'}
// console.log(update(obj,'fname','aaaa'))

//Task-4
function delay(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
  return promise;
}
//delay(3000).then(() => console.log('runs after 3 seconds'));

//Task-5
async function loadJson(url) {
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    return "fetch failed" + err;
  }
}
//loadJson('no-such-user.json').catch(alert); // Error: 404

//Task-6
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}
async function loadJson(url) {
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  } catch (err) {
    return "fetch failed" + err;
  }
}

// Ask for a user name until github returns a valid user
// function demoGithubUser() {
//     let name = prompt("Enter a name?", "iliakan");
//     return loadJson(`https://api.github.com/users/${name}`).then(user => {
//         alert(`Full name: ${user.name}.`);
//         return user;
//     }).catch(err => {
//         if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//     } else {
//         throw err;
//     }
//     });
// }

async function demoGithubUser() {
  try {
    let name = "";
    let res = "";
    do {
      name = prompt("Enter a name?", "iliakan");
      res = await loadJson(`https://api.github.com/users/${name}`);

      alert(`Full name: ${res.name}.`);
    } while (res.status != 200);
  } catch (err) {
    return "fetch failed" + err;
  }
}
demoGithubUser();

//Task-7
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}
function f() {
  return wait().then((res) => console.log(res));
}
//console.log(f());

//Task-9
function logOne() {
  setTimeout(function () {
    console.log("one!");
  }, Math.random() * 1000);
}
function logTwo() {
  setTimeout(function () {
    console.log("two!");
  }, Math.random() * 1000);
}
function inOrder(a, b) {
  Promise.resolve(a()).then(b());
}
//inOrder(logOne, logTwo);
