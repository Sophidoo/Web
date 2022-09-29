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

                    <Productcard name = "Pink Hoodie" price = "$50.00" pic = "http://cdn.shopify.com/s/files/1/0219/7173/0504/products/02.09.21-230.jpg?v=1631167063"/>
                    <Productcard name = "Corporate Gown" price = "$400.00" pic = "https://i.pinimg.com/originals/2e/9e/59/2e9e597383e356ca67b139eaa430038e.jpg"/>
                    <Productcard name = "Baggy Jeans" price = "$100.00" pic = "https://external-preview.redd.it/Id_RrlwGNFR00Xxh16vQu9iwBrASAOGOeOigb047kZA.jpg?auto=webp&s=aa287809805c55ad9684ada7fb500c7eb17115b6"/>
                    <Productcard name = "Men's Suit" price = "1000.00" pic = "https://glorytrends.com/wp-content/uploads/2021/10/mens-suits-2022.jpg"/>

                </div>

            <Footer/>
        </>

}


export default Product