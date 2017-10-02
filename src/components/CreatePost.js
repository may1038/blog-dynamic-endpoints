import React, { Component } from "react"

class CreatePosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authorsName: "",
      title: "",
      blog: ""
    }
  }

  handleAuthorsNameChange = event => {
    this.setState({
      authorsName: event.target.value
    })
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleBlogEntryChange = event => {
    this.setState({
      blog: event.target.value
    })
  }

  addToList = event => {
    event.preventDefault()

    let listItem = JSON.stringify(this.state)

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(r => {
        console.log(r, "Yay")
      })
      .catch(err => {
        console.log(err, "Boo")
      })
    this.setState({
      authorsName: "",
      title: "",
      blog: ""
    })
  }
  render() {
    return (
      <div className="form">
        <div className="insideForm">
          <form onSubmit={this.addToList} action="">
            <label>Authors Name:</label>
            <div className="inputMargin">
              <input
                type="text"
                value={this.state.authorsName}
                onChange={this.handleAuthorsNameChange}
              />
            </div>
            <label>Title:</label>
            <div className="inputMargin">
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <label>Write Your Blog:</label>
            <div className="inputMargin">
              <textarea
                name=""
                id=""
                cols="100"
                rows="20"
                value={this.state.blog}
                onChange={this.handleBlogEntryChange}
              />
            </div>
            <div className="inputMargin">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CreatePosts
