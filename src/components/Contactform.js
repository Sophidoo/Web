import Style from "../Styles/Contact.module.css"
import contact from "../Images/contact.png"

const Contactform = () => {

    return <>
    
        <div className={Style.contact}>
            <div className={Style.leftcontact}>
                <h1>Let's make your wears, <br/> Contact Us today!</h1>
                <form action="">
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">Enter Your Name:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">Enter Your Email Address:</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className={Style.inputWrapper}>
                        <label htmlFor="">What can we help you with?</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
            <div className={Style.rightcontact}>
                <img src={contact} alt="" />
            </div>
        </div>
    </>

}

export default Contactform