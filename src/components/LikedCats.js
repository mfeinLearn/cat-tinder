import React from 'react'
import CatCard from './CatCard'

// Component is a property of react
const LikedCats = ({ cats }) => {
  const catCards = cats.map(cat => <CatCard key={cat.name} cat={cat}/>)

  return (
    <div className="LikedCats">
      <h2>Liked Cats</h2>
      {/*Hey JavaScript grab that varable catCards and return it*/}
      {catCards}
    </div>
  )

}

export default LikedCats
