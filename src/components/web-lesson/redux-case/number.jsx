import React, {Component} from "react";
import {connect} from "react-redux";

class Number extends Component {

    handleClickAddLine = () => {
        this.props.concat("anon love soyo ")
    }

    render() {
        // console.log(this.props.number)
        return (
            <React.Fragment>
                <h3>number is {this.props.number}</h3>
                <hr></hr>
                <button onClick={this.handleClickAddLine}>添加</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {  // 访问state树
    return {
        number: state.number,
    }
}

const mapDispatchToProps = {
    concat: (line)=> {  // concat() 函数被传入props
        return {
            type: "concat",
            str: line,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Number);  // connect() 是一个泛函, 它的返回值是一个函数