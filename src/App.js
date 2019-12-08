import React, {Component} from 'react'; // react is some type of JavaScript thing
// Component is a named inport
// React is the default export from this file
// I can also grab component which says componet must be some named export from this file
// we dont have access to anything in any other file unless we import it

// we can not give access to anything inside of here unless we export it
//Component is a property
import './App.css';
import Cats from './components/Cats'
// is the main component that we get
class App extends Component { // JS class inharidence pattern that is given to us to
  //.. basiclly inharite from
  // crete this object this new class
  // I have inharite all of its properties in terms of its functionality and all of the
  //.. things that I can do
  render() {
    //console.log("React: ",React)// react is a JavaScript

    return (
      <div className="App">
        <Cats />
        {/*console.log("Hello from our main App div")*/}
      </div>
    );
  }
}

export default App;
// export just one thing and it is going to be this one thing App. App is coming out of this file
// export what you want the rest of the world to see
