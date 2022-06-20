import picture from "../images/logo603x186.png";
import './Home.css'

const Home = () => {

    return (
        <>
            <h2>Home</h2>
            <div id="gradient-1">
                <div id="section-1">
                    <img src={picture} alt="JustListenAPI logo"></img>
                    <p id="one-liner-pt1">Our podcasts are better</p>
                    <p id="one-liner-pt2">than our web design</p>
                </div>

                <div id="section-2">
                    <h3>Here's what matters most to you</h3>
                    <h4>JustListen brings together live sports, music, news,
                        training and many more!</h4>

                </div>
            </div>

            <div id="gradient-2">
                <div id="section-3">
                    <h3>Listen</h3>
                    <h4>EVERYWHERE</h4>
                    <p>Et omnis aut id. Aut eaque est quaerat.
                        Doloribus omnis fugit et sit ducimus expedita.
                        Et iure minima enim est earum voluptas occaecati.
                        Connect with all your devices like Alexa, Google Home or your car.</p>
                </div>

                <footer id="footer">
                    <img src={picture}></img>
                        <ul>
                            <h3>Product</h3>
                            <li>Download</li>
                            <li>Pricing</li>
                            <li>Locations</li>
                            <li>Server</li>
                            <li>Countries</li>
                            <li>Blog</li>
                        </ul>

                        <ul>
                            <h3>Company</h3>
                            <li>Brand</li>
                            <li>FAQ</li>
                            <li>Brand</li>
                            <li>Brand</li>
                            <li>Brand</li>
                        </ul>

                        <ul>
                            <h3>Privacy</h3>
                            <li>Privacy</li>
                            <li>Terms of use</li>
                            <li>Site map</li>
                        </ul>
                </footer>
            </div>
        </>
    );
}

export default Home;