import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);
