# JavaScript Type Coercion Bug

This repository demonstrates a common but easily overlooked bug in JavaScript related to type coercion during arithmetic operations.  The `add` function is intended to add two numbers, but due to JavaScript's loose typing and automatic type coercion, it produces unexpected results when one of the inputs is a string.

## Bug Description

JavaScript will implicitly convert the number to a string if you try to add a number and a string. This will result in string concatenation rather than numerical addition.  The example shows how this leads to the incorrect result '22' instead of the expected 4.

## Solution

The solution involves explicit type checking and conversion to ensure both operands are numbers before performing the addition.  This prevents unintended type coercion and produces the correct numerical result.  Refer to `bugSolution.js` for the corrected code.
