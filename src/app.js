import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostList from "./components/postList";
import PostView from "./components/postView";

const App = () => (
    <Router>
        <div>
            <section className="section container content">
                <Route exact path="/" component={PostList} />
                <Route path="/:slug" component={PostView} />
            </section>
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));