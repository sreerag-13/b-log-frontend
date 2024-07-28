import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [sig,changedata] = useState(
        {

            "Name":"",
            "Email":"",
            "Password":""

        }
    )
    //value read function
    const inputhandler=(event) => {
        changedata({...sig, [event.target.name]: event.target.value})
    }
    const readvalue=()=> {
        let newInput={ "Name":sig.Name,"Email":sig.Email,"Password":sig.Password}
        axios.post("http://localhost:8080/sign",newInput).then((response) => {
            console.log(response.data)
            if (response.data.status=="success done") {
                alert("success")

            } else {
                alert("email already exist")

            }
        }
        )
    }
    return (
        <div>

            <div className="container">
                <div className="row">
                <h1>BLOG APP </h1>
                <h4><center>Register</center></h4>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='Name' value={sig.Name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='Email' value={sig.Email} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='Password' value={sig.Password} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>register</button>
                
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <a href="/" className="btn btn-secondary">home</a>
                    </div>
                   
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login