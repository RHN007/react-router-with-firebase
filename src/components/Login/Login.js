import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {

    const {singInWithGoogle} =useFirebase();
    return (
        <div>
            <h1>Please Login </h1>
              
              <div  style={{margin: '20px'}}>

                <button onClick={singInWithGoogle}>Google Sign In</button>

              </div>
              
              
              
              <form action="">
                <input type="text" placeholder='Your Name' />
                <br />

                <input type="email" name="" id="" placeholder="Your Email"/>
                <br />
                <input type="password" name="" id="" placeholder='Your Password' />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Login;