import React, {useRef} from 'react';
import {auth} from '../firebase.js';
import './SignupScreen.css';

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
            ).then((authUser)=>{
                console.log(authUser);
            }).catch((error)=>{
                alert(error.message);

            });

    };

    const signIn=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value)
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((err)=>{
            alert(err.message);
        })
    };



  return (
    <div className="signupScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email Address' />
            <input ref={passwordRef} type="password" placeholder='Password'/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <h3><span className='bottomGrey'>New to Netflix?</span> <span className='bottomRest' onClick={register}> Sign up now.</span></h3>
        </form>
    </div>
  )
}

export default SignupScreen;