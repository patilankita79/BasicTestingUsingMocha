# Basic Node JS App Testing Using Mocha

Adding automatic testing in node js applications using Mocha framework. Simple two functions are demonstrated to get started with testing using mocha framework. One function is to add numbers and other function squares a number. Test cases are written which performs testing to check whether the function works as expected or not. it() function is used.

<hr>

Install mocha

```
npm install mocha --save-dev
```

<br>
I have written test cases in a files which ends with test.js. So In package.json following changes are made.
In package.json, under "scripts", write "test": "mocha **/*test.js" 

```
  "scripts": {
    "test": "mocha **/*.test.js"
  }
```
<hr>

### Running tests

```
npm test
```

<hr>

### Test cases to check addition of two numbers, sqaure of a number.

##### Passing test case 
<img src="https://github.com/patilankita79/BasicTestingUsingMocha/blob/master/Screenshots/AddTestcaseSuccess.png" />
<br>

##### Failing test case
<img src="https://github.com/patilankita79/BasicTestingUsingMocha/blob/master/Screenshots/AddTestCaseFailed.png" />
<br>
<img src="https://github.com/patilankita79/BasicTestingUsingMocha/blob/master/Screenshots/AddSqaureTestCases.png" />

