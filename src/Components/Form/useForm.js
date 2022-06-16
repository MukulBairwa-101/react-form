import { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AppContext } from "../../Context/AppContext";
const useForm = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const [users,setUsers]= appContext.value2;
  const [authUsers, setAuthUsers] = appContext.value4;


 
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    id: 0,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [submitBtnActive, setSubmitBtnActive] = useState(false);
  const [exists, setExists] = useState(false);




  const getUniqueId = () => {
    const uId = uuid().slice(0, 4);
    return uId;
  };
  function validate() {
    let validationError = {};
    

    if (formInput.name.length === 0) {
      validationError.nameError = "Username Required";
    } else if (formInput.name.length < 3)
      validationError.nameError = "Username should be at least 3 characters";

    else if (!formInput.email) {
      validationError.emailError = "email Required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formInput.email)
    ) {
      validationError.emailError = "Email is not valid";
    }
    else if (!formInput.password) {
      validationError.passwordError = "Password Required";
    } else if (formInput.password.length < 2)
      validationError.passwordError = "Password must be at least 8 characters";

    else if (!formInput.cpassword) {
      validationError.cpasswordError = "reenter password to proceed";
    } else if (formInput.password !== formInput.cpassword)
      validationError.cpasswordError = "Password not match";
    else {
      formInput.id = getUniqueId();
      localStorage.setItem("Auth_user", JSON.stringify([...authUsers,formInput]));


      if(!localStorage.getItem("Authenticated")){
        alert("Authentication key added");
        users.push(formInput);
        // setUsers(formInput);
        localStorage.setItem("Authenticated", JSON.stringify(users));
      }
      else {
        // alert("Authentication key already present proceed further");
        let getData = JSON.parse(localStorage.getItem("Authenticated"));
        console.log(getData,"sdsdssdsd");


        let temp = getData.find(item => item.email === formInput.email)
        if(temp){
          alert("already Registered ");
        }
         else {

          users.push(formInput);
          localStorage.setItem("Authenticated", JSON.stringify(users));
          
          
        }


      }
      navigate('/login');


      // setSubmitBtnActive(true); 
    }
    return validationError;


  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
    
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValidationErrors(validate());
    
  };
  

  return {
    handleChange,
    formInput,
    onSubmit,
    validationErrors,
    submitBtnActive,
    exists,
  };
};
export default useForm;
