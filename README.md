# [ReactJS](https://reactjs.org/docs/hello-world.html)

<br>

React is a frontend library introduced by facebook in 2013. It depends on some tools like babel, and webpack to transpile it's code to regular web standard HTML, CSS, and vanilar javascript.

### [Virtual DOM](https://www.codecademy.com/article/react-virtual-dom)


React manipulates DOM (Document Object Manipulation) but this manipulation is very slow because most JavaScript frameworks update the DOM much more than they have to. This issue is solved by Virtual DOM. Virtual DOM is a representation of of the DOM. React keeps track of the changes in virtual DOM, and updates the real DOM only when needed. Making it really fast. The Virtual DOM object has the same properties as the real DOM object

#### How it helps

When you render jsx, every single element in the Virtual DOM is updated, but the Virtual DOM update is very fast.
<br>
Once the Virtual DOM is updated, React compares the Virtual DOM with the Virtual DOM snapshot that was taken right before the update. 
<br>
By comparing the new Virtual DOM and the pre-updated Virtual DOM, React figure out the Virtual DOM object that has changed. This process is called _diffing_.
<br>
Once react knows the Virtual DOM object that has changed, React then updates those object. 
<br>
In summary, these what happen when you try to update the DOM is React.

- The entire Virtual DOM object gets updated
- React compares the updated Virtual DOM with the pre-updated Virtual DOM snapshot, and figure out the Virtual DOM obect that has changed.
- The changed object only get updated on the real DOM.
- The change on the real DOM cause the screen to change.

### [JSX](https://reactjs.org/docs/introducing-jsx.html)

JSX was introduced along side React by Facebook in 2013. JSX is a dialet or syntax extension of JavaScript that allow us to write CSS and HTML inside JavaScript. It is important because it is the fundamental of React ecosystem, and it speed up and improve our development experience.

```
const element = <h1>Hello, World!</h1>

```

### [Component](https://reactjs.org/docs/components-and-props.html)

Component is a piece of code with specific purpose that you can reuse to compose and build bigger and complex application.

<br>

##### Types of component
> Class Component
Class component uses ES6 syntax with some other React tools like **state**, **props**, **Lifecycle method**, and **render()** method

```
class Welcome extends React.Component {
  render(){
    return<h1>Hello, {this.props.name}</h2>
  }
}
```

> Functional Component
Functional component is just a function that returns jsx.

```
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}
```

> Stateless functional component is the one that can receive data and render it, but does not manage or track changes to that data.

> [State and Props](https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/)

State and Props are the two ways React can update component or share data between components

Example with props

```
Function welcome(props){
	Return<h1>Hello, {props.name}</h1>
}
```

Example with state

```
import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {sleeping: true};
  }

  render(){
    return(
      <div>
        <p>{`The Cat is ${this.state.sleeping ? "sleeping" : "eat"}`}</p>
        <button onClick={() => this.setState({sleeping : false})}>
          Wrap Me
        </button>
      </div>
    )
  }
}

```

The difference between **state** and **props** is that props are set by the parent and passed to the child component and they are fixed through out the component. For the data that is going to change, we have to use state.

### Web Storage API

These mechanisms are **Local Storage** and **Session Storage**.
- **Session Storage**: allows us to store data that persists throughout the session. That is as long as the current browser tab remains active.
- **Local Storage**: allows us to store data that persists across the same origin even if the browser is closed, the data will not be erased and shared between all windows with the same origin.

<br>

Same-origin here implies – same domain (example.com); same protocol (either HTTP or HTTPS) and same port (for instance, port 80 which handles HTTP request exclusively). The URL path can be different.

### The React Lifecycle methods
In React, these phases are mainly three.
1. **Mounting**: In this phase React components mount (create or insert) DOM
2. **Updating**: In this phase React components get updated. React components get updated when there is/are **state** or **prop** changes, hence re-render the component
3. **Unmounting**: In this phase React components unmount or remove the DOM which marks the end of the lifecycle. 

<br>

The React lifecycle methods are used to monitor and manipulate what happens within the component. These includes
1. **Render()**: It is responsible for rendering React elements in the virtual DOM and it is called during mounting and updating phase.
2. **ComponentDidMount()**: It is called immedeately after the component is rendered.

### Pure function vs. impure function
- **Impure function**: is a function that contains one or more side effects. Example of side effect includes making a network request, subscriptions, setting up a timer, setting up event listner etc.
```
const fruits = ["Mango", "Orange"];
function myFruit(newFruit){
  fruits.push(newFruit);
  return fruits;
};
```
You can see that the function myFruit depends on external code **fruits** to accomplish its duty.

- **Pure Function**: is a function that does not conatin any side effect.
```
function myFruit(newFruit){
  const fruits = ["Mango", "Orange"]; 
  fruits[fruits.length] = newFruit;
  return fruits;
}
```
You can see that the function myFruit does not depends on any external code to accomplish its duty.


