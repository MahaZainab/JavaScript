# JavaScript Events Tutorial

Events are a core part of JavaScript and web development, enabling interactivity on web pages. They allow JavaScript to respond to user actions like clicks, keyboard inputs, mouse movements, and more.

## Table of Contents

1. [Introduction to Events](#introduction-to-events)
2. [Event Types](#event-types)
3. [Event Listeners](#event-listeners)
4. [Event Handling](#event-handling)
5. [Event Bubbling and Capturing](#event-bubbling-and-capturing)
6. [Event Delegation](#event-delegation)
7. [Preventing Default Actions](#preventing-default-actions)
8. [Event Object Properties and Methods](#event-object-properties-and-methods)
9. [Custom Events](#custom-events)
10. [Practical Examples](#practical-examples)

## 1. Introduction to Events

Events in JavaScript are actions or occurrences that happen in the browser, which the JavaScript code can respond to. They can be user-generated (e.g., mouse clicks, key presses) or system-generated (e.g., page load, timeout).

## 2. Event Types

Some common event types include:

- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`
- **Keyboard Events**: `keydown`, `keypress`, `keyup`
- **Form Events**: `submit`, `change`, `focus`, `blur`
- **Window Events**: `load`, `resize`, `scroll`

## 3. Event Listeners

Event listeners are functions that wait for an event to occur and then execute a block of code. You can add event listeners to HTML elements using `addEventListener`.

### Syntax

```javascript
element.addEventListener(event, function, useCapture);
