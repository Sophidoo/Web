import { useState } from "react"
import { NavLink } from "react-router-dom"
import Style from "../Styles/Navbar.module.css"



const Navbar = () => {

    const activeStyle = {
        color: "rgb(1, 1, 121)"
    }

    const[toggle, setToggle] = useState(false)

    const toggling = () => {
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
        
    }
    return <>

        <div className={Style.navbar}>

            <div className = {Style.logo}>
                MEGVIN
            </div>
            <div>
                <li>
                    <NavLink to = "/" style = {({isActive}) => isActive? activeStyle : undefined} end className={Style.link}>
                        Home
                    </NavLink>
                    <NavLink to = "/about-us" style = {({isActive}) => isActive? activeStyle : undefined} end className={Style.link}>
                        About
                    </NavLink>
                    <NavLink to = "/product" style = {({isActive}) => isActive? activeStyle : undefined} end className={Style.link}>
                        Product
                    </NavLink>
                    <NavLink to = "/contact-us" style = {({isActive}) => isActive? activeStyle : undefined} end className={Style.link}>
                        Contact US
                    </NavLink>
                    <span className={`material-symbols-outlined cart ${toggle? Style.cart : Style.default}`} onClick={() => toggling()}>
                        shopping_cart
                    </span>
                    
                </li>
            </div>

        </div>
        <div className={toggle? Style.sidebar : Style.hide}>
        <h3>5 Items In Cart</h3>
            <div className={Style.cartItems}>
                <div className={Style.card}>
                    <div className={Style.cardInformation}>
                        <img src="http://cdn.shopify.com/s/files/1/0219/7173/0504/products/02.09.21-230.jpg?v=1631167063" alt="" />
                        <div className={Style.cardname}>
                            <h4>Pink Hoodie</h4>
                            <p>$50.00</p>
                        </div>
                    </div>
                        <span className={`material-symbols-outlined ${Style.delete}`}>
                            delete
                        </span>
                </div>
            </div>
            <p className={Style.clear}>Clear All</p>
        </div>


    </>
}

export default Navbar