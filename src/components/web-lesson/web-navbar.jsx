import React from "react";
import {Link} from "react-router-dom";

const WebNavbar = (props) => {
    return (
        <React.Fragment>
            <nav className={"navbar navbar-light bg-light"}>
                <div className={"container-fluid"}>
                    <a className={"navbar-brand"} href={"/"}>
                        Boxes Count: {props.boxesCnt}
                    </a>
                    <Link to={"/web/redux/"}>Redux Case</Link>
                </div>
            </nav>
        </React.Fragment>
    )
}

// class WebNavbar extends Component {
//     state = {
//
//     };
//
//     render() {
//         return (
//             <React.Fragment>
//                 <nav className={"navbar navbar-light bg-light"}>
//                     <div className={"container-fluid"}>
//                         <a className={"navbar-brand"} href={"#"}>
//                             Boxes Count: {this.props.boxesCnt}
//                         </a>
//                     </div>
//                 </nav>
//             </React.Fragment>
//         )
//     }
// }

export default WebNavbar;