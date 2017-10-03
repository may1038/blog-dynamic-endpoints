import React, { Component } from "react"

class ShowPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postItem: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params

    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          postItem: json
        })
      })
  }
  render() {
    return (
      <div className="showPost">
        <div className="postItemTitle">
          <div>
            {this.state.postItem.title}
          </div>
        </div>
        <div className="postItem">
          <div className="postItemBlog">
            <div>
              {this.state.postItem.blog}
            </div>
          </div>
        </div>
        <div className="postItemName">
          <div>
            - {this.state.postItem.authorsName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowPosts
