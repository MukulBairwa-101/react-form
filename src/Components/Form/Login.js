import React, { useState,useEffect,useContext } from "react";
// import useForm from "./useForm";
// import validate from "./Validation";
import {MdAlternateEmail} from "react-icons/md";
import {BiLock,BiLockOpen} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../Context/AppContext";
const Login = () => {
//   const { handleChange, formInput, onSubmit, validationErrors } =
//     useForm(validate);
    const appContext =useContext(AppContext);
    const navigate = useNavigate();




    const [loginData,setLoginData] = useState({
        email:'',
        password:''

    })
    const[loginUser,setLoginUser] =useState({})
    const [validationErrors,setValidationErrors] = useState({})
    const [ isLoggedin,setIsloggedin] = appContext.value5;
    

    const handleRoute = (path) => {
      navigate(`/${path}`);
      // if (path === "login" || path === "register") setAuthRoute(true);
      // else setAuthRoute(false);
    };


    const handleChange =(e)=>{
        const {name , value} = e.target;
        setLoginData({...loginData, [name]:value});
    }

    const handleLogin =(e)=>{
        e.preventDefault()
        setValidationErrors(validateLoginData());

        
    }

    const validateLoginData =()=>{
        let validationError={}
        if(!loginData.email){
            validationError.emailError ='email Required'
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginData.email) )  validationError.emailError ='Email is not valid'
    
    
        else if(!loginData.password){
            validationError.passwordError ='Password Required'
        }
        else if(loginData.password.length < 2 )  validationError.passwordError ='Password must be at least 8 characters'
       
        else {
          let getData = JSON.parse(localStorage.getItem("Authenticated"));
          let temp = getData.find(item => item.email === loginData.email && item.password === loginData.password)
          if(temp){
            alert('succesful login');
            setIsloggedin({
              name: temp.name,
              active: true
            });
            navigate('/');
          }
           else {
            // setExists(false);
           alert('logis details invalid');
            
           setIsloggedin({
            name: '',
            active: false
          });
            
          }
        }

        return validationError;

    }
 
  return (
    <div className="auth-container flex ">
    <div className="form-container ">
    <div className="flex align-items-center justify-content-center">
        <h2 className="form-heaad">Login</h2>
      </div>
      <form onSubmit={(e) => handleLogin(e)}>
        
      <div className="form-input-wrapper flex ">
          <MdAlternateEmail className="input-icon" />
          <input
            type="email"
            className="form-input"
            placeholder=" Email Address"
            name="email"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </div>
        {validationErrors.emailError !== "" ? (
          <span className="validate-error">{validationErrors.emailError}</span>
        ) : (
          ""
        )}
        <div className="form-input-wrapper flex ">
          <BiLock className="input-icon" />
          <input
            type="password"
            className="form-input"
            placeholder=" Enter your password"
            name="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
            autoComplete="off"
          />
        </div>
        <span className="validate-error">{validationErrors.passwordError}</span>
        <div className="form-btn flex justify-content-center">
          <button type="submit" className='btn-teal btn'>
            Login
          </button>
        </div>
      </form>
      <div className="auth-change-div">
        <h5 className="form-heaad">Don't have an account yet ?</h5>
        <a href="/register" className="btn btn-login-link "  >Create</a>
      </div>
      
    </div>
    </div>
  );
};

export default Login;
