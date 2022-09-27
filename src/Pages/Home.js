import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Style from "../Styles/Home.module.css"
import image from "../Images/girl.svg"
import measure from "../Images/measure.svg"

const Home = () => {

    return<>

        <Navbar/>

        <div className={Style.hero}>

            <div className={Style.leftHero}>
                <h1>MEGVIN <span>FASHION</span> HOUSE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime in nobis sapiente non a officiis provident iste repellat quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, sunt.</p>
                <button>Get Started</button>
            </div>
            <div className={Style.rightHero}>
                <img src={image} alt="svg image" />
            </div>

        </div>

        <div className={Style.services}>
            <div className={Style.top}>
                <h1>Services We Provide</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eaque.</p>
            </div>
            <div className={Style.bottom}>
                <div className={Style.serviceCard}>
                    <span className={`material-symbols-outlined ${Style.smile}`} >
                        sentiment_satisfied
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident beatae quae eum magni modi ullam ipsam aperiam sunt illo!</p>
                </div>
                <div className={Style.serviceCard}>
                    <span class={`material-symbols-outlined ${Style.school}`}>
                        school
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident beatae quae eum magni modi ullam ipsam aperiam sunt illo!</p>
                </div>
                <div className={Style.serviceCard}>
                    <span class={`material-symbols-outlined ${Style.hanger}`}>
                        styler
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident beatae quae eum magni modi ullam ipsam aperiam sunt illo!</p>
                </div>
                <div className={Style.serviceCard}>
                    <span class={`material-symbols-outlined ${Style.bag}`}>
                        shopping_bag
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident beatae quae eum magni modi ullam ipsam aperiam sunt illo!</p>
                </div>
            </div>
        </div>


        <div className = {Style.measure}>

            <div className={Style.leftMeasure}>
                <img src={measure} alt="" />
            </div>
            <div className={Style.rightMeasure}>
                <h1>We Are Hiring</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, earum deserunt in dolorem incidunt veniam consequuntur accusamus, dolorum, rerum ipsum pariatur dignissimos reprehenderit provident minima necessitatibus libero repellat nobis dolore aut accusantium quam ad harum! Ullam quas voluptatibus similique eligendi!</p>
                <button>Contact Us</button>
            </div>

        </div>

        <Footer/>

    </>

}


export default Home