const React = require('react')
const Def = require('../default')

function show(props){
    let comments =(<h3 className= "inactive">No comment yet!</h3>)
    let rating =(<h3 className='inactive'>Not yet rated</h3>)
    if(props.place.comments.length){
        let sumRatings = props.place.comments.reduce((tot, c)=>{
            return tot + c.stars
        }, 0)
        let averageRating = Math.ceil(sumRatings / props.place.comments.length)
        console.log(averageRating)
        let stars =""
        for(let i=0; i<averageRating; i++){
            stars += "⭐"
        }
        rating=(<h3>{stars} stars</h3>)
    }
    if (props.place.comments.length){
        comments= props.place.comments.map(c=>{
        return(
            <div className='border'>
                <h2 className='rant'>{c.rant? "Rant!": "Rave!"}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <strong>-{c.author}</strong>
                </h3>
                <h4>Rating:{c.stars}</h4>
           </div>
           
        )
    })}
    return(
        <Def>
            <h1>{props.place.name}</h1>
            <main>
            <div className="row"> 
            <div className="col-sm-6">
                <h1>{props.place.name}</h1>
                <h2>Rating</h2>
                {rating}
                <br/>
                <img src= {props.place.pic} alt={props.place.name}/>
                <h3>Located in {props.place.city}, {props.place.state}</h3>
            </div>
            <div className="col-sm-6">
                <h2>Description</h2>
            <h3>{props.place.showEstablished}</h3>
                <h4>{props.place.cuisines}</h4>
            </div>
            <hr/>
            <h2>Comments</h2>
            {comments}
            <form action={`/places/${props.place.id}/comment`} method='POST'> 
            <labels htmlFor="author">Author</labels>
            <input type= "text" id = "author" name ="author"/>
            <labels htmlFor="content">Content</labels>
            <textarea id= "content"  name= "content" value="we are waiting for your feedback"></textarea>
            <labels htmlFor="stars">Star Rating</labels>
            <input type= "range" min="0" max="5" id = "stars" name ="stars"/>
            <labels htmlFor="rant">Rant</labels>
            <input type= "checkbox" id = "rant" name ="rant"/>
            <button type="submit" className="btn btn-danger"> Add comment</button>
            </form>
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

