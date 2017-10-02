import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/">
            Polly Blog
          </NavLink>
          <NavLink to="/createpost">Create Post</NavLink>
          <NavLink to="/postlist">Show All Posts</NavLink>
        </nav>
      </div>
    )
  }
}

export default BaseLayout
