import React, { useState, useEffect } from "react";
import EmptyWoman from "../../assets/empty.svg";
import { Link } from "react-router-dom";
import api from "../../service/api";
import "./quizScreen.module.css";
function QuestApp(props) {
  return (
    <div className="questionContainer">
      <img
        className="questionImage"
        src={require("../../assets/no-image.jpg")}
      />
      <p className="questionText">{props.title}</p>
      <p className="questionDescription">{props.description}</p>
      <Link to={"/question/" + props.id}>
        <button className="questionButton" onClick={() => {}}>
          <p className="questionButtonText">Acessar</p>
        </button>
      </Link>
    </div>
  );
}
export default (props) => {
  let [listOfLists, setListOfLists] = useState([]);
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");
  useEffect(() => {
    api.get("api/v1/quiz").then((res) => {
      setListOfLists(res.data);
    });
  }, []);

  function renderLists() {
    if (listOfLists.length === 0) {
      return (
        <div className="emptyContainer">
          <img className="emptyImage" src={EmptyWoman} width="30%" />
          <p className="emptyMessage">Você ainda não criou nenhuma lista :)</p>
        </div>
      );
    }
    return listOfLists.map((list) => {
      return (
        <QuestApp
          id={list._id}
          title={list.title}
          description={list.description}
        />
      );
    });
  }
  return (
    <div className="App">
      <div className="screenHalf">{renderLists()}</div>
      <div className="otherHalf">
        <div className="mainContainer">
          <p className="mainText">
            Utilize este formulário para criar suas listas
          </p>
          <div className="mainForm">
            <input
              type="text"
              onChange={(e) => {
                setListName(e.target.value);
              }}
              value={listName}
              placeholder="Insira o titulo da lista"
            />
            <input
              type="text"
              onChange={(e) => {
                setListDescription(e.target.value);
              }}
              value={listDescription}
              placeholder="Insira a descrição da lista"
            />
            <button
              className="questionButtonForm"
              onClick={() => {
                api
                  .post("/api/v1/quiz", {
                    title: listName,
                    description: listDescription,
                    active: true,
                    author: "Owlclock team",
                  })
                  .then((res) => {
                    setListOfLists([
                      ...listOfLists,
                      {
                        title: res.data.title,
                        description: res.data.description,
                        _id: res.data._id,
                      },
                    ]);
                  });
                setListName("");
                setListDescription("");
              }}
            >
              <p className="questionButtonText">Criar lista</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
