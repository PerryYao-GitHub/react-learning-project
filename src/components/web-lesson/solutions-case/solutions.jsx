import React, {Component} from "react";

class Solutions extends Component {
    state = {
        solutions: [
            {id: 8964, title: "二叉树1", views: 1145},
            {id: 1314, title: "二叉树2", views: 1145},
            {id: 4568, title: "二叉树3", views: 1145},
            {id: 7851, title: "二叉树4", views: 1145},
            {id: 1801, title: "二叉树5", views: 1145},
            {id: 1685, title: "二叉树6", views: 1145},
            {id: 1790, title: "二叉树7", views: 1145},
        ],
    };

    handleClickDelete = (s) => {
        let solutions = this.state.solutions.filter((solution)=>{
            return solution !== s;
        });

        this.setState({
            solutions: solutions,
        });
    };

    render() {
        return (
            <React.Fragment>
                <table className={"table"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>views</th>
                        <th>option</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.solutions.map(
                        (solution) => {
                            return (
                                <tr key={solution.id}>
                                    <td>{solution.id}</td>
                                    <td>{solution.title}</td>
                                    <td>{solution.views}</td>
                                    <td>
                                        <button onClick={() => this.handleClickDelete(solution)} className={"btn btn-danger"}>Delete</button>
                                    </td>
                                </tr>
                            )

                        }
                    )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Solutions;