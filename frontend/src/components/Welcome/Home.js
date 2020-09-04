import React from "react";
import { Link, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from './Footer'

import Slideshow from "./SlideShow"
import Register from "../Auth/Register";
import Login from "../Auth/Login";


function Home({ setLoggedIn }) {
    return (

        <div className="bg">

            <NavBar setLoggedIn={setLoggedIn} />
            <h1 className="mt-5 text-center title">
                Login to <b>datavis</b>
            </h1>
            <div class="popup-content " style={{ position: "relative", background: "rgb(255, 255, 255)", width: "50%", margin: "auto", border: "1px solid rgb(187, 187, 187)", padding: "5px" }}>
                <Login setLoggedIn={setLoggedIn} />
            </div>
            {/* <Slideshow /> */}
            <Footer />


        </div>
    );
}

export default Home;
