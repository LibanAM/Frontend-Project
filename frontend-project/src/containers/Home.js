import picture from "../images/logo603x186.png";
import GooglePlay from "../images/GooglePlay.png";
import AppStore from "../images/AppStore.png";
import Artwork2 from "../images/homepage-art-1.png";
import "./Home.css";


const Home = () => {
  return (
    <>
      {/* <h2>Home</h2> */}
      <div id="gradient-1">
        <div id="section-1">
          <div className="logo">
            <img src={picture} alt="JustListenAPI logo" />
          </div>
          <p id="one-liner-pt1">Our podcasts are better</p>
          <p id="one-liner-pt2">than our web design</p>
          <button id="home-page-btn">Start listening for free</button>
        </div>

        <div id="section-2">
          <h3>Here's what matters most to you</h3>
          <h4>
            JustListen brings together live sports, music, news, training and
            many more!
          </h4>
        </div>
      </div>

      <div id="gradient-2">
        <div id="section-3">
          <div className="picture1">
            <img src={Artwork2} alt="Line podcast artwork" />
          </div>
          <div id="section-3-text-rhs">
            <h3>Listen</h3>
            <h4>EVERYWHERE</h4>
            <p>
              Et omnis aut id. Aut eaque est quaerat. Doloribus omnis fugit et
              sit ducimus expedita. Et iure minima enim est earum voluptas
              occaecati. Connect with all your devices like Alexa, Google Home
              or your car.</p>
            <div> 
                {/* <img src={}/>
                <img src={}/>
                <img src={}/>
                <img src={}/> */}
            </div>
          </div>
        </div>

        <footer id="footer">
          <div id="footer-left-side">
            <div className="logo2">
              <img src={picture} alt="JustListen logo"></img>
            </div>
            <p>
              Corporis ut aliquid qui molestiae. Sed laborum sunt recusandae
              animi dolore voluptates.
            </p>
            <div id="Download-images">
              <img src={AppStore} alt="Download on the App Store" />
              <img src={GooglePlay} alt="Get it on Google Play" />
            </div>
          </div>

          <ul>
            <h3>Product</h3>
            <li>
              <a href="#" target="_blank">
                Download
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Locations
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Server
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Countries
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Blog
              </a>
            </li>
          </ul>

          <ul>
            <h3>Company</h3>
            <li>
              <a target="blank" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Tutorials
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                About Us
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Careers
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Support
              </a>
            </li>
          </ul>

          <ul>
            <h3>Privacy</h3>
            <li>
              <a target="blank" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a target="blank" href="#">
                Site map
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Home;
