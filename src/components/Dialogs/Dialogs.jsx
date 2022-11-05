import React from "react";
import { addMessageСreator, updateMessageTextCreator } from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  let messagesElemets = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessage = React.createRef();

  let onChangeMessage = () => {
    debugger;
    let text = newMessage.current.value;
    props.dispatch(updateMessageTextCreator(text));
    
  };
 
  let addText = () => {
    props.dispatch(addMessageСreator());
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <li> {dialogsElements}</li>
      </div>
      <div className={s.messages}>{messagesElemets}
      <div className={s.sendText}>
        <textarea className={s.textMessage} onChange={onChangeMessage} placeholder="Enter your message" ref={newMessage} value={props.state.newMessageText}/>
        <button className={s.buttons} onClick={addText}>send</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
