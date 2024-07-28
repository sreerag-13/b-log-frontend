import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const CreatePost = () => {
   const[input,setInput]=useState(
        {
            "Message":"",
            "userId": sessionStorage.getItem("userId")
        } 
       
    )
    
    
    const inputhandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:8080/create", input, {
            headers: {
                "token": sessionStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        }).then(
                (response)=>{
                    console.log(response.data)
            
                    if (response.data.status=="status done") {
                        alert("success")
                    } else {
                        alert("something went wronng")
                    }

                }
            ).catch((error)=>{
                console.log(error)
            })

           
    }
  return (

    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Post here</label>
                            <textarea id="" name="Message" value={input.Message} className="form-control" onChange={inputhandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readvalues} className="btn btn-success">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost