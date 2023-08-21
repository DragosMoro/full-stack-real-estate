import "./Header.css";
import "../../index.css";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const getMenuStyles = (isOpen) => {
        if(document.documentElement.clientWidth <= 800){
            return {right: !isOpen && "-100%"}
    }
    }
    return (
        <section className="h-wrapper" id="header">
            <div className="paddings innerWidth h-container">
                <Link to="/">
                    <img src="./logo.png" alt="logo" width={100}/>
                </Link>
                <OutsideClickHandler onOutsideClick={()=>{setIsOpen(false)}}>
                <div className="flexCenter h-menu" style={getMenuStyles(isOpen)}>
                    <NavLink to="/properties">Properties</NavLink>
                    <a href="mailto:morozan.dragos@gmail.com">Contact</a>
                    {/* login button */}
                    <button className="button">Login</button>
                </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={()=>setIsOpen((prev)=>!prev)}>
                {isOpen ? <AiOutlineClose size={30} /> : <BiMenu size={30} />}
            </div>
            </div>
        </section>
    );
};

export default Header;
