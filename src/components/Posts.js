import React, { Component } from 'react'
import "firebase/compat/firestore";
import firebase from "../Firebase";
import NormalPostItem from './NormalPostItem';

export default class Posts extends Component {


    constructor() {
        super();
        this.state = {
            user: [],
            loading: true
        }
        this.ref = firebase.firestore().collection("users").orderBy('time', 'desc');
    }

    async componentDidMount() {
        this.setState({ loading: true });
        // firebase.firestore().collection("users").get().then((item) => {
        //     const items = item.docs.map((doc) => { doc.data() });
        //     this.setState({ loading: false, user: items });
        //     console.log(items[0]);
        // })

        this.ref.onSnapshot((qs) => {
            const items = [];
            qs.forEach((doc) => {
                let idd = {};
                idd["id"] = doc.id;
                let datas = Object.assign({}, idd, doc.data())
                items.push(datas);
            });
            this.setState({ loading: false, user: items });
        });


    }

    render() {
        let { showAlert } = this.props;
        return (
            <div>
                {this.state.user.map((element) => {
                    return <div className="container" key={element.id}>
                        <NormalPostItem showAlert={showAlert} id={element.id} name={element.name} std={element.class} time={element.time} />
                    </div>
                })}
            </div>
        )
    }
}
