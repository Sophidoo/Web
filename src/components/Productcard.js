const Productcard = (props) =>{

    return <>

        <div className="card">
            <img src={props.pic} alt="" />
            <span className="material-symbols-outlined cart" >
                shopping_cart
            </span>
            <div className="productname">
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>

    </>

}



export default Productcard