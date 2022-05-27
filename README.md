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
class Welcome extend React.Component {
  render(){
    return<h1>Hello, {props.name}</h2>
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