import picture from "../images/logo603x186.png";
import dancing from "../images/dancing.png";
import "./Cover.css";

const Cover = ()=>{
    return( 
    <>
    
<div className="middle-cover-section"> 
    
{/* <div className="cover-logo">
    <img src={picture} alt="JustListenAPI logo"></img>
    </div> */}
    <div className="cover-section-1"> 
    <div className="text-cover">
    <p id="one-liner-cover-1">OUR PODCASTS ARE BETTER</p>
    <p id="one-liner-cover-2">THAN OUR WEB DESIGN</p>
        <button id="cover-button">Start listening for free</button>
    </div>

        <div className="dancing-man">
            <img src={dancing} alt="dancing man" width={400}></img>
        </div>
    </div>

        <div id="cover-section-2">
            <p className="mini-title">Hear what matters most to you! </p>
            <p className="mini-title-2">JustListen brings together live sports, music, news, comedy and many more!</p> 
        </div>
</div>   
    </>
    )
}

export default Cover;