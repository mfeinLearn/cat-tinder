import React from 'react'
import CatCard from './CatCard'

// Component is a property of react
const DislikedCats = ({ cats, handleChangeOfHeart }) => {
  const catCards = cats.map(cat => <CatCard handleChangeOfHeart={handleChangeOfHeart} key={cat.name} cat={cat}/>)

  return (
    <div className="DislikedCats">
      <h2>Disliked Cats</h2>
      {/*Hey JavaScript grab that varable catCards and return it*/}
      {catCards}
    </div>
  )

}

export default DislikedCats
