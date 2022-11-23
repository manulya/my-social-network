import React from "react";
import { sendMessageСreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Message from "./Message/Message";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

let state=props.store.getState().dialogsPage;

  let onNewMassageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
    
  };
 
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageСreator());
  };

  return <Dialogs
  updateNewMessageBody={onNewMassageChange}
  sendMessage={onSendMessageClick}
  dialogsPage={state}/>
};

export default DialogsContainer;
