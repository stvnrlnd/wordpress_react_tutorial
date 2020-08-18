import React, { Component } from "react";
import axios from "axios";

class PostView extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            post: {}
        };

        this.htmlMarkup = this.htmlMarkup.bind();
    }

    componentDidMount() {
        const slug = this.props.match.params.slug;

        axios
            .get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`)
            .then(post => {
                this.setState({
                    post: post.data[0]
                });
            });
    }

    htmlMarkup(html) {
        return { __html: html };
    }

    render() {
        let build;

        if (this.state.post.title) {
            build = (
                <div>
                    <h1>{this.state.post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={this.htmlMarkup( this.state.post.content.rendered )} />
                </div>
            );
        } else {
            build = <div />;
        }

        return build;
    }
}
  
export default PostView;