import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <p class="text-danger">Field is required</p>
        );
    }
}


const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const userName = e.target.value;
        setUsername(userName);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage('');
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(username, password).then(
                () => {
                    props.history.push("/");
                    window.location.reload();
                },
                (error) => {
                    console.log("Error while login : " + JSON.stringify(error));
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
            setLoading(false);
        }
    };

    return (
        <div className="col-lg-5 mx-auto">
            <div className="card">
                <h3 className="card-header text-primary border-primary">Login</h3>
                <div className="card-body">
                    {/* <div className="justify-content-center" > */}
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <Form onSubmit={handleLogin} ref={form}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    autocomplete="off"
                                    // value={username}
                                    onChange={onChangeUsername}
                                    validations={[required]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    autocomplete="off"
                                    // value={password}
                                    onChange={onChangePassword}
                                    validations={[required]}
                                />
                            </div>

                            <div className="btn-toolbar">
                                <button type="submit" className="btn btn-primary btn-md" disabled={loading}>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}&nbsp;
                                    <span>Login</span>
                                </button>
                            </div>

                            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                        </Form>
                    </div></div>
            </div>
            )
}

            export default Login

