const React = require('react')
console.log(React)
const Def = require('./default')

function home(){
    return(
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home 