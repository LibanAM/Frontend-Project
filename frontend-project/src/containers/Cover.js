import picture from "../images/logo603x186.png";
import dancing from "../images/dancing.png";
import "./Cover.css";

const Cover = ()=>{
    return( 
    <>
    <img src={picture} alt="JustListenAPI logo"></img>
    <div>
    <p id="one-liner-pt1">OUR PODCASTS ARE BETTER</p>
        <p id="one-liner-pt2">THAN OUR WEBDESIGN</p>
        <button id="home-page-btn">Start listening for free</button>
    </div>

        <div>
            <img src={dancing} alt="dancing man"></img>
        </div>

        <div>
            <h3>Hear what matters most to you!</h3>
            <p>JustListen brings together live sports, music, news, comedy and many more!</p>
        </div>
    </>
    )
}

export default Cover;