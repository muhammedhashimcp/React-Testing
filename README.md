# React Testing

Test types

Jest and React Testing library

## Test Driven Tdd

test watch mode

## Test Filtering

a

w

o

p

t

test.only

test.skip

## Gouping Test

describe("Greet",()=>{

})

describe("Greet",()=>{

describe("Nested",()=>{

})

})

## File Name Conventions

greet.test.tsx

greet.spec.tsx

__tests__

"__test"

greet-test.tsx

it

test() => it()

test.only()=> fit()

test.skip()=> xit()

## Code Coverage

A metric that can help you understand how much of your software code is tested
Statement coverage: how many of the statements in the software code have
been executed
● Branches coverage: how many of the branches of the control structures (if
statements for instance) have been executed
Function coverage: how many of the functions defined have been called and
finally
Line coverage: how many of lines of source code have been tested

usefull for CI/CD

```
"coverage": "yarn test --coverage"

"coverage": "yarn test --coverage --watchAll --collectCoverageFrom="src/components/**/*.{ts,tsx}""

"coverage": "yarn test --coverage --watchAll --collectCoverageFrom="src/components/***/*.{ts,tsx}"  --collectCoverageFrom="!src/components/***/*.{types,stories,constants,test,spec}.{ts,tsx}""
```

### Coverage Threshold

```
"jest": {
"coverageThreshold": {
"global":
"branches": 80,
"functions": 80,
"lines": 80,
"statements": -10
```

cov-report

index.html

## Assertions

#### expect(value)

visit jest.io using Matchers in documentation

jest-dom

https://github.com/react-library/jest-dom

## What to test?

Test component renders
Test component renders with props
Test component renders in different states (login,signup)
Test component reacts to events

## What not to test?

Implementation details

Third party code

code that is not importatnt from a user point of view

## RTL Queries

Every test we write generally involves the following basic steps

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test
   To render the component, we use the render method from RTL
   For assertion, we use expect passing in a value and combine it with a matcher
   function from jest or jest-dom

Queries are the methods that Testing Library provides to find elements on the page
To find a single element on the page, we have
getBy..
● queryBy..
findBy..
To find multiple elements on the page, we have
getAllBy..
● queryAllBy..
findAllBy..

The suffix can be one of Role, LabelText, PlaceHolder Text, Text, DisplayValue, AltText, Title and finally Testld

## getByRole

getByRole queries for elements with the given role
Role refers to the ARIA (Accessible Rich Internet Applications) role which provides
semantic meaning to content to ensure people using assistive technologies are
able to use them

src/application : testing library docs

### getByRole Options

name
The accessible name is for simple cases equal to

1. the label of a form element
2. the text content of a button or
3. the value of the aria-label attribute

name

level

hidden

selected

checked

pressed

## GetByLabelText

selector

## getByPlacehoderText

## getByText

## getByDisplayValue

## getByAltText

## getByTitle

## getByTestId

## Priority Order for Queries

"Your test should resemble how users interact with your code (component, page,
etc.) as much as possible"

1. getByRole
2. getByLabel Text
3. getByPlaceholder Text
4. getBy Text
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getBy Testld

# Query Multiple Elements

src/skills

### TextMatch

TextMatch -String

<div>Hello World</div>
screen.getBy Text('Hello World') // full string match
screen.getBy Text('llo Worl', {exact: false}) // substring match
screen.getBy Text('hello world', {exact: false}) // ignore case

TextMatch - regex

<div>Hello World</div>
screen.getBy Text(/World/) // substring match
screen.getBy Text(/world/i) // substring match, ignore case
screen.getByText(/^hello world$/i) // full string match, ignore case

TextMatch - custom function
(content?: string, element?: Element | null) => boolean

<div>Hello World</div>
screen.getByText((content) => content.startsWith('Hello'))

## QueryBy and queryAllBy

## findBy and findAllBy

findBy
Returns a Promise which resolves when an element is found which matches the
given query
The promise is rejected if no element is found or if more than one element is found
after a default timeout of 1000ms
findAllBy
Returns a promise which resolves to an array of elements when any elements are
found which match the given query
The promise is rejected if no elements are found after a default timeout of 1000ms

## Manual Queries

RTL Queries
getBy & getAllBy
• queryBy & queryAllBy
• findBy & findAllBy
Manual queries - you can use the regular querySelector DOM API to find elements
const {container} = render(`<MyComponent />`)
const foo = container.querySelector('[data-foo="bar"]")

## Debugging

screen.debug()

logRoles

import {logRoles}

logRoles(view.container)

## Testing Playground

# User Interations

fireEvent vs user-event
fireEvent is a method from RTL which is used to dispatch DOM events
user-event simulates full interactions, which may fire multiple events and do additional checks
along the way
For example, we can dispatch the change event on an input field using fireEvent
When a user types into a text box, the element has to be focused, and then keyboard and input
events are fired and the selection and value on the element are manipulated as they type
user-event allows you to describe a user interaction instead of a concrete event. It adds visibility
and intractability checks along the way and manipulates the DOM just like a user interaction in
the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or
type in a disabled text box

recommonded: user-event

Notes: CRA install  user-event need upgrade

## mouse interations

src/componets/counter

user.setup()

## keyboard interations

*utility Api()*

type()

clear()

selectOptions()

deselectOptions()

upload()

*Convenience API*

tab()

Clipboard APis

copy()

cut()

paste()

keyboard('foo') //translates to: f,o, o

## Test Custom React Hooks

src/hooks/use-counter

Act Utility from react-

## Mocking Functions

src/components/counter-two

## Mocking HTTP Requests

### MSW

# Static Analysis Testing

Process of verigying that your code meets certain expectation without actually running it

Ensure consistent style and formatting

Checl for common mistakes and possible bugs

Limit the complexity of code and

verify type consistency

Static testing analyses aspects such as readability, consistency error handling

type checking and alignment with best practices

Testing checks if your code works or not , whereas static analysis checks if it is written well or not

#### Static Analysis testing tools

### Typescript

### Eslint

npm i eslint-plugin-jest-dom -D

package.json

"lint": "eslint --ignore-path .gitignore .",

```
eslintConfig:{
"plugin" :jest/dom/recommended""
}
```

### Prettier

npm i prettier --exact -D


  "format": "eslint --ignore-path .gitignore --write"**/*.{ts,tsx,css,scss}""

npm i eslint-config-prettier -D

"eslint-config-prettier"


### Husky

Husky is a tool helps improve your commits and more

```
npx husky-init && npm 
```

pre-commmit

npm lnt && npm format


#### lint-staged

npm i lint-staged -D

package.json 

```

"lint-stagged":{
"*.{ts.tsx}":["eslint"],
"*.{ts,tsx,css,scss}":["prettier --write"]
}
```

pre-commit

```
npx lint-staged
```

pre-push

npx husky add .husky/pre-push 'npx test == --watchall=false'
