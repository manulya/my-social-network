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
  newMessageBody: "",
} 

const dialogsReducer = (state=initialState, action) => {
  

  switch (action.type) {
    
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageBody,
        };
     return{
        ...state,
        newMessageBody : "",
        messages:[...state.messages, newMessage]
      };
        
      case UPDATE_MESSAGE_TEXT:
      return{
        ...state,
        newMessageBody:action.newMessageText
      };
      
    default:
      return state;
  }
};

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_MESSAGE_TEXT, newMessageText: body };
};
export const sendMessageСreator = () => {
  return { type: ADD_MESSAGE };
};

export default dialogsReducer;
