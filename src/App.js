import React from 'react';
import RecipesList from "./containers/RecipesList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/App.scss"
import 'material-design-icons/iconfont/material-icons.css';

function App() {
  return (
      <Router>
          <Route path="/" exact component={RecipesList} />
      </Router>
  );
}

export default App;
