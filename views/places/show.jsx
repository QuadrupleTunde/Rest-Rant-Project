const React = require('react')
const Def = require('../default')

function show(props){
    console.log(props)
    return(
        <Def>
            <main>
                <h1>{props.place.name}</h1>
                <p>{props.place.cuisines}</p>
                <img src= {props.place.pic} alt={props.place.name}/>
                <p>{props.place.city}, {props.place.state}</p>
            </main>
            <a href={`/places/${props.id}/edit`} className="btn btn-warning"> Edit</a>
            <form action={`/places/${props.id}?_method=DELETE`} method='POST'> 
            <button type="submit" className="btn btn-danger"> Delete</button>
            </form>     
        </Def>
    )
}
module.exports = show