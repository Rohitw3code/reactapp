import React, { useContext } from 'react';
// import Delete from "../functions/Delete";
import "firebase/compat/firestore";
import firebase from "../Firebase";
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';

export default function NormalPostItem(props) {
    const item = useContext(userContext);

    function toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    const deletePost = () => {
        firebase.firestore().collection("users").doc(props.id).delete();
        props.showAlert("Post is deleted successfully", "danger");
    }

    const updateId = (props) => {
        item.id = props.id;
        item.name = props.name;
        item.std = props.std;
    }




    return (
        <div className="container">

            <div className="card my-5">
                <div className="card-header"> ID :
                    {props.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.std}</p>
                    {/* <p className="card-text">{timeAgo.format(Date.now() - props.time, 'mini-now')}</p> */}
                    <a>{toDateTime(props.time.seconds).toDateString()}</a>
                    <button type="button" onClick={deletePost} className="btn btn-danger mx-5">delete</button>
                    <Link type="button" to="/updatePost" onClick={() => { updateId(props) }} className="btn btn-primary">update</Link>                </div>
            </div>
        </div >
    )
}
