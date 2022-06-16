import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./Validation";
import Succesmodel from "../Reusable/Succesmodel";
import {TiUser} from "react-icons/ti";
import {MdAlternateEmail} from "react-icons/md";
import {BiLock,BiLockOpen} from "react-icons/bi";
const Form = () => {
  const { handleChange, formInput, onSubmit, validationErrors,isSubmitted,submitBtnActive,exists } =
  useForm();

  // console.log(isSubmitted,'form');

 
  return (
    <>
    <Succesmodel  /> 
    <div className="auth-container flex ">
    {/* <div className="form-left-div">
        <a href="/" className="logo">DesignY</a>
    </div> */}
    {/* {isSubmitted ? <Succesmodel /> :''} */}
    <div className="form-container ">
      <div className="flex align-items-center justify-content-center">
        <h2 className="form-heaad">Register</h2>
      </div>
      {exists ? 'user already exists':''}
      <form onSubmit={(e) => onSubmit(e)}>

        <div className="form-input-wrapper flex  ">
          <TiUser  className="input-icon"/>
          <input
            type="text"
            className="form-input"
            placeholder="Username"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            // autoComplete="on"
          />
        </div>
        {validationErrors.nameError !== "" ? (
          <span className="validate-error">{validationErrors.nameError}</span>
        ) : (
          ""
        )}

        <div className="form-input-wrapper flex ">
          <MdAlternateEmail className="input-icon" />
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            name="email"
            value={formInput.email}
            onChange={(e) => handleChange(e)}
            // autoComplete="on"
          />
        </div>
        {validationErrors.emailError !== "" ? (
          <span className="validate-error">{validationErrors.emailError}</span>
        ) : (
          ""
        )}
        <div className="form-input-wrapper flex ">
          <BiLock  className="input-icon"/>
          <input
            type="password"
            className="form-input"
            placeholder="Password"
            name="password"
            value={formInput.password}
            onChange={(e) => handleChange(e)}
            // autoComplete="on"
          />
        </div>
        <span className="validate-error">{validationErrors.passwordError}</span>
        <div className="form-input-wrapper flex ">
          <BiLockOpen className="input-icon" />
          <input
            type="password"
            className="form-input"
            placeholder="Confirm Password"
            name="cpassword"
            value={formInput.cpassword}
            onChange={(e) => handleChange(e)}
            // autoComplete="on"
          />
        </div>
        {validationErrors.cpasswordError !== "" ? (
          <span className="validate-error">{validationErrors.cpasswordError}</span>
        ) : (
          ""
        )}
        <div className="form-btn flex justify-content-center">
          <button type="submit" className={!submitBtnActive ? 'btn':'btn btn-teal'}>
            Submit
          </button>
        </div>
      </form>
      <div className="auth-change-div">
        <h5 className="form-heaad">Already have an account ?</h5>
        <a href="/login" className="btn btn-login-link ">Login</a>
      </div>
    </div>
    </div>
    </>
  );
};

export default Form;
