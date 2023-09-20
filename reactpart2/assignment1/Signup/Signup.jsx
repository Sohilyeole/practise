import "./Signup.css"
function Signup({signup}){
    return(
        <>
         <div className="container">
        <div className="signup-form">
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="Instagram Logo" className="logo"/>
            <h1>Sign up to see photos and videos from your friends.</h1>
            <button className="fb-button">Log in with Facebook</button>
            <div className="separator">
                <div className="line"></div>
                <span className="separator-text">OR</span>
                <div className="line"></div>
            </div>
            <input type="email" placeholder="Email" className="input-field"/>
            <input type="text" placeholder="Full Name" className="input-field"/>
            <input type="text" placeholder="Username" className="input-field"/>
            <input type="password" placeholder="Password" className="input-field"/>
            <button className="signup-button">Sign Up</button>
            <p>By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a>, and <a href="#">Cookies Policy</a>.</p>
        </div>
        <div className="login-section">
            Have an account? <a  href="#" onClick={()=>signup()}>Log in</a>
        </div>
    </div>

        
    </>
    )}

    export default Signup;
