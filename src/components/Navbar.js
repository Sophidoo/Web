import { Link, NavLink } from "react-router-dom"



const Navbar = () => {

    const activeStyle = {
        color: "rgb(1, 1, 121)"
    }

    return <>

        <div className="navbar">

            <div className = "logo">
                MEGVIN
            </div>
            <div>
                <li>
                    <NavLink to = "/" style = {({isActive}) => isActive? activeStyle : undefined} end className="link">
                        Home
                    </NavLink>
                    <NavLink to = "/about-us" style = {({isActive}) => isActive? activeStyle : undefined} end className="link">
                        About
                    </NavLink>
                    <NavLink to = "/product" style = {({isActive}) => isActive? activeStyle : undefined} end className="link">
                        Product
                    </NavLink>
                    <NavLink to = "/contact-us" style = {({isActive}) => isActive? activeStyle : undefined} end className="link">
                        Contact US
                    </NavLink>
                    
                </li>
            </div>

        </div>


    </>
}

export default Navbar