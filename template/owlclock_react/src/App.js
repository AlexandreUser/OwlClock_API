import React, { useState } from "react";
import EmptyWoman from "./assets/empty.svg";
import "./App.css";
function QuestApp(props) {
  return (
    <div className="questionContainer">
      <img className="questionImage" src={require("./assets/no-image.jpg")} />
      <p className="questionText">{props.title}</p>
      <p className="questionDescription">{props.description}</p>
      <button className="questionButton" onClick={() => {}}>
        <p className="questionButtonText">Acessar</p>
      </button>
    </div>
  );
}
function App() {
  let [listOfLists, setListOfLists] = useState([]);
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");
  function renderLists() {
    if (listOfLists.length === 0) {
      return (
        <div className="emptyContainer">
          <img className="emptyImage" src={EmptyWoman} width="150" />
          <p className="emptyMessage">Você ainda não criou nenhuma lista :)</p>
        </div>
      );
    }
    return listOfLists.map((list) => {
      return <QuestApp title={list.title} description={list.description} />;
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
                setListOfLists([
                  ...listOfLists,
                  {
                    title: listName,
                    description: listDescription,
                  },
                ]);
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
}

export default App;
