import React from "react";
import Modal from "react-modal";
import { ScoreButton } from "../../../StyledComponents";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "5rem",
  },
  overlay:{
      marginTop: '5rem',
  }
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement("#root");


export default function StartGamePortal({ modalIsOpen, closeModal}) {


    function startGame(){
        closeModal();
    }

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Start game modal"
        shouldCloseOnOverlayClick={false} >
            <h3>Are you ready ?</h3>
            <ScoreButton onClick={() => startGame()}>Start Game</ScoreButton>
        </Modal>
    )
}
