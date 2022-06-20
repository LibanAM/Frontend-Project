import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';


const SignUp = () => {

    return (
        <div className="sign-up-container">
            <form>
                <h1>SIGN UP WITH</h1>
                <ul>
                    <li><a href="wwww.google.co.uk"><button><BsGoogle/></button></a></li>
                    <li><a href="wwww.twitter.com"><button><BsTwitter /></button></a></li>
                    <li><a href="wwww.linkedin.com"><button><FaLinkedinIn /></button></a></li>
                    <li><a href="wwww.github.com"><button><BsGithub /></button></a></li>
                </ul>
                <p className="or-line"><div> Or </div></p>
                
                <br/>
                <p>Your Email</p>
                <input type="text" ref={inputEmail}/>
                <p>Password</p>
                <input  type={passwordShown? "text" : "password"} ref={inputPassword}/><br/>
                <button onClick={handlePasswordShown}>{passwordShown? <AiOutlineEye/> : <AiOutlineEyeInvisible/> }</button>
                
                <a href="">Log in as Admin?</a>
                <a>Forget your password?</a>
                <br/>
                <button onClick={handleLogin}>Go Inside</button>
                <p>Do you need an account?</p>

            </form>

        </div>
    );
}

export default SignUp;