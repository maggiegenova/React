import React from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserHeader from "./user-header-component";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts(); <- memoize V1
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligne icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
            {/* every post has an userId, so we can just past the id with post.userId */}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list"> {this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  //  fetchPosts <- V1
  fetchPostsAndUsers,
})(PostList);
