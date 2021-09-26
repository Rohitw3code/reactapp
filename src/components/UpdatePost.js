import React, { useState, useContext } from 'react';
// import Delete from "../functions/Delete";
import "firebase/compat/firestore";
import firebase from "../Firebase";
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';


export default function UpdatePost() {
    const item = useContext(userContext);

    const onTextNameChange = (event) => {
        setName(event.target.value);
    }

    const onTextStdChange = (event) => {
        setStd(event.target.value);
    }

    const updatePost = () => {
        firebase.firestore().collection("users").doc(item.id).update({ "name": name, "class": std });
    }



    const [name, setName] = useState("");
    const [std, setStd] = useState("");

    console.log(item.name);

    // setName(item.name);
    // setStd(item.std);


    return (
        <div>
            <h2>Update Post </h2>
            <div className="input-group my-5">
                <span className="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" placeholder="Your name" value={name} onChange={onTextNameChange} className="form-control" />
            </div>

            <div className="input-group my-5">
                <span className="input-group-text">Standard</span>
                <input type="text" aria-label="First name" placeholder="Class" value={std} onChange={onTextStdChange} className="form-control" />
            </div>

            <button type="button" onClick={updatePost} className="btn btn-success" >Upadte</button>


        </div>
    )
}
