import {useHistory, Link } from "react-router-dom"

const SignIn = () => {
    const history = useHistory();
    const homepage = (e) =>{
       history.push("/");
    }
    return (  
        <div className="page">
        <div className="signin">
        <h1> Socialgram </h1>
        <form onSubmit ={homepage} >
        <label htmlFor="email"></label>
             <input type="email" autoCapitalize = "off" required placeholder = "Email" /> <br />
             <label htmlFor="password"></label>
             <input type="password"  required placeholder = "Password"/> <br />
             <button type = "submit" className = "loginButton">Log In</button><br />
             <a href="#" className = "forgot"> Forgotten Password?</a> 
             <hr />
             <br />
             <Link to = "/Signup" className= "Create">Create New Account</Link>
        </form>
        </div>
        </div>
    );
}
 
export default SignIn;