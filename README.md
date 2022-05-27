# ReactJS

<br>

React is a frontend library introduced by facebook in 2013. It depends on some tools like babel, and webpack to transpile it's code to regular web standard HTML, CSS, and vanilar javascript.

### [Virtual DOM](https://www.codecademy.com/article/react-virtual-dom)


React manipulates DOM (Document Object Manipulation) but this manipulation is very slow because most JavaScript frameworks update the DOM much more than they have to. This issue is solved by Virtual DOM. Virtual DOM is a representation of of the DOM. React keeps track of the changes in virtual DOM, and updates the real DOM only when needed. Making it really fast. The Virtual DOM object has the same properties as the real DOM object

#### How it helps

When you render jsx, every single element in the Virtual DOM is updated, but the Virtual DOM update is very fast.
<br>
Once the Virtual DOM is updated, React compares the Virtual DOM with the Virtual DOM snapshot that was taken right before the update. 
<br>
By comparing the new Virtual DOM and the pre-updated Virtual DOM, React figure out the Virtual DOM object that has changed. This process is called <h5>diffing<h5>.
<br>
Once react knows the Virtual DOM object that has changed, React then updates those object. 
<br>
In summary, these what happen when you try to update the DOM is React.

- The entire Virtual DOM object gets updated
- React compares the updated Virtual DOM with the pre-updated Virtual DOM snapshot, and figure out the Virtual DOM obect that has changed.
- The changed object only get updated on the real DOM.
- The change on the real DOM cause the screen to change.