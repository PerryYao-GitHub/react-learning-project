import React, {Component} from "react";
import WebNavbar from "./web-navbar";
import Boxes from "./boxes-case/boxes";
import Solutions from "./solutions-case/solutions";

class WebLesson extends Component {
    state = {
        boxes: [
            {id: 1, x: 200},
            {id: 2, x: 500},
            {id: 3, x: 800},
            {id: 4, x: 400},
            {id: 5, x: 800},
            {id: 6, x: 300},
        ]
    }

    handleClickLeft = (box) => {
        let newBoxes = [...this.state.boxes];   // 浅拷贝
        let changingBox = newBoxes.filter((newBox) => {
            return newBox.id === box.id
        })
        changingBox[0].x -= 5
        this.setState({
            boxes: newBoxes,
        })
    }

    handleClickRight = (box) => {
        let newBoxes = this.state.boxes;
        let changingBox = newBoxes.filter((newBox)=>{
            return newBox.id === box.id;
        });
        changingBox[0].x += 5;
        this.setState({
            boxes: newBoxes,
        })
    }

    handleDelete = (boxId) => {
        // console.log("del ", boxId)
        let boxes = this.state.boxes.filter((box) => {
            return box.id !== boxId;
        })
        this.setState({
            boxes,
        })
    }

    handleReset = () => {
        let boxes = this.state.boxes.map((box) => {
            return {
                id: box.id,
                x: 500
            }
        });
        this.setState({boxes});
    }

    render() {
        return (
            <React.Fragment>
                <h1>Web Lesson</h1>
                <hr />
                <WebNavbar
                    boxesCnt={this.state.boxes.length}
                />
                <Boxes
                    boxes={this.state.boxes}
                    onReset={()=>this.handleReset()}
                    onDelete={(boxId)=>this.handleDelete(boxId)}
                    onClickLeft={(box)=>this.handleClickLeft(box)}
                    onClickRight={(box)=>this.handleClickRight(box)}
                />

                <Solutions></Solutions>
            </React.Fragment>
        );
    }
}

export default WebLesson;