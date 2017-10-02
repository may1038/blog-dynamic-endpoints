import React, { Component } from "react"
import { Link } from "react-router-dom"
import ShowPost from "./ShowPost"

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: []
    }
  }

  componentDidMount = () => {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")
      .then(r => r.json())
      .then(posts => {
        this.setState({
          postList: posts
        })
      })
  }

  render() {
    const posts = this.state.postList.map(post => {
      return (
        <div className="postDiv" key={post._id}>
          <h3>
            {post.authorsName}
          </h3>
          <Link className="link" to={`showpost/${post._id}`}>
            <h3>
              {post.title}
            </h3>
          </Link>
          <div className="line">
            <h3>
              {post.blog}
            </h3>
          </div>
        </div>
      )
    })
    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default PostList
