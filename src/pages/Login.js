import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MainContext from '../Context/MainContext';

const Login = () => {
    const { setAuthToken, setUserData} = useContext(MainContext);
    // console.log(authToken);
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({email:'',password:''})


    const loginUser = async () => {
        // console.log(userDetails)
        const url = "http://localhost:8080/api/v1/login";
      
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails),
          });
      

          if (response.ok) {
            const data = await response.json();
              console.log(data);

            const token = data.token;
            localStorage.setItem("token", token);
            setAuthToken(token);

            const userId = data.user._id;
            localStorage.setItem("userId", userId);
            setUserData(data.user);
            
            console.log("User logged in successfully");
            navigate("/");
          } else {
            console.error("Error:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  return (
    <>
      {/* <!-- form wrapper --> */}
    <div class="container py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">
                LOGIN
            </h2>
            <p class="text-gray-600 mb-6 text-sm">
                Login if you are a returning customer
            </p>
            <form onSubmit={(e) => {
            e.preventDefault();
            loginUser();
          }}>
                <div class="space-y-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email Address <span class="text-primary">*</span>
                        </label>
                        <input type="email" class="input-box" placeholder="Enter your email address"
                        value={userDetails?.email}
                        onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}}/>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">Password <span class="text-primary">*</span></label>
                        <input type="password" class="input-box" placeholder="Enter your password"
                         value={userDetails?.password}
                         onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}}/>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <a href="#" class="text-primary">Forgot Password?</a>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Login
                    </button>
                </div>
            </form>

          

            <p class="mt-4 text-gray-600 text-center">
                Don't have an account? <a href="register.html" class="text-primary">Register Now
                </a>
            </p>
        </div>
    </div>
    {/* <!-- form wrapper end --> */}
    </>
  )
}

export default Login