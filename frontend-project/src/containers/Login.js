import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import 

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
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                
            </form>

        </div>
    );
}

export default Login;