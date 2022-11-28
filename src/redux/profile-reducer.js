import avatar from "../img/avatar.png"

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState ={
  posts: [
    {
      id: 1,
      likesCount: 10,
      dislikesCount: 1,
      message: "go little rock star",
      img: (
        <img src={avatar} alt="ava"/>     ),
    },
    {
      id: 2,
      likesCount: 25,
      dislikesCount: 3,
      message: "you are the best",
      img: (
        <img src={avatar} alt="ava"/>     ),
    },
    { id: 3, likesCount: 1, dislikesCount: 12, message: "be my legend",img: (
      <img src={avatar} alt="ava"/>     ), },
    { id: 4, likesCount: 5, dislikesCount: 6, message: "yes, i agree",img: (
      <img src={avatar} alt="ava"/>     ), },
  ],
  newPostText: "",
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        likesCount: 0,
        dislikesCount: 0,
        message: state.newPostText,
        img: (
          <img src={avatar} alt="ava"/>     ),
      };
      return {
        ...state,
        newPostText : "",
        posts:[...state.posts,newPost]
      };
     
    case UPDATE_NEW_POST_TEXT:{
      return{
        ...state,
        newPostText:action.newText
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPosttextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
