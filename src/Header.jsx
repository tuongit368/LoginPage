import React from 'react'
import "./header.css"

function Header() {
  return (
    <div>

        <div class="logo"></div>

        <form action="">

        <div class="username">
            <div class="logouser"></div>
            <input type="text" placeholder="USERNAME"/>
        </div>

        <div class="password">
            <div class="logopassword"></div>
            <input type="password" placeholder="PASSWORD"/>
        </div>

        <div class="login">
            <button type="submit">LOGIN</button>
        </div>

        <div class="forgotpassword">
            <h5>Forgot password?</h5>
        </div>
        
        </form>
    </div>
  )
}

export default Header