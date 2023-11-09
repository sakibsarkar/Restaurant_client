import "./Nav.css";
import cart from "../assets/icon/cart.png";
import user from "../assets/others/profile.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <h1>BISTRO BOSS</h1>
                <p>Restaurant</p>
            </div>



            <div className="navRightSide">


                <div className="navLinks">
                    <NavLink to={"/"} className="links">HOME</NavLink>
                    <NavLink to={"/contactUs"} className="links">CONTACT US</NavLink>
                    <NavLink to={"/dashBoard"} className="links">DASHBOARD</NavLink>
                    <NavLink to={"/ourMenu"} className="links">OUR MMENU</NavLink>
                    <NavLink to={"/ourShop"} className="links">OUR SHOP</NavLink>
                </div>
                <div className="functionality">
                    <div className="cart">
                        <img src={cart} alt="" />
                    </div>
                    <div className="user">
                        <img src={user} alt="" />
                    </div>
                </div>
            </div>



        </nav>
    );
};

export default Nav;