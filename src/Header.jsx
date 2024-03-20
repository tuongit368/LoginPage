import React, { useState } from 'react'
import "./header.css"
// import Userlogo from './user.png'
// import Locklogo from './lock.png'

function Header() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Username:", username)
        console.log("Password:", password)
    }

 
  return (
    <div>

        <div className="logo"></div>

        <form onSubmit={e => handleSubmit(e)}>

        <div className="username">
            <div className="logouser"></div>
            {/* <img className='Userlogo' src={Userlogo} alt="Userlogo" /> */}
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="USERNAME"/>
        </div>

        <div className="password">
            <div className="logopassword"></div>
            {/* <img className='Locklogo' src={Locklogo} alt="Locklogo" /> */}
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="PASSWORD"/>
        </div>

        <div className="login">
            <button >LOGIN</button>
        </div>

        <div className="forgotpassword">
            <h5>Forgot password?</h5>
        </div>
        
        </form>
    </div>
  )
}

export default Header