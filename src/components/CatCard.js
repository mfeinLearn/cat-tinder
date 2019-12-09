// Functional component

// anonomus function expression - standard function expression

import React from 'react'

// what type of HTML do I want this thing to be
// I can get a varable called cat whose value is whatever the value of the property cat on this object happens to be
//.. in that case it is another object which has a url and a name property
//.. which means I can just say cat.
const CatCard = function({ cat }){
  //
  return (
    <div className="CatCard">
      <img height="100px" width="100px" src={cat.image_url} alt={cat.name}/>
      <p>{cat.name}</p>
    </div>
  )
}

export default CatCard
