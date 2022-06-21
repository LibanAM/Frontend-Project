import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import './SignUp.css';

const Login = ({isLogin, setIsLogin, currentPodCastAcc, setCurrentPodCastAcc}) =>{

    const navigate = useNavigate();

    const inputEmail = useRef();
    const inputPassword = useRef();
    const [allUsers, setAllUsers] = useState([]);
    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(data => setAllUsers(data))

    },[])

    const handleLogin = (event) => {
        
        const currentUser = allUsers.filter(user => user.email == inputEmail.current.value &&
                                                    user.password == inputPassword.current.value);
        if (currentUser.length == 0) {
            alert("Invalid email adress or password! Please try again!")
            return
        };

        setCurrentPodCastAcc(currentUser);
        setIsLogin(!isLogin);
        navigate('/explore');

    }

    // show password or not
    const handlePasswordShown = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }



    return(

        <div className="sign-up-container">
            <form className="sign-up-form">
                <h1 className="sign-up-title">LOG IN WITH</h1>
                <div className="other-sign-up">
                <ul>
                <li>
                    <a href="wwww.twitter.com" className="button-a-tag"><button className="other-sign-up-button-twitter"><BsTwitter className="other-sign-up-icons-twitter"/></button></a></li>
                    <li><a href="wwww.google.co.uk" className="button-a-tag"><button className="other-sign-up-button-google"><BsGoogle className="other-sign-up-icons-google"/></button></a></li>
                    <li><a href="wwww.linkedin.com" className="button-a-tag"><button className="other-sign-up-button-linkedin"><FaLinkedinIn className="other-sign-up-icons-linkedin"/></button></a></li>
                    <li><a href="wwww.github.com" className="button-a-tag"><button className="other-sign-up-button-github"><BsGithub className="other-sign-up-icons-github"/></button></a></li>
                </ul>
                </div>
                <p className="or-line"><span> Or </span></p>

                <br/>
                <p className="sign-up-input-title">Your Email</p>
                <input type="text" ref={inputEmail} className="sign-up-input-box"/>
                <p className='new-user-email-input'></p>

                <p className="sign-up-input-title">Password</p>
                <input  type={passwordShown? "text" : "password"} ref={inputPassword} className="sign-up-input-box"/><br/>
                <button onClick={handlePasswordShown} className="password-shown-button">{passwordShown? <AiOutlineEye className="password-eye"/> : <AiOutlineEyeInvisible className="password-eye"/> }</button>
                <p className='new-user-password-input'></p>
                <br/>

                <a href="#" className="other-links">Log in as Admin?</a>
                <br/>

                <a href="#" className="other-links">Forget your password?</a>
                <br/>

                <div>
                <br/>

                <button onClick={handleLogin} className='sign-up-btn'>Log in</button>
                </div>
                <p>Do you need an account?
                    <a href="/account">Create new account</a></p>
            </form>

        </div>
    );
}

export default Login;