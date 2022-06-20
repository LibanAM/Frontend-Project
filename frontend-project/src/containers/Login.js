import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import './Login.css';

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

        <div className="login-container">
            <form>
                <h1>LOG IN WITH</h1>
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
                <div className="account-btn">
                <button onClick={handleLogin}>Go Inside</button>
                </div>
                <p>Do you need an account? Create new account</p>
            </form>

        </div>
    );
}

export default Login;