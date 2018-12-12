import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    //grap하고 싶은 데이터에 따라서 props로 값이 넘어옴
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <Link to={"/" + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <div className="center">loading...</div>
    );

    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

//sotre에서 grap할 데이터
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
