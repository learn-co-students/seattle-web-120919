# React: Components and props


## SWBATs
# Key Questions
* What is a lifecycle method? What are they methods _of_?
* What calls lifecycle methods? Do I need to call lifecycle methods?
* Can I have state or lifecycle methods in a functional component?
* What lifecycle method should we `fetch` in?
* Do I need to memorize all of these?

[Visual](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
[React Docs](https://reactjs.org/docs/react-component.html)


## Lifting up state 
* Why is it important to have a single source of truth for data in a react state?
* Will having all my data in a single place sometimes make my state updates harder?
* What are the easiest ways to create, update, and delete data in an array of objects without directly mutating state?

# Also, let's talk about container vs. presentational components
* What is a container component?
* What is a presentational component?
* What is the difference?
* Do either of them lend themselves better to being functional?

* ...




## Questions
- state.persists, react uses this to keep state around while react implements and attached new state to DOM
- previousState;
- Weird when you are passing down functions through props
- Calling the method, when you render onChange={this.onChange};
- 