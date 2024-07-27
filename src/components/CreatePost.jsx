import React, { useState } from 'react'

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
    }
  return (
    <div>
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