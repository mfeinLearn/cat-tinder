// container component
import React from 'react'
import CatCard from './CatCard'

// Component is a property of react
class Cats extends React.Component {




// when you return from a render method it needs to be either a single element(we can rap the whole thing in a div and that counts as a single element ) or I can use a fragment if I want a collection or I can return an array of elements
  render() {
    const catCards = this.props.cats.map(cat => <CatCard key={cat.name} cat={cat}/>)
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
