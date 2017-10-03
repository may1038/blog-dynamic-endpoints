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
        <div className="wrapper">
          <div className="postDivSmallWrapper">
            <div className="postDiv" key={post._id}>
              <label className="postListMargin">Author:</label>
              <h2>
                {post.authorsName}
              </h2>
              <label className="postListMargin">Title:</label>
              <Link className="link" to={`showpost/${post._id}`}>
                <h2>
                  {post.title}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="postDivWrapper">
        <div>
          {posts}
        </div>
      </div>
    )
  }
}

export default PostList
