# React - Lifecycle Methods

## componentDidMount()
- Fires when component gets first mounted in DOM
- Initialization that requires DOM should go here.
- Ex.) fetching data


## componentDidUpdate()
- Fires after the state values or prop values change
- Ex.) when a user types in input field, hit delete button
- This method has two arguments - prevProps, prevState


## componentWillUnmount()
- Fires when component goes away
- Ex.) clear localstorage, timer

## Class based component vs Stateless component
- lifecycle method is avaiable class based component only. 
- Stateless component is so fast because don't have to manage any state values and lifecycle methods.


