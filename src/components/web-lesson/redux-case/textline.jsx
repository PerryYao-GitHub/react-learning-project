import React, {Component} from "react";
import {connect} from "react-redux";

class Textline extends Component {
    handleClickAddOne = () => {
        this.props.add(1);
    }

    handelClickSubOne = () => {
        this.props.sub(1);
    }

    render() {
        // console.log(this.props.textline)
        return (
            <React.Fragment>
                <h3>textline is {this.props.textline}</h3>
                <hr />
                <button onClick={this.handleClickAddOne}>Add</button>
                <button onClick={this.handelClickSubOne}>Sub</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        textline: state.textline,
    }
}

const mapDispatchToProps = {
    add: (val) => {
        return {
            type: "add",
            val: val,
        }
    },

    sub: (val) => {
        return {
            type: "sub",
            val: val,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Textline);