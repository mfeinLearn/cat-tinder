// Functional component
//.. using a const and assign it to a functional expression

// anonomus function expression being assigned to Cats

// container component
import React from 'react'
import CatCard from './CatCard'

// Component is a property of react
const Cats = ({ cats }) => {
  const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)

  return (
    <div className="Cats">
      {/*Hey JavaScript grab that varable catCards and return it*/}
      {catCards}
    </div>
  )

}

export default Cats

// if we expect to have a list of exports from a paticular file then
//.. we are not going to use default
// if we have one thing and one thing alone that
//.. we are going to export then we are going to use default
