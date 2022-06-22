import { BsGoogle, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useRef, useEffect, useState } from 'react';
import weakPassword from '../images/Frame_1242_(1).png';
import lessStrongPassword from '../images/Frame 1243.png';
import strongPassword from '../images/Frame 1244.png';
import './SignUp.css';

const SignUp = ({ isLogin, setIsLogin, currentPodCastAcc, setCurrentPodCastAcc }) => {

    const inputNewEmail = useRef();
    const inputNewPassword = useRef();
    const inputNewUsername = useRef();
    const [allUsers, setAllUsers] = useState();
    const [passwordShown, setPasswordShown] = useState(false);
    const [allowedSignup, setAllowedSignup] = useState([false, false, false]);

    console.log(allowedSignup);
    // get all users
    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(data => setAllUsers(data))
    }, [])

    // postmapping, create a new user
    const handleSignUp = (event) => {
        event.preventDefault();

        if (allowedSignup.includes(false)) return;


        const newPodcastUser = {
            username: inputNewUsername.current.value,
            password: inputNewPassword.current.value,
            email: inputNewEmail.current.value,
            admin: false
        };

        fetch("http://localhost:8080/users",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPodcastUser)
            })
            .then(response => response.json())
            .then(savedPodcastUser => setCurrentPodCastAcc(savedPodcastUser))
        setIsLogin(!isLogin);

    }

    // check if the username already exists
    const handleExisitedUserName = () => {

        const allUserNames = allUsers.map(user => { return user.username; });
        // initialise a checker, index 0
        let userNameChecker = [false, allowedSignup[1], allowedSignup[2]];

        if (allUserNames.includes(inputNewUsername.current.value)) {
            document.querySelector('.new-user-username-input').innerHTML = "This username already exists";

            // didn't pass the username checker
            setAllowedSignup(userNameChecker);

        }
        else {
            document.querySelector('.new-user-username-input').innerHTML = "";

            // pass username checker
            userNameChecker = [true, allowedSignup[1], allowedSignup[2]];
            setAllowedSignup(userNameChecker);

        }

    }

    // check if it is the right format of email address
    const handleCorrectEmail = () => {
        // initialise a checker, index 1
        let userEmailChecker = [allowedSignup[0], false, allowedSignup[2]];

        if (!inputNewEmail.current.value.includes("@")) {
            document.querySelector('.new-user-email-input').innerHTML = "Please put in the correct email"

            // didn't pass the email checker
            setAllowedSignup(userEmailChecker);
        }
        else {
            document.querySelector('.new-user-email-input').innerHTML = "";

            // pass email checker
            userEmailChecker = [allowedSignup[0], true, allowedSignup[2]];
            setAllowedSignup(userEmailChecker);

        }
    }

    // check if the password is strong enough or not
    const handlePasswordChecker = () => {

        // initialise a checker, index 2
        let userPasswordChecker = [allowedSignup[0], allowedSignup[1], false];

        const specialSymbol = ['!', '?', '@', '.', '_', '/', '#', '$', '(', ')', '^', '%',
            '*', ':', ';', '+'];

        if (inputNewPassword.current.value == '1234' || inputNewPassword.current.value == 'abc'
            || inputNewPassword.current.value.length < 8) {
            document.querySelector('.new-user-password-input').innerHTML = `<img src=${weakPassword} alt="weak password"/>`;

            // didn't pass the password checker
            setAllowedSignup(userPasswordChecker);
        }
        else if (specialSymbol.filter(s => inputNewPassword.current.value.includes(s)).length == 0) {
            document.querySelector('.new-user-password-input').innerHTML = `<img src=${lessStrongPassword} alt="less strong password"/>`;

            // didn't pass the password checker
            setAllowedSignup(userPasswordChecker);
        }
        else {
            document.querySelector('.new-user-password-input').innerHTML = `<img src=${strongPassword} alt="strong password"/>`;

            // pass password checker 
            userPasswordChecker = [allowedSignup[0], allowedSignup[1], true];
            setAllowedSignup(userPasswordChecker);

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
                        <li><a href="wwww.twitter.com" className="button-a-tag"><button className="other-sign-up-button-twitter"><BsTwitter className="other-sign-up-icons-twitter" /></button></a></li>
                        <li><a href="wwww.google.co.uk" className="button-a-tag"><button className="other-sign-up-button-google"><BsGoogle className="other-sign-up-icons-google" /></button></a></li>
                        <li><a href="wwww.linkedin.com" className="button-a-tag"><button className="other-sign-up-button-linkedin"><FaLinkedinIn className="other-sign-up-icons-linkedin" /></button></a></li>
                        <li><a href="wwww.github.com" className="button-a-tag"><button className="other-sign-up-button-github"><BsGithub className="other-sign-up-icons-github" /></button></a></li>
                    </ul>
                </div>
                <p className="or-line"><span> Or </span></p>

                <br />
                <p className="sign-up-input-title">Your username</p>
                <input type="text" ref={inputNewUsername} onChange={handleExisitedUserName} className="sign-up-input-box" />
                <p className='new-user-username-input'></p>

                <p className="sign-up-input-title">Your Email</p>
                <input type="text" ref={inputNewEmail} onChange={handleCorrectEmail} className="sign-up-input-box" />
                <p className='new-user-email-input'></p>

                <p className="sign-up-input-title">Password</p>
                <input type={passwordShown ? "text" : "password"} ref={inputNewPassword} onChange={handlePasswordChecker} className="sign-up-input-box" /><br />
                <button onClick={handlePasswordShown} className="password-shown-button">{passwordShown ? <AiOutlineEye className="password-eye" /> : <AiOutlineEyeInvisible className="password-eye" />}</button>
                <p className='new-user-password-input'></p>
                <br />
                <input type="checkbox" id='sign-up-condition-box' className='sign-up-terms-box' />
                <label htmlFor="sign-up-condition-box" >I agree to terms & conditions.</label>
                <br />
                <button onClick={handleSignUp} className='sign-up-btn'>Sign up</button>

                <p>Do you already have an account? <a href="/login">Log in</a></p>

            </form>

        </div>
    );
}

export default SignUp;