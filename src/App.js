// App is our main parent component
import React, {Component} from 'react'; // react is some type of JavaScript thing
// Component is a named inport
// React is the default export from this file
// I can also grab component which says componet must be some named export from this file
// we dont have access to anything in any other file unless we import it

// we can not give access to anything inside of here unless we export it
//Component is a property
import './App.css';
import Cats from './components/Cats'
import DisplayCat from './components/DisplayCat'
import cats from './cats-data'
// is the main component that we get
class App extends Component { // JS class inharidence pattern that is given to us to
  constructor() {
    super()
    this.state = {
      cats: []
    }
  }

  //mocking a fetch request
  componentDidMount(){
    // fetch("www.mycats.com")
    //   .then(r => r.json())
    //   .then(cats => this.setState({cats: cats}))
    this.setState({
      cats: cats
    })
  }
  //.. basiclly inharite from
  // crete this object this new class
  // I have inharite all of its properties in terms of its functionality and all of the
  //.. things that I can do
  render() {
    //console.log("React: ",React)// react is a JavaScript
    console.log("Rendering App")
    // ^^^ How many times are we going go see Rendering App in console log?
    // 2 because we initally define the state as an empty array then as soon as
    //.. the component mountes we fire this fake fetch then we set our state to the actual array.
    //.. so you are going to handle that initial render.
    //.. IF YOU HAVE componentDidMountS your components are going to render and they are gonig to rerender
    // Once the state changes that will trigger a new render

    // THE REASON IT IS A DOUBLE RENDER IS BECAUSE WE ARE CHANGING THE STATE!
    return (
      <div className="App">
        <h1>Welcome to Cat Tinder</h1>
        {/* {} is a jsx curly bracket - run what is inside of here using JavaScript
        red curly brackets . this is jsx telling us to run on JavaScript */}
        {/*The following is one way to handle that initial load  - i know when this thing loads it is going to be an empty array*/}
        { this.state.cats.length == 0 ?
            "LOADING..." :
          <div>
          <div
            className="LikedCats">Liked</div>
            <DisplayCat
            cat={this.state.cats[0]} />
            <Cats cats={this.state.cats}/>
            <div className="DislidedCats">Disliked</div>
          </div>
         }
         {/*console.log("Hello from our main App div")*/}
      </div>
    );
  }
}

export default App;
// export just one thing and it is going to be this one thing App. App is coming out of this file
// export what you want the rest of the world to see
