const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <div>
                <img src="/images/kitten.jpg" alt="kitten"/>
                <div>Photo by <a href="https://unsplash.com/@l_oan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Loan</a> on <a href="https://unsplash.com/s/photos/kitten?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            </div>
            <p>Oops, sorry we cannot find this page</p>
        </main>
        </Def>
    )
}
module.exports= error404