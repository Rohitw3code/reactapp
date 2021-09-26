import "firebase/compat/firestore";
import firebase from "../Firebase";

export default class Delete {



    deleteNormalPost(props) {
        firebase.firestore().collection("users").doc(props.id).delete();
        console.log("deleted the post");
        // props.showAlert("post is deleted successfully", "success");
    }


}


