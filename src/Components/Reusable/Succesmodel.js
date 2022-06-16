import React,{useState,useContext} from 'react'
import Modal from 'react-modal';
import {AppContext} from "../../Context/AppContext";

const Succesmodel = () => {
    const appContext =useContext(AppContext);
    const [isOpen,setIsopen]  = appContext.value3;
    const [newUser,setNewUser]= appContext.value2;

    // console.log(newUser.formInput.name,'sdsds');
    const openModal = ()=>setIsopen(true);
    const closeModal =()=>setIsopen(false);
    return (
        <div>
            <Modal
        isOpen={isOpen}
        onAfterOpen={openModal}
        onRequestClose={closeModal}
        // style={customStyles}
      >
          {newUser.name ? <h1>Welcome {newUser.name}</h1> :''}
          
          <p>You are registerd succesfully.</p> 
          <button onClick={closeModal}>Close</button>
      </Modal>
        </div>
    )
}

export default Succesmodel;
