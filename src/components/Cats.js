// container component
import React from 'react'
import CatCard from './CatCard'
import cats from '../cats-data'
// Component is a property of react
class Cats extends React.Component {
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

// when you return from a render method it needs to be either a single element(we can rap the whole thing in a div and that counts as a single element ) or I can use a fragment if I want a collection or I can return an array of elements
  render() {
    //console.log(cats)
    // I am allowed to map over state here because map is not destructive which makes this totally legal
    // I am mapping over the cats array and for every single cat object that lives in this array I am going to create a cat card component
    // catCards - is an array now of react components (what type of component? a CatCard component )
    const catCards = this.state.cats.map(cat => <CatCard key={cat.name} cat={cat}/>)
    return (
      <div>
        {/*Hey JavaScript grab that varable catCards and return it*/}
        {catCards}
      </div>
    )
  }
}

export default Cats

// if we expect to have a list of exports from a paticular file then
//.. we are not going to use default
// if we have one thing and one thing alone that
//.. we are going to export then we are going to use default
