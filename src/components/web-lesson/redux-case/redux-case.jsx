import React, {Component} from "react";
import Number from "./number";
import Textline from "./textline";

class ReduxCase extends Component {
    render() {
        return (
            <React.Fragment>
                <Number />
                <Textline />
            </React.Fragment>
        )
    }
}

export default ReduxCase