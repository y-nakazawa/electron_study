import React from "react";
import { Link } from "react-router";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h2>Signup</h2>
                <Link to="/rooms">Login</Link> <br />
                <Link to="/login">cancel</Link>                
            </div>
        );
    }
}
