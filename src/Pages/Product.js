import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Productcard from "../components/Productcard"
import Style from "../Styles/Product.module.css"
import {useState} from "react"

const Product = () => {

    const[active, setActive] = useState(false)

    const filter = () => {
        if(active){
            setActive(false)
        }else{
            setActive(true)
        }
    }
        return <>
            <Navbar/>

                <div className={Style.search}>
                    <input type="search" name="" id=""  placeholder="Search"/>
                </div>

                <div className={Style.madeWears}>
                    <div className={Style.heading}>
                        <h1>All Ready Made Wears</h1>
                        <div className={Style.selection}>
                            <p onClick={() => filter()} className = {active? Style.active : Style.notActive}>All</p>
                            <p onClick={() => filter()} className = {active? Style.active : Style.notActive}>Men</p>
                            <p>Women</p>
                            <p>Children</p>
                        </div>
                    </div>

                </div>

                <div className={Style.productWrapper}>

                    <Productcard image = "http://cdn.shopify.com/s/files/1/0219/7173/0504/products/02.09.21-230.jpg?v=1631167063"/>
                    <Productcard />
                    <Productcard />
                    <Productcard />

                </div>

            <Footer/>
        </>

}


export default Product