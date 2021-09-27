import postContext from "./postContext";

const UserState = (props) => {
    const state = {
        "id": "no_id",
        "title": "no_title",
        "description": "no_description"
    }

    const showAlert1 = () => {
        alert("No :((");
    }




    return (
        <postContext.Provider value={{ state, showAlert1 }}>
            {props.children}
        </postContext.Provider>
    )
}


export default UserState;