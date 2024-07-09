import React, {Component} from "react";
import {Link, Outlet} from "react-router-dom";

class LinuxLesson extends Component {
    state = {
        handouts: [
            {id: 1, title: "introduction"},
            {id: 2, title: "basic instructions"},
            {id: 3, title: "ssh"}
        ]
    }

    render() {
        return (
            <React.Fragment>
                <h1>Linux Lesson</h1>
                <hr/>
                <div>
                    {this.state.handouts.map((handout) => {
                        return (
                            <React.Fragment key={handout.id}>
                                <div>
                                    <Link
                                        to={`/linux/handout/?chapter=${handout.id}`}>{handout.id + ". " + handout.title}</Link>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <hr/>
                <Outlet/>
                <br></br>
                <Link to={"/django/handout/homework/"}>homework</Link>
                <br/>
                <Link to={"/django/handout/tools/"}>tools</Link>
            </React.Fragment>
        )
    }
}

export default LinuxLesson;