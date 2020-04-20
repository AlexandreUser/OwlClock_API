import React, { useState, useEffect } from "react";
import EmptyWoman from "./assets/empty.svg";
import api from "./service/api";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuizPage from "./screens/quiz/quizScreen";
import QuestionPage from "./screens/questions/questionScreen";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <QuizPage />
        </Route>
        <Route path="/question/:id">
          <QuestionPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
