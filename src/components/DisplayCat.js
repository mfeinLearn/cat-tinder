// Functional component
//.. declar a function declarition

// function declaration

import React from 'react'
import CatCard from './CatCard'
// Now I am declaring DisplayCat as a parent of CatCard which means I need to import CatCard

// the prop object is incomming it should have a property called cat init
//.. lets grab that and make it availible as an object with in this paticular
//.. component now I have a varable component called cat that I can refer to directly and I
//.. can just pass it along to the next componet that needs it
function DisplayCat({
  cat,
  handleLikeClick
}) {
  const style = {
    borderStyle: "solid",
    borderColor: "blue",
    borderWidth: "1px"
  }
  return ( // we could also return arrays of components or react fragments if we want
    <div style={style} className="DisplayCat">
      <CatCard size={{maxHeight: 100, maxWidth: 100}}
      cat={cat}/>
      <button id={cat ? cat.id : "no-cat"} className="like-button" onClick={handleLikeClick}>Like</button>
      <button id={cat ? cat.id : "no-cat"} className="dislike-button" onClick={handleLikeClick}>Dislike</button>
    </div>
  )
}

export default DisplayCat
