import React, {Component, Fragment} from "react";
import RegistrationFrom from "../../components/Registration/Form/RegistrationFrom";

class RegistrationScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <RegistrationFrom/>
            </Fragment>
        )
    }

}

export default RegistrationScreen;