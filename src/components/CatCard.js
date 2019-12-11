// Functional component

// anonomus function expression - standard function expression

import React from 'react'

// what type of HTML do I want this thing to be
// I can get a varable called cat whose value is whatever the value of the property cat on this object happens to be
//.. in that case it is another object which has a url and a name property
//.. which means I can just say cat.
const CatCard = function({ cat }){
  //console.log("in CatCard, cat is, ", cat, "cat was <--" )
  //.. we are expecting to see this twice:
  //.. 1) on the initial render - the initial state of the empty array which gives us undefined which was causing the problem
  //.. 2) and again once the cat actually loads - once the cats come through we rerender our app now gets all of its cats
  //.. and passes all of those cats accordingly and now we have exactly what we want.
  //.. and for every single catCard we are seeing this come out (cat objects)
  let returnVal
  if (cat) {
    returnVal = <div className="CatCard">
                  <img src={cat.image_url} alt={cat.name}/>
                  <p>{cat.name}</p>
                </div>
  } else {
    returnVal = <div>
                  LOADING...
                </div>
  }
  return (
    returnVal
  )
}

export default CatCard
