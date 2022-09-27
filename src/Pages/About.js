import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Style from "../Styles/About.module.css"

const About = () => {

    return<>
        <Navbar/>
        
        <div className={Style.heading}>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque assumenda, officia itaque reiciendis repudiandae nostrum, quia aliquid debitis non, ipsa ad? Aspernatur necessitatibus amet, modi architecto vitae repellat laboriosam alias adipisci eveniet asperiores tenetur perferendis quam dolores excepturi eius molestias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum laudantium ea sint enim, nostrum quia esse? Alias cupiditate reprehenderit maiores rem sed a neque qui aspernatur placeat, rerum voluptatibus? Necessitatibus?</p>
        </div>

        <div className={Style.teamWrapper}>
            <div className={Style.teamHeading}>
                <h1>Meet Our Team</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, eveniet eum iusto labore nisi voluptates sed magni veniam vero autem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, laudantium.</p>
            </div>

            <div className={Style.teamcard}>
                <div className={Style.card}>
                    <img src="https://i.pinimg.com/736x/0a/f9/6f/0af96f0770faf1c68288a32102ca3097.jpg" alt="" />
                    <div className={Style.person}>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dignissimos in minima officia cupiditate quo quos, quibusdam recusandae commodi perferendis.</p>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src="https://i.pinimg.com/736x/0a/f9/6f/0af96f0770faf1c68288a32102ca3097.jpg" alt="" />
                    <div className={Style.person}>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dignissimos in minima officia cupiditate quo quos, quibusdam recusandae commodi perferendis.</p>
                    </div>
                </div>
                <div className={Style.card}>
                    <img src="https://i.pinimg.com/736x/0a/f9/6f/0af96f0770faf1c68288a32102ca3097.jpg" alt="" />
                    <div className={Style.person}>
                        <h3>John Doe</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dignissimos in minima officia cupiditate quo quos, quibusdam recusandae commodi perferendis.</p>
                    </div>
                </div>
            </div>
        </div>


        <Footer/>
    </>

}

export default About