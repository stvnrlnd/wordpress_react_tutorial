import React, { Component } from "react";
import axios from "axios";

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
                    <div className="card" key={post.id}>
                        <div className="card-content">
                            <h3>{post.title.rendered}</h3>
                            <div dangerouslySetInnerHTML={this.htmlMarkup( post.excerpt.rendered )} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
  
export default PostList;