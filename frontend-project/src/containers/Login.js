import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import './Login.css';

const Login = ({isLogin, setIsLogin, currentPodCastSAcc, setCurrentPodCastSAcc}) =>{

    const navigate = useNavigate();
    const inputEmail = useRef();
    const inputPassword = useRef();
    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(data => setAllUsers(data))

    },[])



    return(

        <div className="login-container">
            <form>
                <h2>LOG IN WITH</h2>
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
                <input  type="password" ref={inputPassword}/>
                <a href="">Log in as Adimin?</a> <a>Forget your password?</a>
                <button>Go Inside</button>


                
            </form>

        </div>
    );
}

export default Login;