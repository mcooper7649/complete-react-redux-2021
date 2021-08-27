## Asynchronous setState
---

1. We made a demo of a but that will update state by 1 when clicked.
2. The way React handle this is by updating the dom.
3. React will sometimes do multiple state changes via batch to update the dom quickly
   1. This had no effect on our demo but in real world instances we can have issues.
   2. The handleClick function is an asynchronous action, while it looked instant, it has a small delay
   3. If we were to console log the state it would log it BEFORE the handleclick because of the asyncronicity!
   4. IF we add a callback function that were to console.log the state it would now show the correct value

5. Best Practice in react is to use prevState, prevProps due to the batching mechanics of React.

old handleclick
```
handleClick = () => {
    this.setState({
      meaningOfLife: this.state.meaningOfLife + 1
    })
  }
```

new handlclick
```
handleClick = () => {
    this.setState((prevState,prevProps)=> {
        return {
            meaningOfLife: prevState.meaningOfLife + 1
        }, () => console.log(this.state.meaningOfLife))
    }
  }
```

6. In our new handleClick, we are using prevState, instead of this.state when handling the click. this is best practice and prevents batching issues



7. Lets create our props next
   1. using the prop 'increment' and set it to be 1


```
  handleClick = () => {
    this.setState((prevState, prevProps)=> {
        return {
            meaningOfLife: prevState.meaningOfLife + prevProps.increment }
        }, () => console.log(this.state.meaningOfLife))
    }
  
```

8. If you need access to props inside our constructor, we need to pass it inside super ``super(props)``

9. You need to ask yourself this when creating an event. Do I need to access the state after the change? 
   1.  If so, we should pass that function as a callback of our setState


## LifeCycle Methods
---

This project will have two buttons.

1. Toggle Lifecycles
2. Add Text

3. State will contain
   1. showChild: true,
   2. text: ''


4. We then have a button with an onClick with => function
   1. this will setState with another =>
   2. showchild: !state.showChild
   3. using the ! we can toggle to the opposite value

5. For our 2nd butotn we have another onlcick => function
    1. this will setState with => again
    2. text: state.text + "_hello" this will add hellow to the current text 

6. Underneath our btutons we have jsx code that uses ternirary
   1. if state.showChild ? 
   2. lifecycles component is rendered with teh text props passed this.state.text
   3. else 'null'


## React LifeCycle Emthods - Mounting
---

1. The Mounting Phase
   1. The phase when the component is put on the DOM for the first time
   2. super allows our class component to access our Lifecycle Methods
   3. state is also added inside our constructor method
   4. our render method ran 
   5. THEN our component did mount lifecycle is fired
      1. so final order goes
         1. constructor
         2. render
         3. componentDidMount




