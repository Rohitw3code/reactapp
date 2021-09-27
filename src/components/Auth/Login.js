import React, { useRef } from "react";

export default function Login() {
    const ref = useRef(null);
    React.useEffect(() => {
        import("@lottiefiles/lottie-player");
    });

    const loginFunc = () => {
        console.log("hello");
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

                <button type="button" className="btn btn-secondary" onClick={loginFunc} style={{ align: "right" }}>Sign-Up</button>


            </div>

        </>
    );
}
