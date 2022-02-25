const React = require('react')
const Def = require('../default')
function index(props){
    let placesFormatted = props.places.map((place, index)=>{
    return(
        <div key={place.name} className= "col-sm-6">
            <h1><a href={`/places/${index}`}>{place.name}</a></h1>
            <p className='text-align'>{place.cuisines}</p>
            <img src= {place.pic} alt={place.name}/>
            <p className='text-align'>Located in {place.city}, {place.state}</p>
            
        </div>
    )           
    })
    return(
        <Def>
        <main>
        <h1>Places to Rant or Rave About</h1>
        <div className= "row">
        {placesFormatted}
        </div>
        </main>
        </Def>
    )
}

module.exports = index