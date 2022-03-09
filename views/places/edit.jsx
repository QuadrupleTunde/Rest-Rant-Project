const React = require('react')
const Def = require('../default')

function editForm(props){
    console.log(props)
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form action={`/places/${props.place._id}?_method=PUT`} method="POST" >
            <div className='form-group'>
                <label htmlFor="name">Place Name</label>
                <input className='form-control' id="name" name="name" defaultValue= {props.place.name} required/>
            </div>
            <div className='form-group'>
                <label htmlFor="pic">Place Picture</label>
                <input className='form-control' id="pic" name="pic" defaultValue= {props.place.pic}/>
            </div>
            <div className='form-group' >
                <label htmlFor="city">City</label>
                <input className='form-control' id="city" name="city" defaultValue= {props.place.city}/>
            </div>
            <div className='form-group'  >
                <label htmlFor="state">State</label>
                <input className='form-control' id="state" name="state" defaultValue= {props.place.state}/>
            </div>
            <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input  className='form-control' id="cuisines" name="cuisines" defaultValue= {props.place.cuisines} required />
            </div>
            <div>
                <div className="form-group col-sm-4">
                <label htmlFor="founded">Founded</label>
                </div>
            </div>
            <input  className='btn btn-primary' type="submit" value="Update Place" />
            <input  className='form-control' id="founded" name="founded" defaultValue= {props.place.founded} required />
            </form>
            </main>
        </Def>
    )
}

module.exports= editForm