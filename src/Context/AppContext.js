import React,{useState,createContext} from 'react'
export const AppContext = createContext();

export const Provider = (props) => {
    const [ authRoute,setAuthRoute] = useState(false);
    const [isOpen,setIsopen] = useState(false);
    const [ authUsers,setAuthUsers]= useState([]);
    const [users,setUsers]= useState([]);
    const [ isLoggedin,setIsloggedin] = useState({name:'',active:false});



    const globalStateObject ={
        value1:[ authRoute,setAuthRoute],
        value2:[users,setUsers],
        value3:[isOpen,setIsopen],
        value4:[ authUsers,setAuthUsers],
        value5:[ isLoggedin,setIsloggedin],

    }

    return (
    <AppContext.Provider value={globalStateObject}>
        {props.children}
      </AppContext.Provider>
    )
}

export default AppContext;