import userContext from "./userContext";

const UserState = (props) => {
    const state = {
        "id": "no_id",
        "name": "no_name",
        "std": "no_std"
    }

    const showAlert1 = () => {
        alert("No :((");
    }




    return (
        <userContext.Provider value={{ state, showAlert1 }}>
            {props.children}
        </userContext.Provider>
    )
}


export default UserState;