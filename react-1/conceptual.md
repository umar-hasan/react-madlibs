### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a frontend framework used to separate web applications into different components.

- What is Babel?
  - JavaScript Compiler used to compile ES2015 JavaScript into an older version of JavaScript. 

- What is JSX?
  - XML-like syntax that expands ES2015 JavaScript that React depends on for rendering components.

- How is a Component created in React?
  - It is made up either a function or class in JSX.

- What are some difference between state and props?
  - States are used if something needs to be changed within a component.
  - Props are used if something needs to be constant throughout a component and will be passed to one.

- What does "downward data flow" refer to in React?
  - States can only be passed down to child components, never the other way around.

- What is a controlled component?
  - An input from a form uses states to handle the input.

- What is an uncontrolled component?
  - Using refs to handle input values without any states or props.

- What is the purpose of the `key` prop when rendering a list of components?
  - The `key` prop uniquely identifies a component within a list of similar component elements.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - Indices may change as the array changes, which is why it is better to have a much more unique identifier.

- Describe `useEffect`.  What use cases is it used for in React components?
  - `useEffect` is used for handling certain functionality when a component mounts or unmounts. It can be used if the component shouldn't be rerendered or relies on a dependency value that cann change within a component.

- What does `useRef` do?  Does a change to a ref value cause a rerender of a component?
  - `useRef` sets a reference value of any type within a particular component, like a local variable. It does not rerender components.

- When would you use a ref? When wouldn't you use one?
  - Refs can be used for setting up timers or accessing HTML elements. They shouldn't be used for changing values *within* an HTML element.

- What is a custom hook in React? When would you want to write one?
  - Custom hooks are used for any resusable part of React code across multiple components. They can also be used to add abstraction to components as well.
