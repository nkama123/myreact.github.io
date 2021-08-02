import React from "react";
import {BrowserRouter as Router , Link, Route , Switch} from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import Users from "./Users";
import Land from "./Land";
import './Style.css';


const Default =() => {

    return (
        <>
        <Router>

            <div>
                <nav className="hope">
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/about">About</Link>
                        </li>
                        <li>
                        <Link to ="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to ="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path ="/about">
                        <About/>

                    </Route>
                    <Route path = "/profile">
                        <Profile/>

                    </Route>
                    <Route path = "/users">
                        <Users/>

                    </Route>
                    <Route path ="/">
                        <Land/>
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    )
}


export default Default
