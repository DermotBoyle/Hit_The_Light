import React from "react";
import Modal from "react-modal";

import {Link} from "react-router-dom";

import { SCOREBOARD, HOME, ABOUT } from "../../CONSTANTS";

import {MenuLinkList} from "../../StyledComponents/index"


const customStyles = {
  content: {
   height: '100%',
   top: '1px',
   width: '100%',
   backgroundColor: '#1a1a1a',
   transition: '2s ease',
  },
  overlay:{
      marginTop: '5rem',
      zIndex: '99'
  }
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement("#root");


export default function MobileMenu({ modalIsOpen, closeModal}) {

    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Start game modal"
        shouldCloseOnOverlayClick={false}
       >
            <MenuLinkList className={modalIsOpen ? 'isOpen' : 'isClosed'}>
            <li>
                  <Link onClick={()=>closeModal()} to={HOME}>Home</Link>
                </li>
            
                <li>
                  <Link onClick={()=>closeModal()} to={`${SCOREBOARD}/_`}>Scoreboard</Link>
                </li>
            </MenuLinkList>
        </Modal>
    )
}
