import React, { useContext } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import useUpdateScoreboard from "../EndGame/hooks/useUpdateScoreBoard";
import { ScoreButton } from "../../StyledComponents/index";

import { SCOREBOARD } from "../../CONSTANTS";
import Context from "../../Store/Context";

import { cloneDeep } from "lodash";

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

if (process.env.NODE_ENV !== 'test') Modal.setAppElement("#root");

export default function EndGamePortal({
  modalIsOpen,
  closeModal,
  score,
  seconds,
}) {
  const history = useHistory();
  const { state } = useContext(Context);
  const { addUserToBoard } = useUpdateScoreboard();

  function handleClick() {
    let scoreboard = cloneDeep(state.scoreboard);
    addUserToBoard(score, scoreboard);
    closeModal();
    history.push(`${SCOREBOARD}/${score}`);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="End of game modal"
      shouldCloseOnOverlayClick={false}
    >
      {" "}
      {seconds === 0 ? (
        <>
          {" "}
          <h1>You've run out of time !</h1>
          <h5>Your Score : {score}</h5>{" "}
        </>
      ) : (
        <>
          <h1>Oooops! Looks like that was incorrect</h1>
          <h5>Your Score : {score}</h5>
        </>
      )}
      <ScoreButton onClick={() => handleClick()}> Go to scoreboard</ScoreButton>
    </Modal>
  );
}
