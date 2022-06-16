export default function validate(formInput){
    let validationError={}
    if(formInput.name.length === 0 ){
        validationError.nameError ='Username Required'
    }
    else if(formInput.name.length < 3)  validationError.nameError ='Username should be at least 3 characters'

    if(!formInput.email){
        validationError.emailError ='email Required'
    }
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formInput.email) )  validationError.emailError ='Email is not valid'


    if(!formInput.password){
        validationError.passwordError ='Password Required'
    }
    else if(formInput.password.length < 2 )  validationError.passwordError ='Password must be at least 8 characters'

    if(!formInput.cpassword){
        validationError.cpasswordError ='reenter password to proceed'
    }
    else if(formInput.password !== formInput.cpassword )  validationError.cpasswordError ='Password not match'

    
    return validationError;

}