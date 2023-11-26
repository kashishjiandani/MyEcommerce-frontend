import MainContext from "./MainContext";
import {useState} from "react"
// import { baseUrl } from "../Utils/Constants";
import { useEffect } from "react";
const MainState = (props) =>{
    
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
    const [userData, setUserData] = useState({});
    useEffect(() => {
        const getUserData = async () => {
            const res = await fetch(`http://localhost:8080/api/v1/profile`, {
                method: "GET",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                  "token":authToken
                }
              });
              const resData = await res.json();
              if(resData.success){
                console.log(resData)
                setUserData(resData.user)
              }else{
                setAuthToken("")
              }
        }
        if(authToken){
            getUserData();
        }
    }, [authToken])

    useEffect(() => {
     let jwt = localStorage.getItem('token')
    //  console.log(jwt);
     if(jwt){
        setAuthToken(jwt);
     }
    }, [])
    
    
    
    return(
        <MainContext.Provider value = {{authToken, setAuthToken, userData, setUserData}}>
            {props.children}
        </MainContext.Provider>
    )
}
export default MainState;