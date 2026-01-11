const isTrue = true == [];
const isFalse = true == ![];
console.log("Hello World!!")
console.log(isTrue)
console.log(isFalse);
console.log(isTrue+isFalse);



/*const numbers = [33,8,2];
numbers.sort()
console.log(numbers[1])

console.log(String.raw`Hello World\nworld`)

console.log(typeof typeof 1)

console.log(018 - 015)

console.log("This is a string." instanceof String);


/*function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo
`${person} is ${age} years old`;*/


const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
// a[c] = 456;

console.log(a[c])
// console.log(a[b]);


const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

const num_new = parseInt('7*6', 10);
console.log(num_new)

console.log(NaN==NaN);

const user = {
    name_user: "Kajal",
    age: 25,
    city: "Surat",
    profession: "Developer"
};

const { name_user, age, city } = user;

console.log(name_user); 
console.log(age);  

