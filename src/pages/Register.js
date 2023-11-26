import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

    const [userDetails, setUserDetails] = useState({name:'',email:'',password:''})
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmTandC, setConfirmTandC] = useState(false)

    const checkDetails = async() =>{
        if(!confirmTandC){
            Toast.fire({
                icon: 'error',
                title: 'You have not agreed to the Terms and Conditions',
              })
              return;
        }
        if(confirmPassword!==userDetails.password){
            Toast.fire({
                icon: 'error',
                title: 'Confirm Password does not match with password',
              })
              return;
        }
        if(userDetails.password.length<8){
            Toast.fire({
                icon: 'error',
                title: 'Password must be at least 8 characters',
              })
              return;
        }

        registerUser();
    }

    const registerUser = async () => {
        console.log(userDetails)
        const url = "http://localhost:8080/api/v1/register";
      
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails),
          });
      
          console.log("Full response:", response); 
      
          if (response.ok) {
            // const data = await response.json();
            // console.log(data);
            console.log("User created successfully");
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
                Create an account
            </h2>
            <p class="text-gray-600 mb-6 text-sm">
                Register here if you don't have account
            </p>
            <form onSubmit={(e) => {
            e.preventDefault();
            checkDetails();
          }}>
                <div class="space-y-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Full Name <span class="text-primary">*</span>
                        </label>
                        <input type="text" class="input-box" placeholder="Enter your name" 
                        value={userDetails?.name}
                        onChange={(e)=>{setUserDetails({...userDetails,name:e.target.value})}}/>
                    </div>
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
                    <div>
                        <label class="text-gray-600 mb-2 block">Confirm Password 
                            <span class="text-primary">*</span>
                        </label>
                        <input type="password" class="input-box" placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    </div>
                </div>
                <div class="flex items-center mt-6">
                    <input type="checkbox" id="agreement"
                        class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                        value={confirmTandC}
                        onChange={(e)=>{setConfirmTandC(true)}}/>
                    <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">
                        I have read and agree to the
                        <a href="#" class="text-primary"> Terms & Conditions</a>
                    </label>
                </div>
                <div class="mt-4">
                    <button type="submit"
                        class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Create Account
                    </button>
                </div>
            </form>
            <p class="mt-4 text-gray-600 text-center">
                Already have an account? <a href="/login" class="text-primary">Login Now</a>
            </p>
        </div>
    </div>
    {/* <!-- form wrapper end --> */}
    </>
  )
}

export default Register