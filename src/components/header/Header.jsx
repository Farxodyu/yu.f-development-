import React,{useState} from "react";
import logo from "../../images/logo.svg"
import {Link} from "react-router-dom";

const Header = (props) => {
        const inState = [
            {id:1, name:'home'},
            {id:2, name:'works'},
            {id:3, name:'about-me'},
            {id:4, name:'contacts'},

        ];
    const [links,setLink]=useState(inState)
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container main-container">
                    <Link to="#">
                        <img src={logo} alt=""/>
                        <p>yu.f</p>
                    </Link>
                    <div className={"header__navigation"}>

                        <ul className="navbar-nav">
                                {links.map((link)=>(
                                  <li key={link.id}>{link.name}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;