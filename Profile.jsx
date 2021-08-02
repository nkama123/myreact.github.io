import React from "react";
import './Style.css'

const Profile = () => {
    return (
        <div>
            <nav className ="contact">
                <h1>We would love to hear from you</h1>
                <h2>GET IN TOUCH</h2>
            </nav>
            <div className="wrapper">
            <div className="conntact-info">
            <div class  ="box">
                <div class ="text">
                    <h3>Address</h3>
                    <p>050177 Ga-Matopa Village</p>
                    <p>Mapela</p>
                    <p>0610</p>
                </div>
                <div class  ="box">
                <div class ="text">
                    <h3>Phone</h3>
                    <p>0785266993</p>
                    </div>
                    </div>

                    <div class  ="box">
                <div class ="text">
                    <h3>Email adress</h3>
                    <p>melnkama2@gmail.com</p>
                    </div>
                    </div>
                    </div>

                    <div className ="contact-form">
                        <form>
                            <h2>send a message</h2>
                            <div className="inputbox">
                                <input type="text" name ></input>
                                <span>full name</span>
                            </div>
                            <div className="inputbox">
                                <input type="text" name ></input>
                                <span>Email adress</span>
                           </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div> 
    
    )
}
export default Profile
    