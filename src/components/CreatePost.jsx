import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [input, setInput] = useState({
        "Message": "",
        "userId": ""
    });

    useEffect(() => {
        const userId = sessionStorage.getItem("userId");
        if (userId) {
            setInput(prevState => ({ ...prevState, userId }));
        } else {
            console.error("User ID is not found in sessionStorage.");
            // Optionally handle this case (e.g., redirect to login)
        }
    }, []);

    const inputhandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const readvalues = () => {
        console.log(input);
        axios.post("http://localhost:8080/create", input, {
            headers: { 'token': sessionStorage.getItem('token') }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Error creating post:", error);
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="message" className="form-label">Post here</label>
                                <textarea id="message" name="Message" value={input.Message} className="form-control" onChange={inputhandler}></textarea>
                            </div>
                            <div className="col-12">
                                <button onClick={readvalues} className="btn btn-success">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
