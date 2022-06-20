import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';

const Login = ({isLogin, setIsLogin, currentAccount, setCurrentAccount}) =>{

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
                <p><div>Or</div></p>
                
            </form>

        </div>
    );
}

export default Login;