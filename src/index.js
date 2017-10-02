import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import ShowPost from "./components/ShowPost"

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Route exact path="/" component={BaseLayout} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/postlist" component={PostList} />
        <Route path="/showpost/:id" component={ShowPost} />
      </BaseLayout>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
