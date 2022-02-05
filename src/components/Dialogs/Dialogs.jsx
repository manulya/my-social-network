import React from "react";
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

  let addText = () => {
    debugger;
    let text = newMessage.current.value;
    props.addMessage(text);
    text = newMessage.current.value='';
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <li> {dialogsElements}</li>
      </div>
      <div className={s.messages}>{messagesElemets}
      <div className={s.sendText}>
        <textarea ref={newMessage}></textarea>
        <button onClick={addText}>send</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
