const React = require('react')
const Def = require('../default')

function show(props){
    return(
        <Def>
            <h1>{props.place.name}</h1>
            <main>
            <div className="row"> 
            <div className="col-sm-6">
                <h1>{props.place.name}</h1>
                <img src= {props.place.pic} alt={props.place.name}/>
                <h3>Located in {props.place.city}, {props.place.state}</h3>
            </div>
            <div className="col-sm-6">
                <h2>Description</h2>
            <h3>{props.place.showEstablished}</h3>
                <h4>{props.place.cuisines}</h4>
            </div>
            </div>

            </main>

            <a href={`/places/${props.place._id}/edit`} className="btn btn-warning"> Edit</a>
            <form action={`/places/${props.place._id}?_method=DELETE`} method='POST'> 
            <button type="submit" className="btn btn-danger"> Delete</button>
            </form>     
        </Def>
    )
}
module.exports = show

