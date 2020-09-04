import React from 'react'
import Popup from "reactjs-popup";
import Login from "../Auth/Login";
import './NavBar.css'

// import logo from "../assets/images/logo1.png"

export default function NavBar({ setLoggedIn }) {
    return (


        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul class="navbar-nav mr-auto">
                        <img />
                        <li class="nav-item">
                            <a class="nav-link" href="/" style={{ fontSize: "24px", color: "#47567d" }}>data<b>vis</b></a>
                        </li>

                    </ul>
                </div>

                <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link pointer" href="/"> Login
                                {/* <Popup trigger={<span><b>Login</b> </span>} modal position="left top"
                                    closeOnDocumentClick>
                                    <div>
                                        <Login setLoggedIn={setLoggedIn} />
                                    </div>
                                </Popup> */}
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

