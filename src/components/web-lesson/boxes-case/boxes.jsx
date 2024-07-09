import React, {Component} from "react";
import Box from "./box"

class Boxes extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.onReset} className={"btn btn-info"}>Reset</button>
                <br/>
                {this.props.boxes.map((box) => {
                    return (<Box
                        key={box.id}
                        box={box}
                        onDelete={() => this.props.onDelete(box.id)}
                        onClickLeft={()=> this.props.onClickLeft(box)}
                        onClickRight={()=> this.props.onClickRight(box)}
                    >
                        box_id: {box.id}
                    </Box>)
                })}
            </React.Fragment>
        )
    }
}

export default Boxes;