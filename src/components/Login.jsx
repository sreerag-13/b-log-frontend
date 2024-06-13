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
    const inputhandler = (event) => {
        changedata({ ...sig, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(sig)
        axios.post("http://localhost:8080/sign",sig).then((response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                alert("success")

            } else {
                alert("error")

            }
        }
        )
    }
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row">
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
                            <input type="text" className="form-control" name='Password' value={sig.Password} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>sigin</button>
                            <a href="/signin">register</a>
                            <a href="/">login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login