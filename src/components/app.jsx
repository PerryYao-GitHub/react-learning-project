import React, {Component} from "react";
import Navbar from "./navbar"
import {Route, Routes} from "react-router-dom";
import Home from "./home/home";
import LinuxLesson from "./linux-lesson/linux-lesson";
import DjangoLesson from "./django-lesson/django-lesson";
import WebLesson from "./web-lesson/web-lesson";
import DjangoHandout from "./django-lesson/django-handout";
import NotFound from "./not-found/not-found";
import LinuxHandout from "./linux-lesson/linux-handout";
import ReduxCase from "./web-lesson/redux-case/redux-case";

class App extends Component {
    state = {

    };

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />}/>

                    <Route path={"/linux/"} element={<LinuxLesson />} >
                        <Route path={"homework/"} element={<div>This is homework</div>}></Route>
                        <Route path={"tools/"} element={<div>This is tools</div>}></Route>
                    </Route>
                    <Route path={"/linux/handout/"} element={<LinuxHandout />} />

                    <Route path={"/django/"} element={<DjangoLesson />} />
                    <Route path={"/django/handout/:no"} element={<DjangoHandout />} />

                    <Route path={"/web/"} element={<WebLesson />} />
                    <Route path={"/web/redux/"} element={<ReduxCase />} />

                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </React.Fragment>
        )
    };
}

export default App;