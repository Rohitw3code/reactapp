import React, { useRef } from "react";
import firebase from 'firebase/compat/app';
// import { GoogleAuthProvider } from "@firebase/auth";
// import firebase from "../Firebase";
import auth from "firebase/compat/auth"

export default function Login() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    // git it some time to authanticate

    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider).then((res) => {
            console.log(res.user.email)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const loginFunc = () => {
        // var provider = new GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        // firebase.auth().signInWithPopup(provider).then((res) => {
        //     console.log(res.user);
        // }).catch((error) => {
        //     console.log(error.message);
        // })
    }

    return (
        <>
            <div className="container">
                <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets7.lottiefiles.com/packages/lf20_q5pk6p1k.json"
                    style={{ width: "100%", height: "300px", marginTop: "100px" }}
                />

                <button type="button" className="btn btn-secondary" onClick={signInWithGoogle} style={{ align: "right" }}>Sign-Up</button>


            </div>

        </>
    );
}
