import React from 'react';
// import Delete from "../functions/Delete";
import "firebase/compat/firestore";
import firebase from "../Firebase";
import { Link } from 'react-router-dom';

export default function NormalPostItem(props) {
    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    const deletePost = () => {
        firebase.firestore().collection("users").doc(props.id).delete();
        props.showAlert("Post is deleted successfully", "danger");
    }




    return (
        <div className="container">

            <div className="card my-5">
                <div className="card-header">
                    {props.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.std}</p>
                    {/* <p className="card-text">{timeAgo.format(Date.now() - props.time, 'mini-now')}</p> */}
                    <a>{toDateTime(props.time.seconds).toDateString()}</a>
                    <button type="button" onClick={deletePost} class="btn btn-danger mx-5">delete</button>
                    <Link type="button" to="/updatePost" class="btn btn-primary">update</Link>                </div>
            </div>
        </div >
    )
}
