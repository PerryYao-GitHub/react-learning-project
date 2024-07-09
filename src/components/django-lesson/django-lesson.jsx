import React, {Component} from "react";
import {Link} from "react-router-dom";

class DjangoLesson extends Component {
    state = {
        handouts: [
            {id: 1, title: "python grammar"},
            {id: 2, title: "git environment"},
            {id: 3, title: "start your first project"},
        ]
    }

    render() {
        return (
            <React.Fragment>
                <h1>Django Lesson</h1>
                <hr/>
                <div>
                    {this.state.handouts.map((handout) => {
                        return (
                            <React.Fragment key={handout.id}>
                                <div>
                                    <Link to={`/django/handout/${handout.id}/`}>{handout.id + ". " + handout.title}</Link>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <hr />
            </React.Fragment>
        )
    }
}

export default DjangoLesson;