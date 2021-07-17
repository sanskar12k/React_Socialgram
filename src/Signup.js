import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SignUp = () => {
     const history = useHistory();
     const validationHandler =  (e) =>{
          e.preventDefault();
         
          history.push('/Signupsuccess')
      } 
    return ( 
        <div className="page">
        <div className="signup">
        <h1> Socialgram </h1>
        <form  onSubmit = {validationHandler}>
        <label htmlFor="email"></label>
             <input type="email" autoCapitalize = "off" required placeholder = "Email"/> <br />
            <label htmlFor="fname"></label>
            <input type="text" required placeholder = "First Name" /> <br />
            <label htmlFor="lname"></label>
            <input type="text" required  placeholder = "Last Name"/>
            <input type="tel" required placeholder = "Contact No."/> <br />
            <select name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option></select>
           
            <label htmlFor="dateofbirth"></label>
            <input type="date" required placeholder="Date of Birth" /> <br />
             <label htmlFor="password"></label>
             <input type="password"  placeholder = "Password"/> <br /> 
             <label htmlFor="password"></label>
             <input type="password"  placeholder = "Confirm Your Password"/> <br /> 
             <button type = "submit" className = "signupButton">  Sign Up </button>
             <p>By signing you agree to our <a href="#">Terms and Conditons</a></p>
             <hr />
             <p>Already have an account? <Link to = "./Signin"> Log In</Link></p>
        </form>
        </div>
        </div>
     );
}
 
export default SignUp;

    