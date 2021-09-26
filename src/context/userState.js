import { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
    const state1 = {
        "id": "no_id",
        "name": "no_name",
        "std": "no_std"
    }

    // const [state, setState] = useState(state1);



    return (
        <userContext.Provider value={state1}>
            {props.children}
        </userContext.Provider>
    )
}


export default UserState;