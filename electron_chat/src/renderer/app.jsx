import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

import firebase from "firebase/firebase-browser";
//import firebase from "firebase";

const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="login" component={Login} />
            <Route path="signup" component={Signup} />
            <Route path="rooms" component={Rooms}>
                <Route path=":roomId" component={Room} />
            </Route>            
        </Route>
    </Router>
);

if (!location.hash.length) {
    location.hash = "#/login";
}

// Firebaseの初期化
var config = {
    apiKey: "AIzaSyDRTMqLMTVmHA-94FeNZYFelWBfPn4K8M4",
    authDomain: "electron-chat-c8624.firebaseapp.com",
    databaseURL: "https://electron-chat-c8624.firebaseio.com",
    projectId: "electron-chat-c8624",
    storageBucket: "electron-chat-c8624.appspot.com",
    messagingSenderId: "1008268547483"
};
var db = firebase.initializeApp(config);
//db.databese();

render(appRouting, document.getElementById("app"));