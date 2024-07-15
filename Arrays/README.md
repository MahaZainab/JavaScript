# JavaScript Array Operations

This repository demonstrates various operations on arrays in JavaScript, showcasing how arrays can store collections of different data types and perform numerous manipulative operations.

## Overview

Arrays in JavaScript are used to store multiple values in a single variable. This example includes operations such as adding and removing elements, updating specific indices, and iterating over elements.

## Features

- **Array Declaration and Type Checking**: Demonstrates how to declare arrays and check their type.
- **Mutable Operations**: Shows how arrays are mutable, allowing modifications directly on the same memory space.
- **Looping Constructs**: Explores different ways to iterate over arrays using traditional `for` loops, `for...of`, and `for...in` loops.
- **Array Manipulations**: Covers a variety of array methods like `push`, `pop`, `slice`, and dynamic calculations within loops.

## Usage

To run any of these examples, simply copy the JavaScript code into a .js file and run it using a JavaScript environment like Node.js or any browser console.

## Code Example

Here is a brief overview of some operations included in the full script:

```javascript
// Declaring and logging array elements
let heros = ["Maha", "Zainab", "IK", "QA", "AI"];
console.log(heros);

// Modifying an array directly
let marks = [56, 84, 21, 56, 34, 84];
marks[2] = 66; // Update the third element
console.log(marks);

// Using loops to iterate through the array
for (let mark of marks) {
    console.log(mark); // Logs each mark
}
