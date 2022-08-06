import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Typography} from "@mui/material";

class HomePageOne extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.title__header}>
                <Typography component="h1" variant="h5"> Sign in </Typography>
                <button
                    className="MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root css-1ujsas3"
                >
                    Text
                </button>
            </div>
        )
    }
}

export default withStyles(styleSheet)(HomePageOne)

