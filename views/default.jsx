const { process_params } = require('express/lib/router')
const React = require('react')
   
function Def(props){
    return(
        <html>
            <head>
                <title>Rendered Page</title>
                       
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
            <nav>
                    <ul>
                        <li> <a href='/'>Home</a></li>
                        <li><a href='/places'>Place</a></li>
                        <li><a href='/places/new'>Add Places</a></li>
                    </ul>
                </nav>
             <div>{props.children}</div> 
            
            </body>
        </html>
    )
}


module.exports = Def