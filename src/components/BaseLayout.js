import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink className="pollyBlog" exact to="/">
            Polly Blog
          </NavLink>
          <NavLink className="aNav" to="/createpost">
            Create Post
          </NavLink>
          <NavLink className="aNav" to="/postlist">
            Show All Posts
          </NavLink>
        </nav>

        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
