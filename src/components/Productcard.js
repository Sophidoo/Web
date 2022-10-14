
const Productcard = ({data}) =>{

        const {image, name, price} = data
    return <>
        <div className="card">
            <img src={image} alt="" />
            <span className="material-symbols-outlined cart" >
                shopping_cart
            </span>
            <div className="productname">
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>

    </>

}



export default Productcard