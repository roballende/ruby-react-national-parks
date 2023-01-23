import "./App.css"
import React, { useState, useEffect} from 'react'

function App() {

    const [users, setUsers] = useState()
    const [currentPark, setCurrentPark] = useState("Acadia")
    const [parkUrl, setParkUrl] = useState("AcaidaUrl")

    if currentPark == "Acadia"
    then setParkUrl = "acadiaUrl"
    else if currentPark = "yellowstone"
    then setParkUrl = "yellowstoneUrl"
    else  if currentPark = "arches"

    acadia button when clicked, then change the route 

    useEffect(() => {
        fetch(parkUrl)
            .then(data => resp.json())
            .then(setUsers)
    }, [])
    
    return <div className='App'>{users.map(user => <p>{user.name}</p>)}</div>
}

export default App
