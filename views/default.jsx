const React = require('react')
   
function Def(props){
    return(
        <html>
            <head>
                <title>Rendered Page</title>
            </head>
            <body>
                
             <div>{props.children}</div> 
            
            </body>
        </html>
    )
}


module.exports = Def