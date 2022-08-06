import React, {Component, Fragment} from "react";
import LoginForm from "../../components/Login/Form/LoginForm";

class LoginScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <LoginForm/>
            </Fragment>
        )
    }

}

export default LoginScreen;