import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, {Component} from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../../components/common/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";

class LoginScreenThree extends Component {
    constructor(props) {
        super(props);
        // to values assign create this.statement
        this.state = {
            userName: 'admin',
            pw: 'admin',
            formData: {
                user_name: '',
                password: ''
            },
            //for snackbar props
            open: false,
            message: '',
            severity: ''
        }
    }

    checkValidity() {
        console.log("Login button clicked!")

        console.log(this.state.formData)

        let formData = this.state.formData

        if (formData.user_name === this.state.userName && formData.password === this.state.pw) {
            console.log('credential matched!')
            this.setState({
                open: true,
                message: 'User credential matching success!',
                severity: 'success'
            })
        } else {
            console.log('credential didn\'t matche!')
            this.setState({
                open: true,
                message: 'User credential not matching!',
                severity: 'error'
            })
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login__cover}>

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <div className={classes.title__container}>
                        <Typography component="h1" variant="h5"> Sign in </Typography>
                    </div>

                    <div className={classes.form__container}>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.user_name = e.target.value
                                this.setState({ formData })
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            type="password"
                            label="Password"
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let formData = this.state.formData
                                formData.password = e.target.value
                                this.setState({ formData })
                            }}
                        />
                    </div>
                    <div className={classes.btn__container}>
                        <GDSEButton
                            variant="contained"
                            label="Login"
                            onClick={() => {
                                this.checkValidity()
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(LoginScreenThree)