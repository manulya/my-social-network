import avatar from "../img/avatar.png"

const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState ={
  dialogs: [
    {
      id: 1,
      name: "Ulyana",
      img: (
        <img src={avatar} alt="ava"/>     ),
    },
    {
      id: 2,
      name: "Kate",
      img: (
        <img src={avatar} alt="ava"/>
      ),
    },
    {
      id: 3,
      name: "Liz",
      img: (
        <img src={avatar} alt="ava"/>
      ),
    },
    {
      id: 4,
      name: "Andrew",
      img: (
        <img src={avatar} alt="ava"/>
      ),
    },
    {
      id: 5,
      name: "Alex",
      img: (
        <img src={avatar} alt="ava"/>
      ),
    },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Nice to hear you" },
    { id: 3, message: "I'm too" },
  ],
  newMessageText: "",
} 

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export const updateMessageTextCreator = (text) => {
  return { type: UPDATE_MESSAGE_TEXT, newMessageText: text };
};
export const addMessageСreator = () => {
  return { type: ADD_MESSAGE };
};

export default dialogsReducer;
