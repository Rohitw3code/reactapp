import React, { useState } from 'react'
import "firebase/compat/firestore";
import firebase from "../Firebase";

export default function WriteNormalPost(props) {

    const newPost = () => {

        if (name.trim() !== "" || std.trim() !== "") {
            const userData = {
                name: name,
                class: std,
                time: firebase.firestore.FieldValue.serverTimestamp()
            }
            firebase.firestore().collection("users").doc().set(userData);
            props.showAlert("Posted Successfully", "success");

        }

    }

    const onTextNameChange = (event) => {
        setName(event.target.value);
    }

    const onTextStdChange = (event) => {
        setStd(event.target.value);
    }

    const [name, setName] = useState("");
    const [std, setStd] = useState("");

    return (
        <div>
            <h2>Create New Post</h2>
            <div className="input-group my-5">
                <span className="input-group-text">First and last name</span>
                <input type="text" aria-label="First name" placeholder="Your name" value={name} onChange={onTextNameChange} className="form-control" />
            </div>

            <div className="input-group my-5">
                <span className="input-group-text">Standard</span>
                <input type="text" aria-label="First name" placeholder="Class" value={std} onChange={onTextStdChange} className="form-control" />
            </div>

            <button type="button" className="btn btn-success" onClick={newPost}>Post</button>


        </div>
    )
}
