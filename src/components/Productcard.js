const Productcard = (props) =>{

    return <>

        <div className="card">
            <img src={props.image} alt="" />
            <span className="material-symbols-outlined cart" >
                shopping_cart
            </span>
            <div className="productname">
                <h3>Pink Hoodie</h3>
                <p>$50.00</p>
            </div>
        </div>

    </>

}



export default Productcard