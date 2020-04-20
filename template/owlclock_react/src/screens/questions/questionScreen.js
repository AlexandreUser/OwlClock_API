import React, { useState, useEffect } from "react";
import EmptyWoman from "../../assets/empty.svg";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import api from "../../service/api";
import "./questionScreen.module.css";
function QuestApp(props) {
  return (
    <div className="questionContainer">
      <img
        className="questionImage"
        src={require("../../assets/no-image.jpg")}
      />
      <p className="questionDescription">{props.description}</p>
      {props.responses.map((response) => {
        return <p className="questionTextWithoutSpace">{response.response}</p>;
      })}
      <Link to="/question">
        <button className="questionButton" onClick={() => {}}>
          <p className="questionButtonText">Acessar</p>
        </button>
      </Link>
    </div>
  );
}
export default (props) => {
  let { id } = useParams();
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");
  const [quiz, setQuiz] = useState({});
  const [questionDescription, SetQuestionDescription] = useState("");
  const [rightQuestion, setRightQuetion] = useState("");
  const [wrongQuestions, setWrongQuestions] = useState(["", "", ""]);
  useEffect(() => {
    api.get(`api/v1/quiz/${id}`).then((res) => {
      setQuiz(res.data);
    });
    api.get(`api/v1/question/quiz/${id}`).then((res) => {
      setListOfQuestions(res.data);
    });
  }, []);

  function renderLists() {
    if (listOfQuestions.length === 0) {
      return (
        <div className="emptyContainer">
          <img className="emptyImage" src={EmptyWoman} width="30%" />
          <p className="emptyMessage">
            Você ainda não criou nenhuma pergunta nessa lista :)
          </p>
        </div>
      );
    }
    return listOfQuestions.map((list) => {
      return (
        <QuestApp responses={list.responses} description={list.question} />
      );
    });
  }
  return (
    <div className="App">
      <div className="screenHalf">{renderLists()}</div>
      <div className="otherHalf">
        <div className="mainContainer">
          <p className="mainText">
            Criar suas perguntas para a lista - {quiz.title}
          </p>
          <div className="mainForm">
            <textarea
              cols="36"
              rows="5"
              placeholder="Insira a descrição da sua pergunta"
              onChange={(e) => {
                SetQuestionDescription(e.target.value);
              }}
              style={{ borderRadius: 5 }}
            ></textarea>
            <input
              type="text"
              onChange={(e) => {
                setRightQuetion(e.target.value);
              }}
              value={rightQuestion}
              placeholder="Insira a resposta certa"
            />
            <input
              type="text"
              onChange={(e) => {
                let thisWrongQuestion = wrongQuestions;
                thisWrongQuestion[0] = e.target.value;
                setWrongQuestions(thisWrongQuestion);
              }}
              placeholder="Insira uma resposta errada"
            />
            <input
              type="text"
              onChange={(e) => {
                let thisWrongQuestion = wrongQuestions;
                thisWrongQuestion[1] = e.target.value;
                setWrongQuestions(thisWrongQuestion);
              }}
              placeholder="Insira uma resposta errada"
            />
            <input
              type="text"
              onChange={(e) => {
                let thisWrongQuestion = wrongQuestions;
                thisWrongQuestion[2] = e.target.value;
                setWrongQuestions(thisWrongQuestion);
              }}
              placeholder="Insira uma resposta errada"
            />

            <button
              className="questionButtonForm"
              onClick={() => {
                let responses = [];
                responses.push({ response: rightQuestion, isTrue: true });
                wrongQuestions.map((wrongQuestion) => {
                  responses.push({ response: wrongQuestion, isTrue: false });
                });
                let mappedValues = {
                  quizId: id,
                  question: questionDescription,
                  responses: responses,
                  active: true,
                };
                api.post(`api/v1/question`, mappedValues).then((res) => {
                  setListOfQuestions([...listOfQuestions, res.data]);
                });
              }}
            >
              <p className="questionButtonText">Criar </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
