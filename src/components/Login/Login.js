import React from 'react';
import GoogleLogin from 'react-google-login';
import './Login.css';

class Login extends React.Component
{
  // To get the details related to chosen gmail
  responseGoogle = (response)=>
  {
    console.log(response);
    console.log(response.profileObj);
  }

  render()
  {
    return(   
      <div className = "login">

        <h3>LOGIN</h3>
        {/*Regular Login*/}
        <label htmlFor = "user-name" className = " user-password">Username </label>
        <input type = "text" className = "input" placeholder = "username"></input><br/>
        <label htmlFor = "password" className = "user-password">Password </label>
        <input type = "password"  className = "input" placeholder = "password"></input><br/>
        <button type = "button" className = "button">Login</button>

        <p>OR</p>

        {/*Google Signin button */}
        <GoogleLogin className = "button"
        clientId = "657282503916-8oui8t12mrha1rs2taulimss026erufe.apps.googleusercontent.com"
        buttonText = "Signin with Google"
        onSuccess = {this.responseGoogle} 
        onFailure = {this.responseGoogle}
        cookiePolicy = {'single_host_origin'}
        />
        
      </div>
    );
  }
}

export default Login;