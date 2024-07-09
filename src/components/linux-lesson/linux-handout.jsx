import React, {Component} from "react";
import {useSearchParams} from "react-router-dom";

class LinuxHandout extends Component {
    state = {
        searchedParams: this.props.params[0],
        setSearchedParams: this.props.params[1],
    };

    render() {
        console.log(this.props.params[0].get('chapter'))
        return (
            <React.Fragment>
                <h2>Linux Handout {this.state.searchedParams.get("chapter")}</h2>
            </React.Fragment>
        )
    }
}

export default (props) => {
    return (
        <LinuxHandout
            {...props}
            params={useSearchParams()}
        />
    )
};