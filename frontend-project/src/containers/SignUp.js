import {BsGoogle, BsTwitter, BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import {useRef, useEffect, useState} from 'react';
import weakPassword from '../images/Frame 1242.png';
import lessStrongPassword from '../images/Frame 1243.png';
import strongPassword from '../images/Frame 1244.png';
import './SignUp.css';

const SignUp = ({isLogin, setIsLogin, currentPodCastAcc, setCurrentPodCastAcc}) => {

    const inputNewEmail = useRef();
    const inputNewPassword = useRef();
    const inputNewUsername = useRef();
    const [allUsers, setAllUsers] = useState();
    const [passwordShown, setPasswordShown] = useState(false);

    // get all users
    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then(response => response.json())
        .then(data => setAllUsers(data))
    },[])

    // postmapping, create a new user
    const handleSignUp = (event) => {
        event.preventDefault();

        const newPodcastUser = {
            username: inputNewUsername.current.value,
            password: inputNewPassword.current.value,
            email: inputNewEmail.current.value,
            admin: false  
        };

        fetch("http://localhost:8080/users",
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPodcastUser)
        })
        .then(response => response.json())
        .then(savedPodcastUser => setCurrentPodCastAcc(savedPodcastUser))
        setIsLogin(!isLogin);
        
    }

    // check if the username already exists
    const handleExisitedUserName = () => {
        const allUserNames = allUsers.map(user => {return user.username;});
        
        if(allUserNames.includes(inputNewUsername.current.value)){
            document.querySelector('.new-user-username-input').innerHTML="This username already exists";
        }
        else{
            document.querySelector('.new-user-username-input').innerHTML="";
        }
    }

    // check if it is the right format of email address
    const handleCorrectEmail = () => {
        if(!inputNewEmail.current.value.includes("@")){
            document.querySelector('.new-user-email-input').innerHTML="Please put in correct email"
        }
        else{
            document.querySelector('.new-user-email-input').innerHTML=""
        }
    }

    // check if the password is strong enough or not
    const handlePasswordChecker = () => {
        const specialSymbol = ['!', '?', '@', '.', '_', '/', '#', '$', '(', ')', '^', '%',
                               '*', ':', ';', '+'];

        if(inputNewPassword.current.value=='1234' || inputNewPassword.current.value=='abc'
           || inputNewPassword.current.value.length < 8){
            document.querySelector('.new-user-password-input').innerHTML=`<img src=${weakPassword} alt="weak password"/>`;
        }
        else if(specialSymbol.filter(s => inputNewPassword.current.value.includes(s)).length == 0){
            document.querySelector('.new-user-password-input').innerHTML=`<img src=${lessStrongPassword} alt="weak password"/>`;
        }
        else {
            document.querySelector('.new-user-password-input').innerHTML=`<img src=${strongPassword} alt="weak password"/>`;
        }
    }


    // click to show or not the password
    const handlePasswordShown = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }


    return (
        <div className="sign-up-container">
            <form className='sign-up-form'>
                <h1 className='sign-up-title'>SIGN UP WITH</h1>
                <div className='other-sign-up'>
                <ul>
                    <li><a href="wwww.google.co.uk"><button><BsGoogle/></button></a></li>
                    <li><a href="wwww.twitter.com"><button><BsTwitter /></button></a></li>
                    <li><a href="wwww.linkedin.com"><button><FaLinkedinIn /></button></a></li>
                    <li><a href="wwww.github.com"><button><BsGithub /></button></a></li>
                </ul>
                </div>
                <p className="or-line"><div> Or </div></p>
                
                <br/>
                <p>Your username</p>
                <input type="text" ref={inputNewUsername} onChange={handleExisitedUserName}/>
                <p className='new-user-username-input'></p>

                <p>Your Email</p>
                <input type="text" ref={inputNewEmail} onChange={handleCorrectEmail}/>
                <p className='new-user-email-input'></p>

                <p>Password</p>
                <input  type={passwordShown? "text" : "password"} ref={inputNewPassword} onChange={handlePasswordChecker}/><br/>
                <button onClick={handlePasswordShown}>{passwordShown? <AiOutlineEye/> : <AiOutlineEyeInvisible/> }</button>
                <p className='new-user-password-input'></p>
                <br/>
                <input type="checkbox" id='sign-up-condition-box' className='sign-up-terms-box'/>
                <label htmlFor="sign-up-condition-box">I agree to terms & condictions.</label>
                <br/>
                <button onClick={handleSignUp} id="sign-up-btn">Sign up</button>

                <p>Do you already have an account?<a href="/login">Log in</a></p>

            </form>

        </div>
    );
}

export default SignUp;