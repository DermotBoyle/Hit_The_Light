import React from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

import { ScoreButton } from "../../StyledComponents/index";

import { SCOREBOARD } from "../../CONSTANTS";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function EndGamePortal({ modalIsOpen, closeModal, score }) {
  const history = useHistory();

  function handleClick() {
    closeModal();
    history.push(SCOREBOARD);
  }


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>Oooops! Looks like that was incorrect</h1>
      <h5>Your Score : {score}</h5>
      <ScoreButton onClick={() => handleClick()}> Go to scoreboard</ScoreButton>
    </Modal>
  );
}
