import React, {Component} from "react";

class Box extends Component {

    getStyles = () => {
        let styles = {
            width: "50px",
            height: "50px",
            backgroundColor: "#DD8899",
            color: "#FFDD88",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.props.box.x
        }
        if ((this.props.box.x) % 50 >= 25) {
            styles.backgroundColor = '#FFDD88';
            styles.color = '#DD8899'
        }
        return styles;
    }


    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                {this.props.children}
                <div style={this.getStyles()}>
                    {this.props.box.x}
                </div>
                <button onClick={this.props.onClickLeft} className={"btn btn-primary m-2"}>left</button>
                <button onClick={this.props.onClickRight} className={"btn btn-success m-2"}>right</button>
                <button onClick={this.props.onDelete} className={"btn btn-danger m-2"}>Delete</button>
                <br/>
            </React.Fragment>
        );
    }
}

export default Box;