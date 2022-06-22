import picture from "../images/logo603x186.png";
import GooglePlay from "../images/GooglePlay.png";
import AppStore from "../images/AppStore.png";

const Footer = () => {

    return (
        <footer id="footer">
            <div id="footer-left-side">
                <div className="logo2">
                <img src={picture} alt="JustListen logo" width={400} height={150}></img>
                </div>
                <p className="random-words">
                Corporis ut aliquid qui molestiae. Sed laborum sunt recusandae
                animi dolore voluptates.
                </p>
                <p className="random-words2">Download for: </p>
                <div id="Download-images">
                <img src={AppStore} alt="Download on the App Store" width="160" height="50"/>
                <img src={GooglePlay} alt="Get it on Google Play" width="160" height="50"/>
                </div>
                <p className="random-words3">©2022 All rights reserved</p>
            </div>

            <ul className="extra-info">
                <h3>Product</h3> 

                <li>
                <a href="#" target="_blank">
                    Download
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Pricing
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Locations
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Server
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Countries
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Blog
                </a>
                </li>
            </ul>

            <ul className="extra-info">
                <h3>Company</h3>

                <li>
                <a target="blank" href="#">
                    FAQ
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Tutorials
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    About Us
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Careers
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Support
                </a>
                </li>
                <br/>
            </ul>

            <ul className="extra-info">
                <h3>Privacy</h3>

                <li>
                <a target="blank" href="#">
                    Privacy
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Terms of Use
                </a>
                </li>
                <br/>

                <li>
                <a target="blank" href="#">
                    Site map
                </a>
                </li>
            </ul>
        </footer>
    )

}

export default Footer;