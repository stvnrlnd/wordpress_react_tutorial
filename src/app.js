import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostList from "./components/postList";

const App = () => (
    <Router>
        <div>
            <section className="section container content">
                <Route exact path="/" component={PostList} />
            </section>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));