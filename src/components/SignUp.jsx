import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate=useNavigate()
  
        const [sig,changedata] =useState(
            {
    
            
                "Email":"",
                "Password":""
    
            }
        )
        const inputhandler = (event) => {
            changedata({ ...sig, [event.target.name]: event.target.value })
        }
        const readvalue = () => {
            console.log(sig)
            axios.post("http://localhost:8080/signin",sig).then((response) => {
                console.log(response.data)
                if (response.data.status=="incorrect password") {
                    alert("incorect password")
    
                } else if(response.data.status=="incorrect email"){
                    alert("incorrect email")
    
                }
                else{
                let token=response.data.token
                let userId=response.data.userId
                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("token",token)
                navigate("/CreatePost")
                }
            }
            ).catch((error)=>{
                console.log(error)
            })
        }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='Email' value={sig.Email} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="text" className="form-control" name='Password' value={sig.Password} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readvalue}>Login</button>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <a href="/signin" className="btn btn-secondary">new register</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp