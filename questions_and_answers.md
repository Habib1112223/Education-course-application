<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
 In many programming languages like Python, JavaScript, and Java, curly braces are used to define blocks of code. Code enclosed within curly braces is treated as a single unit or scope.

<i>Write your explanation here </i>
`{}` :- The blocks of code are used in many programming language like python, javaScript and java.The curly braces is treated as a single unit or scope.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:
 C

<i>Write your explanation here</i>

`"12"` :- The function sum (a,b) is meant to sum two values a and b. However, you call sum (1,"2"),you are passing number (1) and a string ("2") as arguments. So the result of sum (1, "2") will be the string "12".

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A</b></summary>
<p>

#### Answer: 
A

<i>Write your explanation here</i>

explanation: food is an array, info is an object. It sets the favorite Food property of the info object to the first element of the food array, That is "🍕". However, a new value "🍝" to the favoriteFood property of the info object. This change does not affect the food array.


</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
 B
<i>Write your explanation here</i>
 Explanation:- A function sayHi, that takes one parameter name and returns a greeting string. when you call sayHi() without passing an argument, it will result in an error because the function expects a name argument to be provided.To fix this issue and avoid an error, you should provide a value for the name parameter when calling the sayHi function

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?
C


<i>Write your explanation here</i>
Explanation:- A count variable is to 0 and defines an array nums containing numbers. It uses forEach method to iterate over the elements of the nums array and increments the count variable by 1 for each element that is truthy (i.e., not equal to 0). so, for the other elements (1,2,3), the count variable will be incremented.The final value of count will be 3.

</p>
</details>
