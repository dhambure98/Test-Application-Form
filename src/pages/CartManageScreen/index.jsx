import React, {Component, Fragment} from "react";
import CartManageForm from "../../components/Cart/Form/CartManageForm";

class CartManageScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <CartManageForm/>
            </Fragment>
        )
    }

}

export default CartManageScreen;