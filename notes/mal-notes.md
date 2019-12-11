call back gives us functionality around something ; it causes the user to do something

Class -
  - I can have state using a constructor

  - render method

  - I can have lifecycle methods


---------------------------------------------------------------------------------------
Checkout App Component:
App is the right place to put our click handler because:
  it is managing the state of cats upon which all of our other components are relying and
  that is a good indecator that we need the functionality to live in App.js.
  So we are going to be changing the state of cats.
  Who owns the state of cats?
  App does! and so App also needs to own the methods that allow us to make those changes.
  ---------------------------------------------------------------------------------------
In a class component and I am recieving props those are assigned as properties of the class under this
basiclly under each instance of your class component their is going to be a props object as one of its properties
----------------------------------------
Q: How can I make a change that react will say ohhhh i need to fire all of these stuff and rerender?
All that I have to do is make a change to state
