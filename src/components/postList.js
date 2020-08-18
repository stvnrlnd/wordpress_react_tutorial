import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
        
        this.htmlMarkup = this.htmlMarkup.bind();
    }

    componentDidMount() {
        axios
            .get("https://techcrunch.com/wp-json/wp/v2/posts")
            .then(posts => {
                this.setState({
                    posts: posts.data
                });
            });
    }

    htmlMarkup(html) {
        return { __html: html };
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <Link to={`/${post.slug}`}>
                            <h3>{post.title.rendered}</h3>
                        </Link>
                        <div dangerouslySetInnerHTML={this.htmlMarkup( post.excerpt.rendered )} />
                    </div>
                ))}
            </div>
        );
    }
}
  
export default PostList;