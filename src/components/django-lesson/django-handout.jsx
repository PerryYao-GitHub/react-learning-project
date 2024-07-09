import React, {Component} from "react";
import {useParams} from "react-router-dom";

class DjangoHandout extends Component {
    state = {};

    render() {
        // console.log(this.props.params)
        return (
            <React.Fragment>
                <h2>Django Handout {this.props.params.no}</h2>
            </React.Fragment>
        )
    }
}

export default (props) => {
    return (
        <DjangoHandout
            {...props}
            params={useParams()}
        />
    )
};