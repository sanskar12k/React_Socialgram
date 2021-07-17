import { Link } from "react-router-dom";
import logo from "./logo192.png";
import Signupsucces from "./Signupsucces";
const Navbar = () => {
    return ( 
     <nav className="navbar">
     <img src= {logo} alt="Logo"  height ="70px"/>
     
        <div className="links"> 
        <Link to ="/">Home</Link>
        <Link to ="/Signin">Sign In</Link>
        <Link to="/Signup">Sign Up</Link>
        </div>    
        </nav>
        );
}
 
export default Navbar;
    

 
