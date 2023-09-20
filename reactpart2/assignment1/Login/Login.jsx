import "./Login.css"
import Signup from "../Signup/Signup";
function Login({login}){
    return(
        <>
        <div className="main-wrapper-login">
            <div className="logo"><img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" /></div>
            <div className="login-form">
                <form >
                    <input type="text" placeholder="Phone number,username,email"/>
                    <input type="text"placeholder="password" />
                    <button type="button" >Log in</button>
                   

                </form>
              
            </div>

            <div className="separator">
                <div className="line"></div>
                <span className="separator-text">OR</span>
                <div className="line"></div>
            </div>
            <div className="forget"><a href="#">Forgot Password?</a></div>
            

            
           
            
           
        </div>
        <div className="main2">
        Don't have an account? <a href="#" onClick={()=>login()}>Sign up</a>
        </div>
        </>
    )

}
export default Login;