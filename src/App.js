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
import CenterContainer from './components/CenterContainer'
import DisplayCat from './components/DisplayCat'
import LikedCats from './components/LikedCats'
import DislikedCats from './components/DislikedCats'
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

  // Q: The two ways I can bind the two handle click events correctly:
  // The reason why i am already bound here is tha t arrow functions inharite ***this*** from surrounding context on definition
  //.. which means that if I am in the body of this arrow function I am binding approperatly
  handleLikeClick = (event) => {
    //console.log(event.target)// --> event.target is the thing that I clicked on
    // all I have to do is change the status of the paticular cat from "undecided" to "liked"
    // what information do I need here? the id of the cat.
    // What do I need to do with the cat id?
    // find the cat then use the spread opperator to and use indexOf to insert the cat
    //.. I can also map and just put a conditional in my map that I am looking for a piticular cat and I am going to change it when I find it
    //.. and then change the whole array
    console.log(event.target.className)
    const newStatus = event.target.className === "like-button" ? "liked" : "disliked"
    console.log("event.target.id is", event.target.id)
    const cats = this.state.cats.map(cat => {
      console.log("cat id is",cat.id)
      console.log(cat.id == event.target.id)
      if (cat.id == event.target.id) {
        // const because I am just only changing a property
        const newCat = Object.assign({}, cat) // we are going to produce a copy of cat
        newCat.status = newStatus
        return newCat
        // I would only need to change it if that paticular cat
      } else {
        // I would need the return value because map is going to produce
        //.. a copy of the original array
        return cat

      }
    })
    this.setState({
      cats: cats
    }, ()=>console.log(this.state.cats))
    //}, ()=> console.log(this.state.cats.find(cat => cat.id === event.target.id)))// -> callback functions are optional. Set state takes a second argument of a callback will be invocked as soon as the state is actually changed
    // I want to console log this paticular cat I want to see if they have changed from undecided to liked
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
        {/* {} is a jsx curly bracket - run what is inside of here using JavaScript
        red curly brackets . this is jsx telling us to run on JavaScript */}
        {/*The following is one way to handle that initial load  - i know when this thing loads it is going to be an empty array*/}
        <LikedCats cats={this.state.cats.filter(cat => cat.status === "liked")}/>
        <CenterContainer
          handleLikeClick={this.handleLikeClick}
          cats={this.state.cats.filter(cat => cat.status === "undecided")}/>
        <DislikedCats cats={this.state.cats.filter(cat => cat.status === "disliked")}/>
         {/*console.log("Hello from our main App div")*/}
      </div>
    );
  }
}

export default App;
// export just one thing and it is going to be this one thing App. App is coming out of this file
// export what you want the rest of the world to see

/*
Checkout App Component:
App is the right place to put our click handler because:
  it is managing the state of cats upon which all of our other components are relying and
  that is a good indecator that we need the functionality to live in App.js.
  So we are going to be changing the state of cats.
  Who owns the state of cats?
  App does! and so App also needs to own the methods that allow us to make those changes.

*/
