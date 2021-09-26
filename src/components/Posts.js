import React, { Component } from 'react'
import "firebase/compat/firestore";
import firebase from "../Firebase";
import NormalPostItem from './NormalPostItem';

export default class Posts extends Component {


    constructor() {
        super();
        this.state = {
            uniqueId: [],
            items: [],
            user: [],
            loading: true,
            lastId: null
        }
        this.ref = firebase.firestore().collection("users").orderBy('time', 'desc').limit(4);
    }


    async componentDidMount() {
        this.setState({ loading: true });
        // firebase.firestore().collection("users").get().then((item) => {
        //     const items = item.docs.map((doc) => { doc.data() });
        //     this.setState({ loading: false, user: items });
        //     console.log(items[0]);
        // })

        this.ref.onSnapshot((qs) => {
            qs.forEach((doc) => {
                let idd = {};
                idd["id"] = doc.id;
                let datas = Object.assign({}, idd, doc.data());
                this.state.items.push(datas);
                this.setState({ lastId: doc });
                this.setState({ loading: false });
            });
            this.setState({ user: this.state.items });
        });


    }

    render() {
        let { showAlert } = this.props;
        const loadMore = () => {
            if (!this.state.loading) {
                console.log("hello");
                this.setState({ loading: true });
                this.ref = firebase.firestore().collection("users").orderBy('time', 'desc').startAfter(this.state.lastId).limit(4);
                let l = this.ref.onSnapshot((qs) => {
                    qs.forEach((doc) => {
                        let idd = {};
                        idd["id"] = doc.id;
                        let datas = Object.assign({}, idd, doc.data());
                        this.state.items.push(datas);
                        this.state.uniqueId.push(doc.id);
                        this.setState({ lastId: doc });
                        return false;
                    });
                    l();
                    this.setState({ loading: true, user: this.state.items });
                    console.log("mannn " + l);
                });
            }
        }

        window.onscroll = function () { myFunction() };
        const myFunction = () => {
            if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
                if (!this.state.loading) {
                    loadMore();
                    console.log("LoadMore : " + this.state.loading);
                }
            }
        }


        return (
            <div>
                <h2 className="container mx-2">All Post</h2>
                {this.state.user.map((element) => {
                    return <div className="container" key={element.id}>
                        <NormalPostItem showAlert={showAlert} id={element.id} name={element.name} std={element.class} time={element.time} />
                    </div>
                })}
                <div className="container mx-5 my-5">
                    <button type="button" onClick={loadMore} className="btn btn-secondary">Load More</button>
                </div>
            </div>
        )
    }
}
